import React, { useEffect, useRef } from 'react';

/* ════════════════════════════════════════════
   EL PROTOCOLO: red neuronal viva con el ciclo de trabajo.
   Un impulso recorre las 5 fases en bucle; el ratón ilumina la red
   y el clic dispara una cascada de impulsos.
   ════════════════════════════════════════════ */

const GOLD = '212, 175, 55';
const IVORY = '244, 240, 235';
const MUTED = '140, 130, 115';

const PHASES = [
  { title: '01 · ESCUCHAR', sub: 'el problema real, no el encargo' },
  { title: '02 · DISEÑAR', sub: 'UI/UX · prototipo interactivo' },
  { title: '03 · CONSTRUIR', sub: 'React · TypeScript · .NET' },
  { title: '04 · VERIFICAR', sub: 'tests · rendimiento · a11y' },
  { title: '05 · PUBLICAR', sub: 'CI/CD · Netlify · Cloudflare' },
];

// Generador pseudoaleatorio con semilla: la red es la misma en cada visita
function seeded(seed) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

function buildNetwork(w, h) {
  const rand = seeded(42);
  const cx = w / 2, cy = h / 2;
  const R = Math.min(w, h) * (w < 480 ? 0.3 : 0.31);
  const nodes = [];

  // Centro
  nodes.push({ kind: 'hub', hx: cx, hy: cy, r: 6 });
  // Fases en anillo (empieza arriba, sentido horario)
  PHASES.forEach((p, i) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / PHASES.length;
    nodes.push({ kind: 'phase', phase: i, angle: a, hx: cx + Math.cos(a) * R, hy: cy + Math.sin(a) * R, r: 5 });
  });
  // Neuronas pequeñas repartidas (evitando el centro)
  const count = w < 500 ? 42 : 72;
  let tries = 0;
  while (nodes.length < count + 6 && tries++ < 4000) {
    const x = rand() * w, y = rand() * h;
    const dc = Math.hypot(x - cx, y - cy);
    if (dc < Math.min(w, h) * 0.17) continue;
    if (nodes.some(n => Math.hypot(n.hx - x, n.hy - y) < Math.min(w, h) * 0.06)) continue;
    nodes.push({ kind: 'n', hx: x, hy: y, r: 1.2 + rand() * 1.6 });
  }
  nodes.forEach(n => {
    n.x = n.hx; n.y = n.hy;
    n.phaseOff = rand() * Math.PI * 2;
    n.glow = 0;
    n.edges = [];
  });

  // Conexiones: cada neurona con sus vecinas más cercanas
  const edges = [];
  const key = new Set();
  const link = (a, b, ring = false) => {
    const k = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (key.has(k) || a === b) return;
    key.add(k);
    const e = { a, b, ring, bend: (rand() - 0.5) * 0.25 };
    edges.push(e);
    nodes[a].edges.push(e);
    nodes[b].edges.push(e);
  };
  nodes.forEach((n, i) => {
    if (n.kind === 'hub') return;
    const near = nodes
      .map((m, j) => ({ j, d: Math.hypot(m.hx - n.hx, m.hy - n.hy) }))
      .filter(o => o.j !== i && nodes[o.j].kind !== 'hub')
      .sort((p, q) => p.d - q.d)
      .slice(0, n.kind === 'phase' ? 4 : 2 + Math.floor(rand() * 2));
    near.forEach(o => link(i, o.j));
  });
  // Anillo del proceso y radios al centro
  for (let i = 0; i < PHASES.length; i++) {
    link(1 + i, 1 + ((i + 1) % PHASES.length), true);
    link(0, 1 + i);
  }
  return { nodes, edges, R, cx, cy };
}

// Punto sobre un hilo ligeramente curvo
function edgePoint(net, e, t, from) {
  const A = net.nodes[from], B = net.nodes[from === e.a ? e.b : e.a];
  const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
  const dx = B.x - A.x, dy = B.y - A.y;
  const bend = e.ring ? 0 : e.bend * (from === e.a ? 1 : -1);
  const qx = mx - dy * bend, qy = my + dx * bend;
  const u = 1 - t;
  return { x: u * u * A.x + 2 * u * t * qx + t * t * B.x, y: u * u * A.y + 2 * u * t * qy + t * t * B.y };
}

