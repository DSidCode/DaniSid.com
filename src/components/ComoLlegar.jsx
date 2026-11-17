import React from 'react';
import { track } from '../lib/analytics';
import { T, LANG } from '../i18n';
import { WhatsAppIcon, WHATSAPP_URL } from './WhatsApp';

// No hay oficina física: el mapa enseña Madrid entera, sin calle ni número,
// y el "cómo llegar" lleva al contacto en vez de a una ruta.
const EMBED_URL = `https://www.google.com/maps?q=Madrid&z=11&hl=${LANG}&output=embed`;
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Madrid';

export default function ComoLlegar() {
  const L = T.location;

  return (
    <section
      id="como-llegar"
      aria-labelledby="como-llegar-title"
      className="border-t border-[var(--color-ds-border)] bg-[var(--color-ds-surface)] py-20 md:py-28"
    >
      <div className="max-w-screen-xl mx-auto px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-xs text-[var(--color-ds-primary)] uppercase tracking-widest mb-3">
            {L.kicker}
          </p>
          <h2
            id="como-llegar-title"
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[var(--color-ds-text)] uppercase mb-4"
          >
            {L.title}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-ds-text)] mb-3">{L.lead}</p>
          <p className="text-sm md:text-base text-[var(--color-ds-muted)] leading-relaxed max-w-xl">
            {L.text}
          </p>

          {/* Ficha de ruta, como la de un mapa */}
          <dl className="grid grid-cols-3 border border-[var(--color-ds-border)] mt-8 max-w-xl">
            {L.route.map((item, i) => (
              <div
                key={item.label}
                className={`p-4 ${i > 0 ? 'border-l border-[var(--color-ds-border)]' : ''}`}
              >
                <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ds-muted)] mb-2">
                  {item.label}
                </dt>
                <dd className="text-sm md:text-base font-bold text-[var(--color-ds-text)]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('contact_whatsapp', { location: 'como-llegar' })}
              className="flex items-center justify-center gap-2 bg-[var(--color-ds-primary)] text-black px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              <WhatsAppIcon size={16} />
              {L.cta}
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-[var(--color-ds-border)] text-[var(--color-ds-text)] px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:border-[var(--color-ds-primary)] hover:text-[var(--color-ds-primary)] transition-colors"
            >
              {L.mapLink}
            </a>
          </div>
        </div>

        <div className="border border-[var(--color-ds-border)]">
          <iframe
            className="ds-map block w-full h-[320px] md:h-[440px]"
            title={L.mapTitle}
            src={EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
