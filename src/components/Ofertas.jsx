import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { T } from '../i18n';
import { track } from '../lib/analytics';
import { WhatsAppIcon, WHATSAPP_PHONE } from './WhatsApp';

/* Servicios con precio, justo después del hero.
   Textos en src/i18n/{es,en}.js → T.ofertas */

const waLink = (item) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`${T.ofertas.waIntro}${item.title}${T.ofertas.waOutro}`)}`;

export default function Ofertas() {
  const O = T.ofertas;
  return (
    <section id="ofertas" className="bg-[var(--color-ds-bg)] border-b border-[var(--color-ds-border)] py-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-[var(--color-ds-signal)] mb-4">// 
          {O.kicker}
        </p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-ds-text)] uppercase mb-6">
          {O.title}
        </h2>
        <p className="text-base md:text-lg text-[var(--color-ds-text)] max-w-3xl leading-relaxed mb-14">
          {O.lead}
        </p>

        {O.pains && (
          <div className="mb-14">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--color-ds-signal)] mb-4">// {O.painsTitle}</p>
            <ul className="grid md:grid-cols-3 gap-4">
              {O.pains.map((p) => (
                <li key={p.text}>
                  <a
                    href={`#oferta-${p.to}`}
                    className="group flex h-full items-start justify-between gap-4 border border-[var(--color-ds-border)] bg-[var(--color-ds-surface)] p-5 text-[var(--color-ds-text)] transition-colors hover:border-[var(--color-ds-primary)]"
                  >
                    <span className="text-base md:text-lg font-bold leading-snug">{p.text}</span>
                    <ArrowRight size={18} className="shrink-0 mt-1 text-[var(--color-ds-signal)] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-ds-border)] border border-[var(--color-ds-border)] mb-6">
          {O.items.map((item) => (
            <article
              key={item.id}
              id={`oferta-${item.id}`}
              className={`bg-[var(--color-ds-surface)] p-8 flex flex-col ${item.featured ? 'lg:col-span-1 ring-1 ring-inset ring-[var(--color-ds-primary)]' : ''}`}
            >
              {item.tag && (
                <span className="self-start font-mono text-[10px] uppercase tracking-widest text-black bg-[var(--color-ds-primary)] px-2 py-1 mb-4">
                  {item.tag}
                </span>
              )}
              <h3 className="text-2xl font-bold text-[var(--color-ds-text)] mb-1">{item.title}</h3>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-ds-muted)] mb-5">{item.who}</p>
              <p className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl md:text-4xl font-black text-[var(--color-ds-primary)]">{item.price}</span>
                {item.delivery && <span className="font-mono text-[11px] text-[var(--color-ds-muted)] uppercase">{O.delivery} {item.delivery}</span>}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-[var(--color-ds-text)] leading-snug">
                    <Check size={16} className="shrink-0 mt-0.5 text-[var(--color-ds-signal)]" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
              <a
                href={waLink(item)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('ofertas_click', { offer: item.id })}
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-ds-primary)] text-black px-6 py-3 text-xs font-bold tracking-wider uppercase font-mono transition-colors hover:bg-[#b5952f]"
              >
                <WhatsAppIcon size={14} /> {O.cta}
              </a>
              <div className="mt-4 min-h-[1.5rem]">
              {item.href && (
                <a
                  href={item.href}
                  onClick={() => track('service_landing_click', { service: item.id })}
                  className="inline-block font-mono text-xs uppercase tracking-wider underline underline-offset-4 decoration-[var(--color-ds-primary)] text-[var(--color-ds-text)] hover:text-[var(--color-ds-primary)]"
                >
                  {item.hrefLabel}
                </a>
              )}
              </div>
              </div>
            </article>
          ))}
        </div>
        <p className="font-mono text-[11px] text-[var(--color-ds-muted)] mb-16">{O.note}</p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--color-ds-text)] mb-6">{O.stepsTitle}</h3>
            <ol className="space-y-6">
              {O.steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-mono text-sm font-bold text-[var(--color-ds-signal)] pt-1">{s.n}</span>
                  <div>
                    <p className="font-bold text-[var(--color-ds-text)]">{s.title}</p>
                    <p className="text-sm text-[var(--color-ds-muted)] leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--color-ds-text)] mb-6">{O.whoTitle}</h3>
            <p className="text-sm md:text-base text-[var(--color-ds-text)] leading-relaxed">{O.whoText}</p>
            <a
              href="#maison"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-ds-primary)] hover:text-[var(--color-ds-text)] transition-colors"
            >
              {O.bigger} <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--color-ds-text)] mb-6">{O.faqTitle}</h3>
        <div className="border-t border-[var(--color-ds-border)] max-w-3xl">
          {O.faq.map((f) => (
            <details key={f.q} className="group border-b border-[var(--color-ds-border)] py-4">
              <summary className="cursor-pointer list-none flex justify-between gap-4 font-bold text-[var(--color-ds-text)]">
                {f.q}
                <span className="text-[var(--color-ds-primary)] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-sm text-[var(--color-ds-muted)] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
