"""MCP server tests: real protocol over HTTP (both negotiation modes), tool behaviour, parity with
the browser engine (imw/tests/engine.test.ts), leak checks, host validation and rate limiting."""
from __future__ import annotations

import json
import os
import socket
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

import anyio
import pytest
from fastapi.testclient import TestClient
from mcp import Client

from app import main
from app import mcp_server as srv
from app.kb import load_kb
from app.ratelimit import SlidingWindow

API = Path(__file__).resolve().parents[1]
TOOLS = {"search_evidence", "get_skill_evidence", "compare_job_description", "evaluate_requirements", "get_role_evidence",
         "list_projects", "get_project", "get_architecture", "get_failure_cases", "get_code_reference", "get_known_gaps"}

JD = """Senior Applied AI Engineer
About the role
You will build LLM-powered products for healthcare customers.
Requirements:
- 5+ years of experience with Python and SQL
- Production RAG systems with LangChain and a vector database such as Pinecone
- Build REST APIs with FastAPI; deploy with Docker and Kubernetes on AWS
- Experience evaluating LLMs (LLM-as-judge, regression tests)
Nice to have:
- Terraform, Kafka
Benefits:
- Health insurance, 401k, and a wellness stipend
Equal Opportunity Employer"""


# ---- Real protocol over HTTP ------------------------------------------------------------------

