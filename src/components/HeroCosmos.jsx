import React, { useEffect, useRef, useState } from 'react';
import CONSTELLATIONS from '../data/constellations.json';
import { Butterfly, Dust } from '../lib/macondo';

/* ════════════════════════════════════════════
   HERO COSMOS: cielo real sobre Madrid + mariposas de Macondo
   Datos de constelaciones heredados de ERÊS (RA/Dec J2000).
   ════════════════════════════════════════════ */

const MADRID = { lat: 40.4168, lon: -3.7038 };
const DEG = Math.PI / 180;
const GOLD = '212, 175, 55';
const IVORY = '244, 240, 235';
const HFOV = 115 * DEG;          // campo de visión horizontal (escritorio)
const MOBILE_DFOV = 150 * DEG;   // campo de visión diagonal en pantallas estrechas
const isNarrow = w => w < 700;
const LOOK_RANGE = { az: 7, alt: 4 }; // grados que se mueve la mirada con el ratón
const BUTTERFLIES = 14; // ERÊS usa 28 a página completa; el hero es más pequeño

// Tiempo sidéreo local (grados) para una fecha y longitud
function localSiderealDeg(date, lon) {
  const jd = date.getTime() / 86400000 + 2440587.5;
  const gmst = 280.46061837 + 360.98564736629 * (jd - 2451545);
  return (((gmst + lon) % 360) + 360) % 360;
}

// RA/Dec → vector horizontal (x=este, y=norte, z=cenit)
function equatorialToHorizontal(raDeg, decDeg, lstDeg, latDeg) {
  const H = (lstDeg - raDeg) * DEG;
  const dec = decDeg * DEG;
  const lat = latDeg * DEG;
  const sinAlt = Math.sin(dec) * Math.sin(lat) + Math.cos(dec) * Math.cos(lat) * Math.cos(H);
  const alt = Math.asin(sinAlt);
  const az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(lat) - Math.tan(dec) * Math.cos(lat)) + Math.PI;
  return { alt, az, x: Math.cos(alt) * Math.sin(az), y: Math.cos(alt) * Math.cos(az), z: Math.sin(alt) };
}

// Base de cámara mirando a (az, alt)
function cameraBasis(az, alt) {
  const f = [Math.cos(alt) * Math.sin(az), Math.cos(alt) * Math.cos(az), Math.sin(alt)];
  const r = [Math.cos(az), -Math.sin(az), 0];
  const u = [
    r[1] * f[2] - r[2] * f[1],
    r[2] * f[0] - r[0] * f[2],
    r[0] * f[1] - r[1] * f[0],
  ];
  return { f, r, u };
}

// Proyección estereográfica sobre el plano de la cámara
function project(v, cam, w, h) {
  const cz = v.x * cam.f[0] + v.y * cam.f[1] + v.z * cam.f[2];
  if (cz < -0.1) return null;
  const cx = v.x * cam.r[0] + v.y * cam.r[1] + v.z * cam.r[2];
  const cy = v.x * cam.u[0] + v.y * cam.u[1] + v.z * cam.u[2];
  const k = 2 / (1 + cz);
  // El campo de visión se aplica al lado largo: en móvil (vertical) el cielo no se encoge
  // En móvil el campo de visión se mide en diagonal y es más amplio: entra más cielo
  const scale = isNarrow(w)
    ? (Math.hypot(w, h) / 2) / (2 * Math.tan(MOBILE_DFOV / 4))
    : (Math.max(w, h) / 2) / (2 * Math.tan(HFOV / 4));
  return { x: w / 2 + cx * k * scale, y: h / 2 - cy * k * scale };
}

