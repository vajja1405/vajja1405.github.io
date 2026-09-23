// Shapes of the evidence bundle produced by scripts/build_evidence.py.

export type Status = 'verified' | 'verification_required' | 'unsupported' | 'deprecated';
export type Strength = 'public_artifact' | 'self_reported' | 'resume_only';
export type PersonaId = 'recruiter' | 'engineer' | 'manager' | 'founder' | 'researcher';

export interface CodeRef { repo: string; path: string; lines?: [number, number]; label: string; url: string }
export interface Metric { label: string; value: string }

export interface Claim {
  id: string; entity: string; kind: 'fact' | 'metric' | 'limitation';
  status: Status; strength: Strength; public_safe: boolean;
  text: string; tags: string[]; sources: string[];
  code?: CodeRef[]; metrics?: Metric[]; note?: string; last_verified: string;
}

export interface Link { label: string; url: string; kind: string }
export interface Entity {
  id: string; kind: 'project' | 'research' | 'experience' | 'leadership' | 'education';
  name: string; short: string; tagline: string; dates: string; anchor: string;
  role?: string; domains: string[]; repo?: string; links: Link[];
  summaries: Partial<Record<PersonaId, string>>; questions: string[]; ownership: string;
}

export interface Source { id: string; type: string; title: string; url?: string; public: boolean; note?: string }
export interface Skill { id: string; name: string; group: string; aliases: string[]; near?: string[]; related: string[] }
export interface Gap { id: string; name: string; aliases: string[]; related: string[]; statement: string; verify?: boolean }
export interface Group { id: string; label: string }

export interface Decision { id: string; entity: string; title: string; choice: string; rationale: string; tradeoff: string; claims: string[]; sources: string[] }
export interface Failure {
  id: string; entity: string; title: string; problem: string; detection: string; diagnosis: string;
  fix: string; prevention: string; measurement: string; claims: string[]; code: CodeRef[]; sources: string[];
}
export interface Attack {
  id: string; entity: string; label: string; attempt: string; expected: string; observed: string;
  result: 'held' | 'flagged' | 'fixed'; trace: string | null; protection: string; code: CodeRef[];
}

export interface ArchNode {
  id: string; label: string; sub: string; col: number; row: number;
  detail: { purpose: string; input: string; output: string; why?: string; observed?: string; claims: string[] };
}
export interface Architecture {
  id: string; entity: string; title: string; note: string;
  lanes: { row: number; label: string }[]; nodes: ArchNode[]; edges: [string, string][];
}

export interface TraceStep { kind: string; label: string; body?: string; quote?: string; status?: 'pass' | 'fail' | 'warn' }
export interface Trace { id: string; entity: string; title: string; summary: string; source: string; steps: TraceStep[]; dataset?: string }

export interface Role {
  id: string; title: string; tier: 'strong' | 'adjacent' | 'stretch'; priority?: number;
  requirements: string[]; gaps: string[]; proof_note: string; level_note?: string; focus_entities: string[];
}
export interface Conflict { id: string; topic: string; label: string; site: string; resume: string; repo?: string; decision: string; claims: string[] }

export interface Bundle {
  version: string;
  subject: { name: string; first: string; headline: string; email: string; links: Record<string, string>; level_note: string };
  repos: Record<string, { name: string; sha: string }>;
  sources: Source[]; personas: { id: PersonaId; label: string; focus: string }[];
  entities: Entity[]; groups: Group[]; skills: Skill[]; gaps: Gap[]; claims: Claim[];
  decisions: Decision[]; failures: Failure[]; attacks: Attack[]; architectures: Architecture[];
  traces: Trace[]; datasets: Record<string, any>; roles: Role[]; conflicts: Conflict[];
}

// ---- Answer model (shared by the offline engine and the API) -------------------

export type Block =
  | { type: 'p'; text: string; cites?: string[] }
  | { type: 'claims'; title?: string; ids: string[] }
  | { type: 'entity'; id: string }
  | { type: 'coverage'; analysis: CoverageAnalysis }
  | { type: 'xray'; arch: string }
  | { type: 'failures'; ids: string[] }
  | { type: 'decisions'; ids: string[] }
  | { type: 'compare'; entities: string[]; rows: { label: string; values: string[] }[] }
  | { type: 'gaps'; items: { id: string; name: string; statement: string; closest: string[] }[] }
  | { type: 'chart'; chart: 'cliniq' | 'voice_quality' }
  | { type: 'trace'; id: string }
  | { type: 'note'; text: string; tone?: 'info' | 'warn' };

export type Action =
  | { kind: 'anchor'; label: string; target: string }
  | { kind: 'url'; label: string; target: string }
  | { kind: 'mode'; label: string; target: string; arg?: string }
  | { kind: 'ask'; label: string; target: string };

export interface Answer {
  blocks: Block[];
  followups: string[];
  actions: Action[];
  engine: 'evidence' | 'model';
  intent: string;
  entities: string[];
  /** Transparency record for "Why this answer?" — never model reasoning. */
  basis?: { retrieved: string[]; checks?: { label: string; ok: boolean }[]; model?: string };
}

export type Category = 'direct' | 'related' | 'verification' | 'missing';

export interface RequirementCoverage {
  id: string;             // skill/gap id, or 'term:<text>' for unmapped phrases
  label: string;
  category: Category;
  priority?: 'required' | 'preferred' | 'mentioned';
  claims: string[];       // statable claims supporting it (direct or related)
  entities: string[];
  via?: string;           // related skill used for "related" coverage
  strength?: 'artifact' | 'self_reported';
  statement?: string;     // gap statement / explanation
  pending?: string[];     // non-statable claim ids that would cover it if verified
  term?: string;
}

export interface CoverageAnalysis {
  title: string;
  source: 'role' | 'jd';
  roleId?: string;
  requirements: RequirementCoverage[];
  counts: Record<Category, number>;
  entities: { id: string; score: number; requirements: string[] }[];
  notes: string[];
  closestRole?: string;
}
