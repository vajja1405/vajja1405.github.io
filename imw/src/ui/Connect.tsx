import { useState } from 'preact/hooks';
import { apiBase } from '../api';
import { track } from '../analytics';

const NAME = 'rahul-vajja';

const TOOLS: [string, string][] = [
  ['search_evidence', 'Search verified claims by topic'],
  ['get_skill_evidence', 'Direct, related or not demonstrated, with the proof'],
  ['compare_job_description', 'Map a job description to evidence, with no score'],
  ['evaluate_requirements', 'Classify requirement phrases your AI extracted'],
  ['get_role_evidence', 'Coverage for one of 20 target role profiles'],
  ['get_project', 'Summary, claims, limits, decisions, failures'],
  ['get_architecture', 'Components as implemented, with supporting claims'],
  ['get_failure_cases', 'Problem, detection, fix and prevention'],
  ['get_code_reference', 'Exact files and lines, pinned to a commit'],
  ['get_known_gaps', 'What is not demonstrated, and what is held back'],
  ['list_projects', 'Projects and roles with ids'],
];

const PROMPTS = [
  'Using the rahul-vajja tools, compare Rahul against this job description and cite claim ids: …',
  'Does Rahul have AI evaluation experience? Show the evidence and the code.',
  'What would you challenge in the Drug Interaction Agent architecture?',
];

export function ConnectView() {
  const url = `${apiBase()}/mcp`;
  const clients: { id: string; label: string; how: string; code: string }[] = [
    { id: 'claude-code', label: 'Claude Code', how: 'Run in a terminal:', code: `claude mcp add --transport http ${NAME} ${url}` },
    { id: 'claude', label: 'Claude', how: 'In Claude (web or desktop): Settings → Connectors → Add custom connector, then paste this URL:', code: url },
    { id: 'cursor', label: 'Cursor', how: 'Add to ~/.cursor/mcp.json:', code: JSON.stringify({ mcpServers: { [NAME]: { url } } }, null, 2) },
    { id: 'vscode', label: 'VS Code', how: 'Add to .vscode/mcp.json:', code: JSON.stringify({ servers: { [NAME]: { type: 'http', url } } }, null, 2) },
    { id: 'other', label: 'Other', how: 'Any MCP client that supports Streamable HTTP:', code: url },
  ];
  const [client, setClient] = useState(clients[0].id);
  const [copied, setCopied] = useState('');
  const [test, setTest] = useState<{ state: 'idle' | 'running' | 'ok' | 'fail'; text?: string }>({ state: 'idle' });
  const c = clients.find((x) => x.id === client)!;

  const copy = async (text: string, key: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(key); setTimeout(() => setCopied(''), 1800); } catch { /* clipboard unavailable */ }
    track('contact_clicked_from_ai', { mcp_copy: key });
  };

  // A real tools/list call from this page, so visitors can see the server answer before connecting.
  const runTest = async () => {
    setTest({ state: 'running' });
    const t0 = performance.now();
    try {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 45000);
      const res = await fetch(url, {
        method: 'POST', signal: ctl.signal,
        headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' },
        body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/list', params: {} }),
      });
      clearTimeout(timer);
      const data = await res.json();
      const n = data?.result?.tools?.length;
      if (!res.ok || !n) throw new Error(`HTTP ${res.status}`);
      setTest({ state: 'ok', text: `${n} tools available · ${Math.round(performance.now() - t0)} ms` });
    } catch {
      setTest({ state: 'fail', text: 'The server did not answer. It may be waking up; try again in a minute.' });
    }
  };

  return (
    <div class="imw-view imw-connect">
      <header class="imw-view-head">
        <div class="imw-eyebrow">Connect Rahul to your AI</div>
        <h3 data-autofocus tabIndex={-1}>Ask your own assistant, with the same evidence.</h3>
        <p class="imw-help">
          The verified evidence behind this portfolio is also a public, read-only MCP server. Connect it to Claude, Claude Code, Cursor or
          VS Code and ask about Rahul's work from inside your own tools. Your AI does the reasoning; every result carries its evidence
          strength and a usage policy, and nothing you send is stored.
        </p>
      </header>

      <div class="imw-endpoint">
        <code>{url}</code>
        <button class="imw-btn" onClick={() => copy(url, 'url')}>{copied === 'url' ? 'Copied' : 'Copy URL'}</button>
        <button class="imw-btn" onClick={runTest} disabled={test.state === 'running'}>{test.state === 'running' ? 'Checking…' : 'Test the server'}</button>
        {test.text && <span class={`imw-verdict is-${test.state === 'ok' ? 'pass' : 'warn'}`} role="status">{test.state === 'ok' ? '✓ ' : '! '}{test.text}</span>}
      </div>

      <div class="imw-seg is-scroll" role="tablist" aria-label="Client">
        {clients.map((x) => <button key={x.id} role="tab" aria-selected={client === x.id} class={client === x.id ? 'is-on' : ''} onClick={() => setClient(x.id)}>{x.label}</button>)}
      </div>
      <p class="imw-help">{c.how}</p>
      <div class="imw-snippet">
        <pre><code>{c.code}</code></pre>
        <button class="imw-btn" onClick={() => copy(c.code, c.id)}>{copied === c.id ? 'Copied' : 'Copy'}</button>
      </div>

      <section class="imw-lab-section">
        <div class="imw-eyebrow">Then try</div>
        <ul class="imw-bullets">{PROMPTS.map((p) => <li key={p}>{p}</li>)}</ul>
      </section>

      <section class="imw-lab-section">
        <div class="imw-eyebrow">Tools · all read-only</div>
        <ul class="imw-tools">{TOOLS.map(([n, d]) => <li key={n}><code>{n}</code><span>{d}</span></li>)}</ul>
        <p class="imw-help">Also available: a <code>rahul://profile</code> resource with the evidence policy, <code>rahul://roles</code>, and an <code>evaluate_for_role</code> prompt.</p>
      </section>
    </div>
  );
}