// Elige la dirección del cielo con más estrellas de constelación sobre el horizonte
function bestView(date, w, h) {
  // Elige la zona del cielo con más estrellas de constelación dentro de la pantalla real,
  // priorizando las zonas libres de texto: abajo en móvil, a la derecha en escritorio.
  const lst = localSiderealDeg(date, MADRID.lon);
  const alt0 = 38 * DEG;
  const stars = CONSTELLATIONS.flatMap(c => c.stars.map(s => equatorialToHorizontal(s.ra, s.dec, lst, MADRID.lat)));
  let best = { az: Math.PI, score: -1 };
  for (let a = 0; a < 360; a += 10) {
    const az = a * DEG;
    const cam = cameraBasis(az, alt0);
    let score = 0;
    stars.forEach(v => {
      if (v.alt < 3 * DEG) return;
      const p = project(v, cam, w, h);
      if (!p || p.x < 0 || p.x > w || p.y < 0 || p.y > h) return;
      const free = isNarrow(w) ? p.y > h * 0.62 : p.x > w * 0.5;
      score += free ? 2 : 1;
    });
    if (score > best.score) best = { az, score };
  }
  return { az: best.az, alt: alt0 };
}

// Cada estrella parpadea a su ritmo: fase y velocidad derivadas de su nombre
const STAR_TWINKLE = new Map();
CONSTELLATIONS.forEach(c => c.stars.forEach(s => {
  let hash = 0;
  for (const ch of s.id) hash = (hash * 31 + ch.charCodeAt(0)) | 0;
  hash = Math.abs(hash);
  STAR_TWINKLE.set(s.id, { phase: ((hash % 1000) / 1000) * Math.PI * 2, speed: 0.6 + ((hash >> 10) % 100) / 100 });
}));

// Revelado de constelaciones (ms)
// Cada constelación se recorre en cadena: una línea empieza cuando termina la anterior
const REVEAL = { first: 400, perConstellation: 450, line: 1300, afterglow: 2600, trail: 0.22, flash: 700 };

function madridTime(date) {
  return date.toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' });
}

