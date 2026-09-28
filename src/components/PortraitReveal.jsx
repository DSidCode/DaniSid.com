import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/* ════════════════════════════════════════════
   RETRATO-RED: "detrás de la persona hay código".
   Apertura: cientos de puntos de luz forman el rostro, se unen como una red,
   se abre la foto y la red se desvanece.
   Después: de vez en cuando se enciende una pequeña constelación sobre la foto
   (y también donde pasa el cursor o se toca en móvil).
   ════════════════════════════════════════════ */

const GOLD = '212, 175, 55';
const IVORY = '244, 240, 235';
const EASE = [0.65, 0, 0.35, 1];
const TIMING = { fly: 1100, lines: [600, 1400], photo: [1300, 2300], fade: [1900, 2900] };
const CLUSTER = { size: 10, draw: 700, hold: 900, fade: 1000, every: [2500, 5500] };

const clamp01 = v => Math.min(1, Math.max(0, v));
const easeInOut = k => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

// Convierte la foto en una red de puntos: más densidad donde hay rasgos
function buildNetwork(img, w, h) {
  const off = document.createElement('canvas');
  off.width = w; off.height = h;
  const c = off.getContext('2d', { willReadFrequently: true });
  c.drawImage(img, 0, 0, w, h);
  const data = c.getImageData(0, 0, w, h).data;
  const lum = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) lum[i] = (0.2126 * data[i * 4] + 0.7152 * data[i * 4 + 1] + 0.0722 * data[i * 4 + 2]) / 255;
  const L = (x, y) => lum[Math.min(h - 1, Math.max(0, y)) * w + Math.min(w - 1, Math.max(0, x))];

  const step = Math.max(5, Math.round(w / 50));   // menos estrellas
  let seed = 11;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

  const pts = [];
  for (let y = step / 2; y < h; y += step) {
    for (let x = step / 2; x < w; x += step) {
      const xi = x | 0, yi = y | 0;
      const gx = L(xi + step, yi) - L(xi - step, yi);
      const gy = L(xi, yi + step) - L(xi, yi - step);
      const edge = Math.min(1, Math.hypot(gx, gy) * 2.4);
      const l = L(xi, yi);
      const weight = 0.72 * edge + 0.28 * l * l;
      if (rnd() < weight * 0.85) {
        pts.push({
          tx: x + (rnd() - 0.5) * step * 0.8,
          ty: y + (rnd() - 0.5) * step * 0.8,
          b: clamp01(0.3 + edge * 0.9 + l * 0.25),
          sx: rnd() * w, sy: rnd() * h,           // posición de partida (dispersa)
          delay: (y / h) * 300 + rnd() * 250,    // de arriba abajo, con variación
          ph: rnd() * Math.PI * 2,
          x: 0, y: 0,
        });
      }
    }
  }

  // Cada punto se une a sus 3-4 vecinos más cercanos (más líneas)
  const cell = step * 2.9;
  const grid = new Map();
  pts.forEach((p, i) => {
    const k = `${(p.tx / cell) | 0},${(p.ty / cell) | 0}`;
    if (!grid.has(k)) grid.set(k, []);
    grid.get(k).push(i);
  });
  const edges = [];
  const seen = new Set();
  pts.forEach((p, i) => {
    const gx = (p.tx / cell) | 0, gy = (p.ty / cell) | 0;
    const cand = [];
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
      (grid.get(`${gx + dx},${gy + dy}`) || []).forEach(j => {
        if (j === i) return;
        const d = Math.hypot(pts[j].tx - p.tx, pts[j].ty - p.ty);
        if (d < cell) cand.push([d, j]);
      });
    }
    cand.sort((a, b) => a[0] - b[0]).slice(0, 4).forEach(([, j]) => {
      const k = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!seen.has(k)) { seen.add(k); edges.push([i, j]); }
    });
  });
  const adj = pts.map(() => []);
  edges.forEach(([i, j], ei) => { adj[i].push([j, ei]); adj[j].push([i, ei]); });
  const features = pts.map((p, i) => (p.b > 0.65 ? i : -1)).filter(i => i >= 0);
  return { pts, edges, adj, features };
}

// Constelación pequeña alrededor de un punto: recorrido en anchura por la red
function clusterFrom(net, seed) {
  const nodes = [seed], seen = new Set([seed]), es = [], queue = [seed];
  while (queue.length && nodes.length < CLUSTER.size) {
    const n = queue.shift();
    for (const [m, ei] of net.adj[n]) {
      if (nodes.length >= CLUSTER.size) break;
      if (seen.has(m)) continue;
      seen.add(m); nodes.push(m); es.push(ei); queue.push(m);
    }
  }
  return { nodes, es };
}