export default function NeuralProtocol() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, raf = 0, visible = true;
    let net = null;
    let pulses = [];
    let activePhase = 0;
    let cycleT = 0;
    const pointer = { x: 0, y: 0, active: false };

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      net = buildNetwork(w, h);
      pulses = [];
      if (reduceMotion) draw(0);
    }

    function fire(fromIndex, hops, strength = 1) {
      net.nodes[fromIndex].glow = 1;
      net.nodes[fromIndex].edges.forEach(e => {
        if (e.ring) return;
        pulses.push({ e, from: fromIndex, t: 0, speed: 0.012 + Math.random() * 0.01, hops, strength });
      });
    }

    function nearestNode(x, y) {
      let best = -1, bd = Infinity;
      net.nodes.forEach((n, i) => { const d = Math.hypot(n.x - x, n.y - y); if (d < bd) { bd = d; best = i; } });
      return best;
    }

    function localPointer(e) {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
      pointer.active = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= r.width && pointer.y <= r.height;
    }
    const onMove = e => localPointer(e);
    const onLeave = () => { pointer.active = false; };
    const onDown = e => {
      localPointer(e);
      if (pointer.active && !reduceMotion) fire(nearestNode(pointer.x, pointer.y), 3, 1);
    };

    function draw(now) {
      const time = now * 0.001;
      ctx.clearRect(0, 0, w, h);

      // Fondo: halo central
      const g = ctx.createRadialGradient(net.cx, net.cy, 0, net.cx, net.cy, Math.min(w, h) * 0.6);
      g.addColorStop(0, `rgba(${GOLD}, 0.10)`);
      g.addColorStop(1, `rgba(${GOLD}, 0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Movimiento orgánico + respuesta al ratón
      net.nodes.forEach(n => {
        const drift = n.kind === 'n' && !reduceMotion ? 4 : 0;
        let tx = n.hx + Math.sin(time * 0.6 + n.phaseOff) * drift;
        let ty = n.hy + Math.cos(time * 0.5 + n.phaseOff) * drift;
        if (pointer.active && n.kind === 'n') {
          const dx = n.hx - pointer.x, dy = n.hy - pointer.y;
          const d = Math.hypot(dx, dy) || 1;
          if (d < 140) { tx += (dx / d) * (1 - d / 140) * 18; ty += (dy / d) * (1 - d / 140) * 18; }
        }
        n.x += (tx - n.x) * 0.08;
        n.y += (ty - n.y) * 0.08;
        n.glow *= 0.94;
      });

      // Hilos
      net.edges.forEach(e => {
        const A = net.nodes[e.a], B = net.nodes[e.b];
        let alpha = e.ring ? 0.45 : A.kind === 'hub' || B.kind === 'hub' ? 0.18 : 0.12;
        if (pointer.active) {
          const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
          const d = Math.hypot(mx - pointer.x, my - pointer.y);
          if (d < 170) alpha += (1 - d / 170) * 0.45;
        }
        alpha += Math.max(A.glow, B.glow) * 0.4;
        ctx.strokeStyle = `rgba(${GOLD}, ${Math.min(0.9, alpha)})`;
        ctx.lineWidth = e.ring ? 1.4 : 0.8;
        ctx.setLineDash(e.ring ? [3, 7] : []);
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        const mid = edgePoint(net, e, 0.5, e.a);
        const qx = 2 * mid.x - (A.x + B.x) / 2, qy = 2 * mid.y - (A.y + B.y) / 2;
        ctx.quadraticCurveTo(qx, qy, B.x, B.y);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // Impulso del ciclo 01 → 05
      if (!reduceMotion) {
        cycleT += 0.006;
        if (cycleT >= 1) {
          cycleT = 0;
          activePhase = (activePhase + 1) % PHASES.length;
          const node = 1 + activePhase;
          net.nodes[node].glow = 1;
          fire(node, 1, 0.6);
        }
        const from = 1 + activePhase, to = 1 + ((activePhase + 1) % PHASES.length);
        const ringEdge = net.nodes[from].edges.find(e => e.ring && (e.a === to || e.b === to));
        if (ringEdge) {
          const p = edgePoint(net, ringEdge, cycleT, from);
          ctx.fillStyle = `rgba(${IVORY}, 1)`;
          ctx.shadowColor = `rgba(${GOLD}, 1)`;
          ctx.shadowBlur = 16;
          ctx.beginPath(); ctx.arc(p.x, p.y, 3.2, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Impulsos por la red
        if (Math.random() < 0.03) fire(6 + Math.floor(Math.random() * (net.nodes.length - 6)), 1, 0.5);
        pulses.forEach(p => {
          p.t += p.speed;
          const pos = edgePoint(net, p.e, Math.min(1, p.t), p.from);
          ctx.fillStyle = `rgba(${GOLD}, ${0.9 * p.strength})`;
          ctx.shadowColor = `rgba(${GOLD}, 1)`;
          ctx.shadowBlur = 10;
          ctx.beginPath(); ctx.arc(pos.x, pos.y, 1.8, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
          if (p.t >= 1) {
            const to = p.from === p.e.a ? p.e.b : p.e.a;
            net.nodes[to].glow = Math.max(net.nodes[to].glow, 0.8 * p.strength);
            if (p.hops > 1) fire(to, p.hops - 1, p.strength * 0.8);
          }
        });
        pulses = pulses.filter(p => p.t < 1);
        if (pulses.length > 260) pulses.splice(0, pulses.length - 260);
      }

      // Neuronas
      net.nodes.forEach(n => {
        let near = 0;
        if (pointer.active) near = Math.max(0, 1 - Math.hypot(n.x - pointer.x, n.y - pointer.y) / 140);
        const lit = Math.min(1, n.glow + near);
        if (n.kind === 'n') {
          ctx.fillStyle = `rgba(${lit > 0.05 ? GOLD : IVORY}, ${0.35 + lit * 0.65})`;
          ctx.shadowColor = `rgba(${GOLD}, 0.9)`;
          ctx.shadowBlur = lit * 12;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + lit * 1.5, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Centro: DISEÑO + CÓDIGO
      const hubR = Math.min(w, h) * 0.13;
      ctx.fillStyle = '#0F0E0D';
      ctx.strokeStyle = `rgba(${GOLD}, 0.9)`;
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(net.cx, net.cy, hubR, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      const hubFont = Math.max(14, hubR * 0.26);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = `rgba(${IVORY}, 1)`;
      ctx.font = `700 ${hubFont}px "Space Grotesk", sans-serif`;
      ctx.fillText('DISEÑO', net.cx, net.cy - hubFont * 0.85);
      ctx.fillText('CÓDIGO', net.cx, net.cy + hubFont * 0.85);
      ctx.fillStyle = `rgba(${GOLD}, 1)`;
      ctx.font = `400 ${hubFont * 0.8}px "JetBrains Mono", monospace`;
      ctx.fillText('+', net.cx, net.cy);

      // Fases y etiquetas
      const small = w < 480;
      const titleSize = small ? 12 : Math.max(13, Math.min(w, h) * 0.034);
      const subSize = Math.max(10, titleSize * 0.62);
      net.nodes.forEach(n => {
        if (n.kind !== 'phase') return;
        const isActive = n.phase === activePhase && !reduceMotion;
        const hover = pointer.active && Math.hypot(n.x - pointer.x, n.y - pointer.y) < 60;
        const lit = Math.min(1, n.glow + (isActive ? 0.6 : 0) + (hover ? 1 : 0));
        ctx.fillStyle = lit > 0.3 ? `rgba(${GOLD}, 1)` : '#0A0A0A';
        ctx.strokeStyle = `rgba(${GOLD}, 1)`;
        ctx.lineWidth = 2;
        ctx.shadowColor = `rgba(${GOLD}, 1)`;
        ctx.shadowBlur = lit * 18;
        ctx.beginPath(); ctx.arc(n.x, n.y, 7 + lit * 2, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.shadowBlur = 0;

        // Posición de la etiqueta según el ángulo; en pantallas estrechas, encima o debajo
        const c = Math.cos(n.angle), s = Math.sin(n.angle);
        const off = 18;
        const side = !small && Math.abs(c) >= 0.3;
        const showSub = !small || hover || isActive;
        ctx.font = `700 ${titleSize}px "Space Grotesk", sans-serif`;
        const titleW = ctx.measureText(PHASES[n.phase].title).width;
        ctx.font = `400 ${subSize}px "JetBrains Mono", monospace`;
        const subW = showSub ? ctx.measureText(PHASES[n.phase].sub).width : 0;
        const labelW = Math.max(titleW, subW);
        const pad = 10;

        let lx, ly, align;
        if (side) {
          align = c > 0 ? 'left' : 'right';
          lx = n.x + c * off;
          ly = n.y - titleSize * 0.4;
          if (align === 'left') lx = Math.min(lx, w - pad - labelW);
          else lx = Math.max(lx, pad + labelW);
        } else {
          align = 'center';
          lx = Math.min(Math.max(n.x, pad + labelW / 2), w - pad - labelW / 2);
          ly = s < 0 ? n.y - off - titleSize * (showSub ? 1.5 : 0.6) : n.y + off + titleSize * 0.4;
        }
        ctx.textAlign = align;
        ctx.textBaseline = 'middle';
        ctx.font = `700 ${titleSize}px "Space Grotesk", sans-serif`;
        ctx.fillStyle = `rgba(${lit > 0.3 ? GOLD : IVORY}, 1)`;
        ctx.fillText(PHASES[n.phase].title, lx, ly);
        if (showSub) {
          ctx.font = `400 ${subSize}px "JetBrains Mono", monospace`;
          ctx.fillStyle = `rgba(${MUTED}, 1)`;
          ctx.fillText(PHASES[n.phase].sub, lx, ly + titleSize * 1.15);
        }
      });

      // Pie
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.font = `400 ${small ? 9 : 11}px "JetBrains Mono", monospace`;
      ctx.fillStyle = `rgba(${GOLD}, 0.8)`;
      ctx.fillText('↻ ITERAR HASTA QUE SE SIENTA BIEN', 14, h - 14);
    }

    function loop(now) {
      if (visible && !document.hidden) draw(now);
      raf = requestAnimationFrame(loop);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(canvas);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    // Redibujar cuando carguen las fuentes (las etiquetas van en canvas)
    document.fonts?.ready.then(() => { if (reduceMotion) draw(0); });

    if (reduceMotion) draw(0);
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0" role="img" aria-label="Ciclo de trabajo: escuchar, diseñar, construir, verificar y publicar, alrededor de diseño y código">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
