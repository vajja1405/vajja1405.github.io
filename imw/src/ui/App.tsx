import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks';
import type { KB } from '../engine/kb';
import type { Answer, CoverageAnalysis, PersonaId } from '../engine/types';
import { answer } from '../engine/answer';
import { analyzeJD, looksLikeJD } from '../engine/jd';
import { askModel, parseJDRemote, probe, type ApiStatus } from '../api';
import { Ctx, type Inspect, type Mode, type Workspace } from '../context';
import { track } from '../analytics';
import { applyLens, clearLens, flashSection } from '../lens';
import { AskView, type Turn } from './Ask';
import { RoleView } from './Role';
import { XRayView } from './XRay';
import { MapView } from './Map';
import { LabView } from './Lab';
import { BriefView } from './Brief';
import { ConnectView } from './Connect';
import { EvidencePanel } from './Evidence';
import { Rail } from './Rail';

export interface OpenOptions { mode?: string; arg?: string; trigger?: HTMLElement }

const MODES: { id: Mode; label: string; hint: string }[] = [
  { id: 'ask', label: 'Ask', hint: 'Questions answered from verified evidence' },
  { id: 'role', label: 'Role fit', hint: 'Evidence coverage for a role or job description' },
  { id: 'xray', label: 'X-Ray', hint: 'Explore each system component by component' },
  { id: 'map', label: 'Map', hint: 'The whole body of work as an evidence graph' },
  { id: 'lab', label: 'Proof lab', hint: 'Replays, break-it tests and live numbers' },
  { id: 'brief', label: 'Brief', hint: 'A 10-minute technical interview brief' },
  { id: 'connect', label: 'Connect your AI', hint: 'Use this evidence from Claude, Cursor or VS Code over MCP' },
];

// Intents where the model may write the prose. Structured intents (coverage, comparisons,
// premise checks, refusals) always come from the deterministic engine.
const MODEL_INTENTS = new Set(['retrieval', 'no_evidence', 'topic', 'entity', 'focused', 'skill', 'personally', 'scale', 'challenge', 'level', 'overview', 'shipped', 'beyond_wrappers', 'evaluation', 'strongest']);
const STRUCTURAL = new Set(['entity', 'claims', 'xray', 'chart', 'trace', 'decisions', 'failures']);