export default function PortraitReveal() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef(null);
  const boxRef = useRef(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  // Se revela una sola vez por visita
  const inView = useInView(wrapRef, { amount: 0.35, once: true });
  const shown = inView || reduceMotion;
  const [hovered, setHovered] = useState(false);
  const pointerRef = useRef({ x: 0, y: 0, want: false, last: 0 });

  const requestCluster = e => {
    const r = boxRef.current.getBoundingClientRect();
    const pr = pointerRef.current;
    pr.x = e.clientX - r.left; pr.y = e.clientY - r.top; pr.want = true;
  };
  const onEnter = e => { if (e.pointerType === 'mouse') setHovered(true); };
  const onMove = e => { if (e.pointerType === 'mouse') requestCluster(e); };
  const onLeave = e => { if (e.pointerType === 'mouse') setHovered(false); };
  const onTap = e => { if (e.pointerType !== 'mouse') requestCluster(e); };

  useEffect(() => {
    if (!shown) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    let raf = 0, net = null, w = 0, h = 0;
    const start = performance.now();

    const setup = () => {
      const r = boxRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.round(r.width); h = Math.round(r.height);
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      net = buildNetwork(img, w, h);
    };

    let clusters = [];
    let nextCluster = 0;

    const spawn = (seed, now) => {
      if (seed < 0) return;
      clusters.push({ ...clusterFrom(net, seed), t0: now });
    };

    const draw = now => {
      const t = reduceMotion ? 1e9 : now - start;
      ctx.clearRect(0, 0, w, h);

      // Foto real: se abre cuando la red ha formado el rostro
      const photoIn = clamp01((t - TIMING.photo[0]) / (TIMING.photo[1] - TIMING.photo[0]));
      if (imgRef.current) imgRef.current.style.opacity = String(photoIn);

      // 1) Apertura: la red forma el rostro y luego se desvanece
      const netFade = 1 - clamp01((t - TIMING.fade[0]) / (TIMING.fade[1] - TIMING.fade[0]));
      if (netFade > 0) {
        net.pts.forEach(p => {
          const k = easeInOut(clamp01((t - p.delay) / TIMING.fly));
          p.x = p.sx + (p.tx - p.sx) * k;
          p.y = p.sy + (p.ty - p.sy) * k;
        });
        const linesIn = clamp01((t - TIMING.lines[0]) / (TIMING.lines[1] - TIMING.lines[0]));
        if (linesIn > 0) {
          ctx.lineWidth = 0.6;
          net.edges.forEach(([i, j]) => {
            const p = net.pts[i], q = net.pts[j];
            const a = linesIn * netFade * 0.38 * Math.min(p.b, q.b);
            if (a < 0.01) return;
            ctx.strokeStyle = `rgba(${GOLD}, ${a})`;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          });
        }
        net.pts.forEach(p => {
          const tw = 0.6 + 0.4 * Math.sin(now * 0.002 + p.ph);
          const a = p.b * tw * netFade;
          if (a < 0.02) return;
          ctx.fillStyle = `rgba(${IVORY}, ${a})`;
          ctx.beginPath(); ctx.arc(p.x, p.y, 0.45 + p.b * 1.05, 0, Math.PI * 2); ctx.fill();
        });
        return;
      }
      if (reduceMotion) return;

      // 2) Después: pequeñas constelaciones de vez en cuando
      net.pts.forEach(p => { p.x = p.tx; p.y = p.ty; });
      if (now > nextCluster) {
        spawn(net.features[(Math.random() * net.features.length) | 0] ?? -1, now);
        nextCluster = now + CLUSTER.every[0] + Math.random() * (CLUSTER.every[1] - CLUSTER.every[0]);
      }
      // …y donde pasa el cursor o se toca (con pausa entre una y otra)
      const pr = pointerRef.current;
      if (pr.want && now - pr.last > 900) {
        let best = -1, bd = 60;
        net.pts.forEach((p, i) => { const d = Math.hypot(p.x - pr.x, p.y - pr.y); if (d < bd) { bd = d; best = i; } });
        spawn(best, now);
        pr.last = now;
      }
      pr.want = false;

      const life = CLUSTER.draw + CLUSTER.hold + CLUSTER.fade;
      clusters = clusters.filter(c => now - c.t0 < life);
      clusters.forEach(c => {
        const age = now - c.t0;
        const fade = 1 - clamp01((age - CLUSTER.draw - CLUSTER.hold) / CLUSTER.fade);
        // Hilos trazados uno tras otro, como un impulso
        c.es.forEach((ei, idx) => {
          const k = clamp01((age - idx * (CLUSTER.draw / c.es.length)) / (CLUSTER.draw / c.es.length * 1.6));
          if (k <= 0) return;
          const [i, j] = net.edges[ei];
          const from = c.nodes.indexOf(i) < c.nodes.indexOf(j) ? i : j;
          const to = from === i ? j : i;
          const p = net.pts[from], q = net.pts[to];
          const x = p.x + (q.x - p.x) * k, y = p.y + (q.y - p.y) * k;
          ctx.strokeStyle = `rgba(${GOLD}, ${0.55 * fade})`;
          ctx.lineWidth = 0.8;
          ctx.shadowColor = `rgba(${GOLD}, 0.9)`; ctx.shadowBlur = 6 * fade;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(x, y); ctx.stroke();
          ctx.shadowBlur = 0;
        });
        c.nodes.forEach((ni, idx) => {
          const appear = clamp01((age - idx * (CLUSTER.draw / c.nodes.length)) / 200);
          const p = net.pts[ni];
          const a = appear * fade;
          if (a < 0.02) return;
          ctx.fillStyle = `rgba(${IVORY}, ${a})`;
          ctx.shadowColor = `rgba(${GOLD}, 1)`; ctx.shadowBlur = 8 * a;
          ctx.beginPath(); ctx.arc(p.x, p.y, 1 + p.b * 0.9, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
        });
      });
    };

    // Solo se anima mientras el retrato está en pantalla
    let onScreen = true;
    const io = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; });
    io.observe(boxRef.current);
    const loop = now => { if (onScreen && !document.hidden) draw(now); raf = requestAnimationFrame(loop); };

    img.onload = () => {
      setup();
      if (reduceMotion) draw(performance.now());
      else raf = requestAnimationFrame(loop);
    };
    img.src = '/daniel-garcia.jpg';

    const ro = new ResizeObserver(() => { if (img.complete && img.naturalWidth) setup(); });
    ro.observe(boxRef.current);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, [shown, reduceMotion]);

  return (
    <div ref={wrapRef} className="relative max-w-sm mx-auto md:mx-0 w-full">
      <div className="relative">
        {/* Marco dorado que se dibuja con un impulso */}
        <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] overflow-visible pointer-events-none" aria-hidden="true">
          <motion.rect
            x="0.5" y="0.5" width="100%" height="100%" fill="none"
            stroke={hovered ? 'rgba(212,175,55,0.85)' : 'rgba(212,175,55,0.45)'} strokeWidth="1" pathLength="1"
            style={{ transition: 'stroke 0.7s ease' }}
            initial={{ pathLength: reduceMotion ? 1 : 0 }}
            animate={{ pathLength: shown ? 1 : 0 }}
            transition={shown ? { duration: 2.4, ease: EASE } : { duration: 0 }}
          />
          {!reduceMotion && (
            <motion.rect
              x="0.5" y="0.5" width="100%" height="100%" fill="none"
              stroke="#FFF3C4" strokeWidth="2" pathLength="1"
              strokeDasharray="0.035 1"
              style={{ filter: 'drop-shadow(0 0 4px rgba(212,175,55,1))' }}
              initial={{ strokeDashoffset: 0.035, opacity: 0 }}
              animate={inView ? { strokeDashoffset: -1, opacity: [0, 1, 1, 0] } : { strokeDashoffset: 0.035, opacity: 0 }}
              transition={inView ? { duration: 2.4, ease: EASE, opacity: { duration: 2.4, times: [0, 0.04, 0.9, 1] } } : { duration: 0 }}
            />
          )}
        </svg>

        {/* Foto real (debajo) + red de luz (encima) */}
        <div
          ref={boxRef}
          className="relative overflow-hidden bg-[var(--color-ds-bg)] select-none"
          onPointerEnter={onEnter}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          onPointerUp={onTap}
        >
          <picture>
            <source srcSet="/daniel-garcia.webp" type="image/webp" />
            <img
              ref={imgRef}
              src="/daniel-garcia.jpg"
              alt="Retrato de Daniel García"
              width="600"
              height="800"
              loading="lazy"
              draggable="false"
              style={{ opacity: reduceMotion ? 1 : 0 }}
              className="block w-full aspect-[3/4] object-cover grayscale contrast-[1.15] brightness-[0.95]"
            />
          </picture>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_55%,rgba(10,10,10,0.55)_100%)]" />
          <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 mix-blend-screen" />
        </div>
      </div>

      <p className="mt-8 font-mono text-[10px] tracking-widest uppercase text-[var(--color-ds-muted)]">
        Daniel García · Madrid
      </p>
    </div>
  );
}
