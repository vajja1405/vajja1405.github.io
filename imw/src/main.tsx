import { render } from 'preact';
import { App, type OpenOptions } from './ui/App';
import { loadKB, type KB } from './engine/kb';
import { evidenceUrl } from './evidence-url';
import './styles.css';

let kbPromise: Promise<KB> | null = null;
let host: HTMLElement | null = null;
let controller: ((o: OpenOptions) => void) | null = null;

/** Entry point used by the page loader: `import('./assets/imw/imw.js').then(m => m.open(...))`. */
export async function open(opts: OpenOptions = {}): Promise<void> {
  kbPromise ??= loadKB(evidenceUrl('evidence.json')).catch((e) => {
    kbPromise = null;
    throw e;
  });
  const kb = await kbPromise;
  if (controller) {
    controller(opts);
    return;
  }
  host = document.createElement('div');
  host.id = 'imw-host';
  document.body.appendChild(host);
  render(<App kb={kb} initial={opts} register={(fn) => (controller = fn)} />, host);
}
