import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import type { KB } from './engine/kb';
import type { CoverageAnalysis, PersonaId, RequirementCoverage } from './engine/types';
import type { ApiStatus } from './api';
import type { Session } from './dossier/model';

export type Mode = 'ask' | 'role' | 'xray' | 'map' | 'lab' | 'brief' | 'connect' | 'export';

export type Inspect =
  | { kind: 'claim'; id: string }
  | { kind: 'node'; arch: string; node: string }
  | { kind: 'req'; req: RequirementCoverage }
  | { kind: 'entity'; id: string }
  | { kind: 'group'; id: string }
  | { kind: 'basis'; retrieved: string[]; checks?: { label: string; ok: boolean }[]; model?: string; engine: string }
  | null;

export interface Workspace {
  kb: KB;
  persona: PersonaId;
  setPersona: (p: PersonaId) => void;
  mode: Mode;
  go: (mode: Mode, arg?: string) => void;
  modeArg?: string;
  inspect: Inspect;
  setInspect: (i: Inspect) => void;
  coverage: CoverageAnalysis | null;
  /** Sets the active analysis and records it for the PDF; `replaces` swaps a refined analysis in for its first pass. */
  setCoverage: (c: CoverageAnalysis | null, replaces?: CoverageAnalysis) => void;
  /** What this visitor has explored, for the downloadable dossier. Kept in memory only. */
  session: Session;
  noteEntity: (id: string | undefined) => void;
  ask: (q: string) => void;
  api: ApiStatus;
  jump: (anchor: string) => void;
  lensOn: boolean;
  toggleLens: (on?: boolean, analysis?: CoverageAnalysis) => void;
  close: () => void;
}

export const Ctx = createContext<Workspace>(null as unknown as Workspace);
export const useWs = () => useContext(Ctx);

export const reducedMotion = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