export default function HeroCosmos() {
  const canvasRef = useRef(null);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0, h = 0, dpr = 1;
    let raf = 0;
    let visible = true;
    const pointer = { x: 0, y: 0, nx: 0, ny: 0, active: false };
    const look = { az: 0, alt: 0 };            // desplazamiento actual de la mirada (suavizado)
    let base = { az: Math.PI, alt: 38 * DEG };
    let butterflies = [];
    let dust = [];
    let hovered = null;
    // Las líneas se trazan una a una al cargar y cada vez que se vuelve al hero
    let revealStart = performance.now();
    let revealRank = null; // nombre de constelación -> orden de izquierda a derecha
    const restartReveal = () => { revealStart = performance.now(); revealRank = null; };
    let hoverGlow = 0;

    // Polvo estelar de fondo (decorativo, no son estrellas reales)
    const haze = Array.from({ length: 220 }, () => ({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 0.8 + 0.2,
      a: Math.random() * 0.35 + 0.05,
      t: Math.random() * Math.PI * 2,
    }));

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      base = bestView(new Date(), w, h);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = w < 700 ? 6 : BUTTERFLIES;
      butterflies = Array.from({ length: count }, () => new Butterfly(w, h));
      if (reduceMotion) draw(performance.now());
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = pointer.y >= 0 && pointer.y <= rect.height;
      pointer.nx = (pointer.x / rect.width) * 2 - 1;
      pointer.ny = (pointer.y / rect.height) * 2 - 1;
    }
    function onLeave() { pointer.active = false; }
    function onClick(e) {
      onMove(e);
      if (!pointer.active) return;
      butterflies.forEach(b => { if (Math.hypot(b.x - pointer.x, b.y - pointer.y) < 380) b.scare(pointer.x, pointer.y, 5.5); });
      const burst = w < 700 ? 8 : 22;
      for (let i = 0; i < burst; i++) dust.push(new Dust(pointer.x, pointer.y, ['#fde047', '#fbbf24', '#ffffff'][i % 3]));
    }

    function draw(now) {
      const date = new Date();
      const lst = localSiderealDeg(date, MADRID.lon);

      // La mirada sigue al ratón con inercia
      const tAz = pointer.active ? pointer.nx * LOOK_RANGE.az : 0;
      const tAlt = pointer.active ? -pointer.ny * LOOK_RANGE.alt : 0;
      look.az += (tAz - look.az) * 0.04;
      look.alt += (tAlt - look.alt) * 0.04;
      const cam = cameraBasis(base.az + look.az * DEG, base.alt + look.alt * DEG);

      ctx.clearRect(0, 0, w, h);

      // Resplandor del horizonte
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0, 'rgba(10,10,10,0)');
      sky.addColorStop(1, `rgba(${GOLD}, 0.06)`);
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      haze.forEach(s => {
        const tw = reduceMotion ? 1 : 0.6 + Math.sin(now * 0.001 + s.t) * 0.4;
        ctx.fillStyle = `rgba(${IVORY}, ${s.a * tw})`;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Proyección de constelaciones reales
      let nearest = null, nearestDist = 150;
      let visibleCount = 0;
      const projected = CONSTELLATIONS.map(c => {
        const pts = {};
        let above = 0;
        c.stars.forEach(s => {
          const v = equatorialToHorizontal(s.ra, s.dec, lst, MADRID.lat);
          if (v.alt < -2 * DEG) return;
          const p = project(v, cam, w, h);
          if (!p || p.x < -60 || p.x > w + 60 || p.y < -60 || p.y > h + 60) return;
          pts[s.id] = { ...p, mag: s.mag, alt: v.alt };
          above++;
          if (pointer.active) {
            const d = Math.hypot(p.x - pointer.x, p.y - pointer.y);
            if (d < nearestDist) { nearestDist = d; nearest = c.name; }
          }
        });
        if (above >= 2) visibleCount++;
        return { c, pts };
      });

      if (nearest !== hovered) { hovered = nearest; hoverGlow = 0; }
      hoverGlow = Math.min(1, hoverGlow + 0.04);

      // Orden de revelado: barrido de izquierda a derecha
      if (!revealRank) {
        const order = projected
          .map(({ c, pts }) => {
            const list = Object.values(pts);
            return { name: c.name, x: list.length ? list.reduce((acc, q) => acc + q.x, 0) / list.length : Infinity };
          })
          .sort((p1, p2) => p1.x - p2.x);
        revealRank = new Map(order.map((o, i) => [o.name, i]));
      }
      const elapsed = reduceMotion ? Infinity : now - revealStart;

      projected.forEach(({ c, pts }) => {
        const isHover = c.name === hovered;
        const narrow = isNarrow(w);
        const baseAlpha = narrow ? 0.3 : 0.16;
        const cDelay = REVEAL.first + (revealRank.get(c.name) ?? 0) * REVEAL.perConstellation;

        // Líneas: un impulso eléctrico recorre la constelación de estrella en estrella
        const flashes = {};
        c.lines.forEach(([a, b], j) => {
          const p1 = pts[a], p2 = pts[b];
          if (!p1 || !p2) return;
          const lineStart = cDelay + j * REVEAL.line;
          const raw = (elapsed - lineStart) / REVEAL.line;
          const at = k => ({ x: p1.x + (p2.x - p1.x) * k, y: p1.y + (p2.y - p1.y) * k });
          ctx.lineWidth = isHover ? 1.2 : narrow ? 0.9 : 0.6;
          ctx.shadowColor = `rgba(${GOLD}, 0.8)`;

          if (isHover) {
            const e = at(hoverGlow);
            ctx.strokeStyle = `rgba(${GOLD}, ${0.25 + hoverGlow * 0.6})`;
            ctx.shadowBlur = 8;
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(e.x, e.y); ctx.stroke();
            return;
          }
          if (raw <= 0) return;

          // Avance suave (acelera y frena) hasta la siguiente estrella
          const k = Math.min(1, raw);
          const t = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
          const tip = at(t);
          const glow = raw < 1 ? 1 : Math.max(0, 1 - (elapsed - lineStart - REVEAL.line) / REVEAL.afterglow);

          // Trazo ya recorrido
          ctx.strokeStyle = `rgba(${GOLD}, ${baseAlpha + glow * 0.45})`;
          ctx.shadowBlur = glow * 6;
          ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(tip.x, tip.y); ctx.stroke();

          if (raw < 1) {
            // Estela luminosa de la chispa
            const tail = at(Math.max(0, t - REVEAL.trail));
            const grad = ctx.createLinearGradient(tail.x, tail.y, tip.x, tip.y);
            grad.addColorStop(0, `rgba(${GOLD}, 0)`);
            grad.addColorStop(1, `rgba(${IVORY}, 0.95)`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = narrow ? 1.8 : 1.5;
            ctx.shadowBlur = 12;
            ctx.beginPath(); ctx.moveTo(tail.x, tail.y); ctx.lineTo(tip.x, tip.y); ctx.stroke();
            // Chispa con chisporroteo
            const flicker = 0.65 + Math.random() * 0.35;
            ctx.fillStyle = `rgba(${IVORY}, ${flicker})`;
            ctx.shadowColor = `rgba(${GOLD}, 1)`;
            ctx.shadowBlur = 14 * flicker;
            ctx.beginPath(); ctx.arc(tip.x, tip.y, 1.6 + flicker * 0.8, 0, Math.PI * 2); ctx.fill();
          } else {
            // Destello de la estrella al llegar el impulso
            const since = elapsed - lineStart - REVEAL.line;
            if (since < REVEAL.flash) flashes[b] = Math.max(flashes[b] || 0, 1 - since / REVEAL.flash);
          }
          if (j === 0 && raw > 0 && raw < 0.35) flashes[a] = Math.max(flashes[a] || 0, 1 - raw / 0.35);
        });
        ctx.shadowBlur = 0;

        // Estrellas: pequeñas, sutiles y con parpadeo propio
        const starFade = Math.min(1, Math.max(0, (elapsed - cDelay + 300) / 1200));
        Object.entries(pts).forEach(([id, p]) => {
          const flash = flashes[id] || 0;
          const r = Math.max(0.5, 2.1 - p.mag * 0.42) * (isHover ? 1.3 : 1) * (1 + flash * 0.9);
          const fade = Math.min(1, (p.alt / DEG + 2) / 8);
          const tw = STAR_TWINKLE.get(id) || { phase: 0, speed: 1 };
          const pulse = reduceMotion ? 0.7 : 0.5 + 0.5 * Math.sin(now * 0.0012 * tw.speed + tw.phase);
          ctx.fillStyle = `rgba(${isHover ? GOLD : IVORY}, ${Math.min(1, fade * starFade * (0.35 + 0.55 * pulse) + flash)})`;
          ctx.shadowColor = `rgba(${GOLD}, 0.7)`;
          ctx.shadowBlur = r * (1.5 + pulse * 2) + flash * 14;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.shadowBlur = 0;

        // Nombre de la constelación bajo el cursor
        if (isHover) {
          const list = Object.values(pts);
          const cx = list.reduce((s, p) => s + p.x, 0) / list.length;
          const top = Math.min(...list.map(p => p.y));
          ctx.font = '600 11px "JetBrains Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillStyle = `rgba(${GOLD}, ${hoverGlow})`;
          ctx.fillText(c.name, cx, top - 18);
        }
      });

      // Mariposas y polvo de oro
      if (!reduceMotion) {
        butterflies.forEach(b => b.update(w, h, pointer, dust));
        if (dust.length > 400) dust.splice(0, dust.length - 400);
        dust.forEach(d => { d.update(); d.draw(ctx); });
        dust = dust.filter(d => d.life > 0);
      }
      butterflies.forEach(b => b.draw(ctx));

      setCaption(prev => {
        const next = `${madridTime(date)}|${visibleCount}`;
        return prev === next ? prev : next;
      });
    }

    function loop(now) {
      if (visible && !document.hidden) draw(now);
      raf = requestAnimationFrame(loop);
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onClick, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    // Recalcula la mejor zona del cielo cada 10 minutos (el cielo gira)
    const reframe = setInterval(() => { base = bestView(new Date(), w, h); }, 600000);

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !visible) restartReveal();
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    if (reduceMotion) draw(performance.now());
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(reframe);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onClick);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="block" />
      {caption && (
        <div className="absolute bottom-4 left-4 md:left-auto md:right-28 font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-[var(--color-ds-muted)] pointer-events-none">
          Cielo real sobre Madrid · {caption.split('|')[0]}
          <span className="hidden sm:inline"> · {caption.split('|')[1]} constelaciones a la vista</span>
        </div>
      )}
    </div>
  );
}
