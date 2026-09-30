import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { track } from '../lib/analytics';
import { T, LANG, LANG_URLS } from '../i18n';

/* ════════════════════════════════════════════
   AVISO DE IDIOMA: si el navegador está en inglés y la página en español,
   ofrece la versión inglesa con un aviso discreto que se puede cerrar.
   Nunca redirige (perjudica al SEO y molesta). Se recuerda si se cerró.
   ════════════════════════════════════════════ */

const STORAGE_KEY = 'danisid-english-hint-closed';

function shouldShow() {
  if (LANG !== 'es' || !T.englishHint) return false;
  const prefersEnglish = (navigator.languages || [navigator.language]).some(l => l && l.toLowerCase().startsWith('en'))
    && !(navigator.language || '').toLowerCase().startsWith('es');
  if (!prefersEnglish) return false;
  try { return localStorage.getItem(STORAGE_KEY) !== '1'; } catch { return true; }
}

export default function EnglishHint() {
  const [open, setOpen] = useState(shouldShow);
  if (!open) return null;

  const close = () => {
    try { localStorage.setItem(STORAGE_KEY, '1'); } catch { /* modo privado: no se recuerda */ }
    setOpen(false);
  };

  return (
    <div lang="en" className="fixed bottom-5 left-5 z-50 flex items-center border border-[var(--color-ds-border)] bg-[var(--color-ds-bg)]/95 backdrop-blur-sm font-mono text-[10px] uppercase tracking-widest max-w-[calc(100vw-7rem)]">
      <a
        href={LANG_URLS.en}
        hrefLang="en"
        onClick={() => track('language_switch', { to: 'en', location: 'hint' })}
        className="flex items-center gap-2 pl-4 pr-2 min-h-11 text-[var(--color-ds-text)] hover:text-[var(--color-ds-primary)] transition-colors"
      >
        {T.englishHint.text} <ArrowRight size={12} />
      </a>
      <button
        type="button"
        onClick={close}
        aria-label={T.englishHint.close}
        className="w-11 h-11 flex items-center justify-center text-[var(--color-ds-muted)] hover:text-[var(--color-ds-text)] transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
