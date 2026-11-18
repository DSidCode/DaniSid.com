import React from 'react';
import { ArrowRight } from 'lucide-react';
import { T, LANG } from '../i18n';
import { track } from '../lib/analytics';
import { WhatsAppIcon, WHATSAPP_PHONE } from './WhatsApp';

/* Caso real: la automatización de mi propia captación de clientes.
   Es la demo del servicio de automatización con IA. Dice con honestidad
   qué está construido y que aún no hay resultados.
   Textos en src/i18n/{es,en}.js → T.caso */

const BLOG_URL = '/blog/automatice-mi-captacion-de-clientes/';

export default function CasoCaptacion() {
  const C = T.caso;
  const wa = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(C.waText)}`;

  return (
    <section
      id="caso-captacion"
      aria-labelledby="caso-captacion-title"
      className="bg-[var(--color-ds-surface)] border-b border-[var(--color-ds-border)] py-20 md:py-28"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[var(--color-ds-signal)] mb-4">
          {C.kicker}
        </p>
        <h2
          id="caso-captacion-title"
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[var(--color-ds-text)] uppercase mb-6"
        >
          {C.title}
        </h2>
        <p className="text-base md:text-lg text-[var(--color-ds-text)] max-w-3xl leading-relaxed mb-12">{C.lead}</p>

        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--color-ds-signal)] mb-4">// {C.flowTitle}</p>
        <ol className="grid md:grid-cols-5 gap-px bg-[var(--color-ds-border)] border border-[var(--color-ds-border)] mb-10">
          {C.steps.map((s) => (
            <li key={s.n} className="bg-[var(--color-ds-bg)] p-6 flex flex-col">
              <span className="font-mono text-sm font-bold text-[var(--color-ds-signal)] mb-3">{s.n}</span>
              <h3 className="text-lg font-bold text-[var(--color-ds-text)] mb-2">{s.title}</h3>
              <p className="text-sm text-[var(--color-ds-muted)] leading-relaxed flex-1">{s.text}</p>
              <span
                className={`mt-5 self-start font-mono text-[10px] uppercase tracking-widest px-2 py-1 border ${
                  s.status === 'Construido' || s.status === 'Built'
                    ? 'border-[var(--color-ds-primary)] text-[var(--color-ds-primary)]'
                    : 'border-[var(--color-ds-border)] text-[var(--color-ds-muted)]'
                }`}
              >
                {s.status}
              </span>
            </li>
          ))}
        </ol>

        <div className="border border-[var(--color-ds-border)] bg-[var(--color-ds-bg)] p-6 md:p-8 max-w-3xl mb-10">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ds-primary)] mb-2">{C.stateTitle}</p>
          <p className="text-sm md:text-base text-[var(--color-ds-text)] leading-relaxed mb-4">{C.state}</p>
          <p className="text-sm text-[var(--color-ds-muted)] leading-relaxed">{C.takeaway}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('contact_whatsapp', { location: 'caso-captacion' })}
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-ds-primary)] text-black px-6 py-4 text-xs font-bold tracking-wider uppercase font-mono transition-colors hover:bg-[#b5952f]"
          >
            <WhatsAppIcon size={14} /> {C.ctaTalk}
          </a>
          {LANG === 'es' && (
            <a
              href={BLOG_URL}
              onClick={() => track('guide_click', { guide: BLOG_URL })}
              className="inline-flex items-center justify-center gap-2 border border-[var(--color-ds-border)] text-[var(--color-ds-text)] px-6 py-4 text-xs font-bold tracking-wider uppercase font-mono transition-colors hover:border-[var(--color-ds-primary)] hover:text-[var(--color-ds-primary)]"
            >
              {C.ctaRead} <ArrowRight size={14} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