@pytest.fixture(scope="module")
def server_url():
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        port = s.getsockname()[1]
    proc = subprocess.Popen([sys.executable, "-m", "uvicorn", "app.main:app", "--port", str(port), "--no-access-log"],
                            cwd=API, env={**os.environ, "ANTHROPIC_API_KEY": ""}, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        for _ in range(60):
            try:
                urllib.request.urlopen(f"http://127.0.0.1:{port}/api/health", timeout=1)
                break
            except OSError:
                time.sleep(0.2)
        yield f"http://127.0.0.1:{port}/mcp"
    finally:
        proc.terminate()
        proc.wait(timeout=10)


@pytest.mark.parametrize("mode", ["auto", "legacy"])
def test_protocol_over_http(server_url, mode):
    """Modern (2026-07-28, stateless) and legacy (initialize handshake) clients can both connect and call tools."""
    async def run():
        async with Client(server_url, mode=mode) as client:
            tools = await client.list_tools()
            names = {t.name for t in tools.tools}
            assert names == TOOLS
            assert all(t.annotations and t.annotations.read_only_hint for t in tools.tools)
            result = await client.call_tool("get_skill_evidence", {"skill": "Kubernetes"})
            data = result.structured_content or json.loads(result.content[0].text)
            assert data["results"][0]["category"] == "Not currently demonstrated"
            profile = await client.read_resource("rahul://profile")
            assert "Evidence policy" in profile.contents[0].text
            prompts = await client.list_prompts()
            assert "evaluate_for_role" in {p.name for p in prompts.prompts}
    anyio.run(run)


# ---- Tool behaviour (called directly) -----------------------------------------------------------

def cat(result: dict, requirement: str) -> str:
    return next(r["category"] for r in result["requirements"] if r["requirement"] == requirement)


def test_unsupported_skill_is_not_invented():
    r = srv.get_skill_evidence("production Kubernetes")["results"][0]  # the gap, not "production"
    assert r["category"] == "Not currently demonstrated" and r["evidence"] == []
    assert "Docker" in r["explanation"]


def test_skill_with_direct_evidence():
    r = srv.get_skill_evidence("AI evaluation")["results"][0]
    assert r["category"] == "Direct evidence"
    assert any(c["project_id"] == "voice" for c in r["evidence"])
    assert all(c["sources"] for c in r["evidence"])


def test_near_term_is_only_related_evidence():
    r = srv.get_skill_evidence("Pinecone")["results"][0]
    assert r["category"] == "Related evidence" and "not demonstrated" in r["explanation"]


def test_job_description_parity_with_browser_engine():
    out = srv.compare_job_description(JD)
    assert cat(out, "Retrieval-augmented generation") == "Direct evidence"
    assert cat(out, "Python") == "Direct evidence"
    assert cat(out, "Kubernetes / container orchestration") == "Not currently demonstrated"
    assert cat(out, "Pinecone") == "Related evidence"
    iac = next(r for r in out["requirements"] if r["requirement"] == "Infrastructure as code")
    assert iac["listed_as"] == "preferred"
    assert any("5+ years" in n for n in out["notes"])
    assert out["closest_target_profile"] == "Applied AI Engineer"
    assert sum(1 for r in out["requirements"] if r["requirement"] == "Healthcare & clinical data") == 1  # benefits ignored
    assert "%" not in json.dumps(out["counts"])


def test_requirement_list_maps_unknown_phrases_to_not_demonstrated():
    out = srv.evaluate_requirements(["COBOL mainframe modernization", "Kotlin", "LangGraph"])
    assert cat(out, "COBOL mainframe modernization") == "Not currently demonstrated"
    assert cat(out, "Languages beyond Python / SQL / TypeScript") == "Not currently demonstrated"
    assert cat(out, "LangGraph") == "Direct evidence"
    lg = next(r for r in out["requirements"] if r["requirement"] == "LangGraph")
    assert lg.get("note") == "Supported only by self-reported employment experience."


def test_role_evidence():
    out = srv.get_role_evidence("AI Evaluation Engineer")
    assert out["strongest_evidence_from"][0] == "Voice-Agent QA Harness"
    assert "#imw=role:ai_eval" in out["view_on_site"]
    assert "error" in srv.get_role_evidence("astronaut")


def test_project_architecture_failures_and_code():
    p = srv.get_project("TIFIN")
    assert p["id"] == "tifin" and all(c["evidence"].startswith("self-reported") for c in p["claims"])
    assert srv.get_project("drug interaction agent")["has_architecture"] is True
    assert len(srv.get_architecture("dia")["components"]) == 10
    assert srv.get_architecture("tifin").get("error")
    assert any("Barge-in" in f["title"] for f in srv.get_failure_cases("voice")["failures"])
    refs = srv.get_code_reference("voice.bargein")["references"]
    assert refs and all("/blob/" in r["url"] for r in refs)
    assert "error" in srv.get_project("not a project")


def test_search_returns_only_verified_claims():
    kb = load_kb()
    for q in ["what did he ship", "TIFIN accuracy improvement", "Citizen Health patients", "latency redis", "PSNR SSIM"]:
        for c in srv.search_evidence(q)["claims"]:
            assert c["id"] in kb.statable_ids


def test_no_tool_leaks_unverified_figures_or_claims():
    kb = load_kb()
    hidden_ids = {cid for cid in kb.claims if cid not in kb.statable_ids}
    calls = [srv.list_projects(), srv.get_known_gaps(), srv.compare_job_description(JD),
             *(srv.get_project(e, depth=d) for e in kb.entities for d in ("recruiter", "engineer", "manager", "founder", "researcher")),
             *(srv.search_evidence(q) for q in ["accuracy", "patients records", "latency", "gpt-4o", "psnr", "faster", "hack-a-roo", "ibm"]),
             *(srv.get_skill_evidence(s) for s in ["recommender systems", "LLM evaluation", "caching"]),
             *(srv.get_role_evidence(r["id"]) for r in kb.raw["roles"])]
    text = json.dumps(calls)
    for cid in hidden_ids:
        assert f'"{cid}"' not in text, cid
    for figure in ["19%", "24%", "5,000+", "10,000+", "GPT-4o fallback", "20+ seconds", "19–22 dB", "5×", "5x faster"]:
        assert figure not in text, figure


# ---- Transport security and limits --------------------------------------------------------------

def test_foreign_host_header_is_rejected():
    with TestClient(main.app, base_url="https://evil.example") as c:
        r = c.post("/mcp", headers={"Accept": "application/json, text/event-stream", "Content-Type": "application/json"},
                   json={"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {}})
    assert r.status_code == 421


def test_mcp_rate_limit(monkeypatch):
    monkeypatch.setattr(main, "MCP_LIMIT", SlidingWindow(2, 600))
    h = {"Accept": "application/json, text/event-stream", "Content-Type": "application/json", "x-forwarded-for": "7.7.7.7"}
    body = {"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {}}
    with TestClient(main.app, base_url="https://astra6-interview-my-work.hf.space") as c:
        codes = [c.post("/mcp", headers=h, json=body).status_code for _ in range(3)]
    assert codes == [200, 200, 429]