export function App({ kb, initial, register }: { kb: KB; initial: OpenOptions; register: (fn: (o: OpenOptions) => void) => void }) {
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useState<Mode>('ask');
  const [modeArg, setModeArg] = useState<string | undefined>();
  const [persona, setPersona] = useState<PersonaId>('recruiter');
  const [inspect, setInspect] = useState<Inspect>(null);
  const [coverage, setCoverage] = useState<CoverageAnalysis | null>(null);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [api, setApi] = useState<ApiStatus>('checking');
  const [lensOn, setLensOn] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const probed = useRef(false);

  const go = useCallback((m: Mode, arg?: string) => {
    setMode(m);
    setModeArg(arg);
    if (m === 'xray') track('xray_opened', { project: arg ?? 'dia' });
    dialog.current?.querySelector<HTMLElement>('.imw-main')?.scrollTo({ top: 0 });
  }, []);

  const openWith = useCallback((o: OpenOptions) => {
    trigger.current = o.trigger ?? (document.activeElement as HTMLElement);
    setVisible(true);
    const m = (MODES.find((x) => x.id === o.mode)?.id ?? 'ask') as Mode;
    if (o.mode === 'transform' && o.arg) { go('role', o.arg); } else go(m, o.arg);
    track('interview_my_work_opened', { mode: m });
  }, [go]);

  useEffect(() => { register(openWith); openWith(initial); }, []);

  // Warm the (possibly sleeping) API the first time the workspace opens.
  useEffect(() => { if (visible && !probed.current) { probed.current = true; void probe(setApi); } }, [visible]);

  // Modal behaviour: lock page scroll, make the page inert, restore focus on close.
  useEffect(() => {
    const page = document.querySelector('.wrap');
    const fab = document.querySelector('.imw-fab');
    if (visible) {
      document.documentElement.classList.add('imw-open');
      page?.setAttribute('inert', '');
      fab?.setAttribute('inert', '');
      requestAnimationFrame(() => dialog.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus() ?? dialog.current?.focus());
    } else {
      document.documentElement.classList.remove('imw-open');
      page?.removeAttribute('inert');
      fab?.removeAttribute('inert');
      trigger.current?.focus?.();
    }
  }, [visible]);

  const close = useCallback(() => setVisible(false), []);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      if (inspect && matchMedia('(max-width: 1100px)').matches) setInspect(null);
      else close();
      return;
    }
    if (e.key !== 'Tab' || !dialog.current) return;
    const f = [...dialog.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])')].filter((el) => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  const jump = useCallback((anchor: string) => {
    setVisible(false);
    track('project_opened_from_ai', { anchor });
    flashSection(anchor, () => setVisible(true));
  }, []);

  const toggleLens = useCallback((on?: boolean, analysis?: CoverageAnalysis) => {
    const next = on ?? !lensOn;
    const cov = analysis ?? coverage;
    if (next && cov) {
      if (analysis) setCoverage(analysis);
      applyLens(kb, cov, { reopen: () => { setVisible(true); go('role'); }, restore: () => setLensOn(false) });
      setLensOn(true);
      setVisible(false);
      track('portfolio_lens_applied', { source: cov.source });
    } else {
      clearLens();
      setLensOn(false);
    }
  }, [lensOn, coverage, kb, go]);

  const ask = useCallback(async (raw: string) => {
    const q = raw.trim();
    if (!q) return;
    go('ask');
    const id = Date.now();
    const lastEntities = [...turns].reverse().find((t) => t.a?.entities.length)?.a?.entities;
    const local = answer(kb, q, { persona, roleId: coverage?.roleId, lastEntities });
    const isJD = looksLikeJD(q);
    if (local.intent === 'jd' || local.intent === 'role') {
      const cov = local.blocks.find((b) => b.type === 'coverage');
      if (cov && cov.type === 'coverage') setCoverage(cov.analysis);
      if (isJD) track('jd_analyzed', { requirements: cov && cov.type === 'coverage' ? cov.analysis.requirements.length : 0 });
    }
    const useModel = api === 'ready' && MODEL_INTENTS.has(local.intent);
    setTurns((ts) => [...ts, { id, q: isJD ? 'Job description (pasted)' : q, a: useModel ? undefined : local, pending: useModel }]);

    if (isJD && api === 'ready') {
      parseJDRemote(q).then((phrases) => {
        if (!phrases.length) return;
        const refined = analyzeJD(kb, q, phrases);
        setCoverage(refined);
        setTurns((ts) => ts.map((t) => t.id === id && t.a ? { ...t, a: { ...t.a, blocks: t.a.blocks.map((b) => b.type === 'coverage' ? { ...b, analysis: refined } : b), refined: true } as Answer & { refined: boolean } } : t));
      }).catch(() => { /* deterministic parse already shown */ });
    }
    if (!useModel) return;

    const history = turns.filter((t) => t.a).slice(-3).map((t) => ({ q: t.q, cites: t.a!.basis?.retrieved?.slice(0, 8) ?? [] }));
    let final: Answer;
    try {
      const m = await askModel(kb, q, persona, history, coverage?.roleId);
      // The model writes the prose; the evidence engine supplies the inspectable structure.
      const extra = local.blocks.filter((b) => STRUCTURAL.has(b.type)).map((b) => (b.type === 'claims' ? { ...b, title: b.title ?? 'Supporting evidence' } : b));
      final = { ...m, blocks: [...m.blocks, ...extra], actions: local.actions, followups: m.followups.length ? m.followups : local.followups, entities: [...new Set([...m.entities, ...local.entities])] };
    } catch {
      final = { ...local, blocks: [{ type: 'note', tone: 'info', text: 'The AI service did not return a validated answer, so this one comes from the offline evidence engine.' }, ...local.blocks] };
    }
    setTurns((ts) => ts.map((t) => (t.id === id ? { ...t, a: final, pending: false } : t)));
  }, [kb, persona, coverage, api, turns, go]);

  const ws: Workspace = useMemo(() => ({
    kb, persona, setPersona, mode, go, modeArg, inspect, setInspect: (i) => { setInspect(i); if (i) track('evidence_opened', { kind: i.kind }); },
    coverage, setCoverage, ask, api, jump, lensOn, toggleLens, close,
  }), [kb, persona, mode, go, modeArg, inspect, coverage, ask, api, jump, lensOn, toggleLens, close]);

  return (
    <Ctx.Provider value={ws}>
      <div class="imw" hidden={!visible}>
        <div class="imw-backdrop" onClick={close} />
        <div class="imw-dialog" ref={dialog} role="dialog" aria-modal="true" aria-labelledby="imw-title" tabIndex={-1} onKeyDown={onKey}>
          <header class="imw-top">
            <div class="imw-brand">
              <span class="imw-mark" aria-hidden="true">✦</span>
              <div>
                <h2 id="imw-title">Interview My Work</h2>
                <p>Evidence-gated · {kb.claims.filter((c) => c.status === 'verified').length} verified claims</p>
              </div>
            </div>
            <div class="imw-tabs" role="tablist" aria-label="Workspace views">
              {MODES.map((m) => (
                <button key={m.id} role="tab" aria-selected={mode === m.id} class={mode === m.id ? 'is-on' : ''} title={m.hint} onClick={() => go(m.id)}>
                  {m.label}
                </button>
              ))}
            </div>
            <div class="imw-top-right">
              <ApiPill status={api} />
              <select class="imw-persona-mobile" aria-label="Answer depth" value={persona} onChange={(e) => setPersona((e.target as HTMLSelectElement).value as PersonaId)}>
                {kb.personas.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
              </select>
              <button class="imw-icon" onClick={close} aria-label="Close Interview My Work">✕</button>
            </div>
          </header>
          <div class="imw-body">
            <aside class="imw-left" aria-label="Context"><Rail /></aside>
            <main class="imw-main" id="imw-main">
              {mode === 'ask' && <AskView turns={turns} />}
              {mode === 'role' && <RoleView />}
              {mode === 'xray' && <XRayView />}
              {mode === 'map' && <MapView />}
              {mode === 'lab' && <LabView />}
              {mode === 'brief' && <BriefView />}
              {mode === 'connect' && <ConnectView />}
            </main>
            <aside class={`imw-right${inspect ? ' has-item' : ''}`} aria-label="Evidence"><EvidencePanel /></aside>
          </div>
        </div>
      </div>
    </Ctx.Provider>
  );
}

function ApiPill({ status }: { status: ApiStatus }) {
  const label: Record<ApiStatus, string> = {
    checking: 'Connecting',
    waking: 'AI waking up · evidence ready',
    ready: 'AI + evidence',
    offline: 'Evidence engine',
  };
  const tip: Record<ApiStatus, string> = {
    checking: 'Checking the AI service.',
    waking: 'The AI service is starting. Answers come from the offline evidence engine until it is ready.',
    ready: 'Claude writes prose for open questions; every cited claim is validated against the evidence database.',
    offline: 'The AI service is unavailable. Every feature still works from the in-browser evidence engine.',
  };
  return <span class={`imw-pill is-${status}`} title={tip[status]} role="status"><i aria-hidden="true" />{label[status]}</span>;
}
