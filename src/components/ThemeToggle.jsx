import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { track } from '../lib/analytics';
import { T } from '../i18n';

/* ════════════════════════════════════════════
   INTERRUPTOR CLARO / OSCURO
   Oscuro (Nigredo) es la identidad de la marca y el tema por defecto;
   claro (Albedo) es opcional y se recuerda en localStorage.
   El tema guardado lo aplica index.html antes de pintar (sin parpadeo).
   ════════════════════════════════════════════ */

const STORAGE_KEY = 'danisid-theme';
const THEME_COLOR = { dark: '#0A0A0A', light: '#F7F5F0' };

export default function ThemeToggle({ className = '' }) {
  const [light, setLight] = useState(() => document.documentElement.classList.contains('theme-albedo'));

  const toggle = () => {
    const next = !light;
    const root = document.documentElement;
    root.classList.toggle('theme-albedo', next);
    root.classList.toggle('theme-nigredo', !next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next ? THEME_COLOR.light : THEME_COLOR.dark);
    try { localStorage.setItem(STORAGE_KEY, next ? 'light' : 'dark'); } catch { /* modo privado: no se recuerda */ }
    track('theme_switch', { to: next ? 'light' : 'dark' });
    setLight(next);
  };

  const label = light ? T.theme.toDark : T.theme.toLight;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`w-11 h-11 flex items-center justify-center text-[var(--color-ds-muted)] hover:text-[var(--color-ds-primary)] transition-colors ${className}`}
    >
      {light ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
