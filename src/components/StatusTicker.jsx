import React, { useEffect, useState } from 'react';

/* ════════════════════════════════════════════
   BARRA DE ESTADO: qué estoy haciendo ahora.
   Para actualizarla basta con editar STATUS_ITEMS.
   ════════════════════════════════════════════ */

const STATUS_ITEMS = [
  { label: 'Estado', text: 'Disponible para proyectos y equipos', dot: true },
  { label: 'En curso', text: 'Puliendo Quimera Autómata y la carta celeste de ERÊS' },
  { label: 'Estudiando', text: 'Kubernetes y fundamentos Cloud (AWS · GCP)' },
  { label: 'Último proyecto', text: 'Aurum-CRM · .NET 10 + React 19' },
  { label: 'Madrid', text: null }, // hora local en vivo
];

function madridTime() {
  return new Date().toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' });
}

function Group({ time, hidden }) {
  // Cada grupo mide al menos el ancho de la pantalla: al desplazar -50% nunca queda hueco
  return (
    <ul className="flex shrink-0 min-w-[100vw] justify-around items-center" aria-hidden={hidden || undefined}>
      {STATUS_ITEMS.map(item => (
        <li key={item.label} className="flex items-center gap-2 px-6 md:px-10 whitespace-nowrap">
          {item.dot && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
          <span className="text-[var(--color-ds-muted)]">{item.label}:</span>
          <span className="text-[var(--color-ds-primary)]">{item.text ?? time}</span>
        </li>
      ))}
    </ul>
  );
}

export default function StatusTicker() {
  const [time, setTime] = useState(madridTime);

  useEffect(() => {
    const id = setInterval(() => setTime(madridTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="status-ticker overflow-hidden py-2 font-mono text-[10px] tracking-widest uppercase">
      <div className="status-ticker__track flex w-max">
        <Group time={time} />
        <Group time={time} hidden />
      </div>
    </div>
  );
}
