import React, { useEffect, useRef, useState } from 'react';
import CONSTELLATIONS from '../data/constellations.json';

/* ════════════════════════════════════════════
   HERO COSMOS: cielo real sobre Madrid + mariposas de Macondo
   Datos de constelaciones heredados de ERÊS (RA/Dec J2000).
   ════════════════════════════════════════════ */

const MADRID = { lat: 40.4168, lon: -3.7038 };
const DEG = Math.PI / 180;
const GOLD = '212, 175, 55';
const IVORY = '244, 240, 235';
const HFOV = 115 * DEG;          // campo de visión horizontal
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
  const scale = (Math.max(w, h) / 2) / (2 * Math.tan(HFOV / 4));
  return { x: w / 2 + cx * k * scale, y: h / 2 - cy * k * scale };
}

// Elige la dirección del cielo con más estrellas de constelación sobre el horizonte
function bestView(date) {
  const lst = localSiderealDeg(date, MADRID.lon);
  const alt0 = 38 * DEG;
  let best = { az: Math.PI, score: -1 };
  for (let a = 0; a < 360; a += 15) {
    const az = a * DEG;
    const cam = cameraBasis(az, alt0);
    let score = 0;
    CONSTELLATIONS.forEach(c => c.stars.forEach(s => {
      const v = equatorialToHorizontal(s.ra, s.dec, lst, MADRID.lat);
      const cz = v.x * cam.f[0] + v.y * cam.f[1] + v.z * cam.f[2];
      if (v.alt > 5 * DEG && cz > Math.cos(HFOV / 2)) score++;
    }));
    if (score > best.score) best = { az, score };
  }
  return { az: best.az, alt: alt0 };
}

function madridTime(date) {
  return date.toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' });
}

/* ─── Mariposas de Macondo: port fiel del motor de ERÊS (AlchemicalMacondoButterfly),
       con la paleta "Oro Macondo Alquímico" ─── */
const MACONDO = { core: '#ffffff', mid: '#fde047', amber: '#f59e0b', dark: '#78350f', outline: '#451a03', neon: '#fbbf24' };

class Dust {
  constructor(x, y, color = MACONDO.mid) {
    this.x = x + (Math.random() - 0.5) * 8;
    this.y = y + (Math.random() - 0.5) * 8;
    this.size = 1.2 + Math.random() * 2.4;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = 0.2 + Math.random() * 0.7;
    this.alpha = 0.95;
    this.decay = 0.012 + Math.random() * 0.018;
    this.color = color;
  }
  get life() { return this.alpha; }
  update() { this.x += this.vx; this.y += this.vy; this.alpha -= this.decay; }
  draw(ctx) {
    if (this.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

class Butterfly {
  constructor(w, h) { this.reset(w, h, true); }

  reset(w, h, initial = false) {
    this.x = initial ? Math.random() * w : (Math.random() < 0.5 ? -60 : w + 60);
    this.y = Math.random() * h;
    this.z = 0.35 + Math.random() * 0.75;
    this.scale = (9 + Math.random() * 8) * this.z; // más pequeñas que en ERÊS
    this.speed = (0.7 + Math.random() * 1.2) * this.z; // más lentas que en ERÊS
    this.angle = Math.random() * Math.PI * 2;
    this.vx = Math.cos(this.angle) * this.speed;
    this.vy = Math.sin(this.angle) * this.speed;
    this.flapPhase = Math.random() * Math.PI * 2;
    this.flapSpeed = 0.12 + Math.random() * 0.20;
    this.glideTimer = 0;
    this.isGliding = false;
    this.scaredTimer = 0;
    this.noiseOffset = Math.random() * 1000;
    this.bankAngle = 0;
    this.isConstellation = false;
    this.constellationTimer = 0;
    this.curiousTimer = 0; // > 0 mientras persigue el cursor
  }

  scare(originX, originY, force = 8.5) {
    const dx = this.x - originX;
    const dy = this.y - originY;
    const dist = Math.max(15, Math.sqrt(dx * dx + dy * dy));
    this.vx = (dx / dist) * (force + Math.random() * 4.0);
    this.vy = (dy / dist) * (force + Math.random() * 4.0) - 1.5;
    this.angle = Math.atan2(this.vy, this.vx);
    this.scaredTimer = 50;
    this.isGliding = false;
    this.isConstellation = false;
    this.curiousTimer = 0;
    this.flapSpeed = 0.42;
  }

  wake() {
    this.isConstellation = false;
    this.constellationTimer = 0;
    this.flapSpeed = 0.35 + Math.random() * 0.2;
    this.speed = (1.0 + Math.random() * 1.2) * this.z;
  }

  update(w, h, pointer, dust) {
    this.noiseOffset += 0.016;

    // Metamorfosis a constelación (quedarse dormida)
    if (!this.isConstellation && !this.isGliding && this.scaredTimer === 0 && Math.random() < 0.0018) {
      this.isConstellation = true;
      this.constellationTimer = 220 + Math.random() * 100;
    }

    if (this.isConstellation) {
      this.constellationTimer--;
      this.vx *= 0.94;
      this.vy *= 0.94;
      this.flapSpeed = 0.05;
      if (Math.random() < 0.4) dust.push(new Dust(this.x, this.y, MACONDO.neon));
      if (this.constellationTimer <= 0) {
        this.isConstellation = false;
        this.flapSpeed = 0.14 + Math.random() * 0.18;
        this.speed = (0.7 + Math.random() * 1.2) * this.z;
      }
    } else if (this.scaredTimer > 0) {
      this.scaredTimer--;
      this.vx *= 0.95;
      this.vy *= 0.95;
      if (this.scaredTimer === 0) this.flapSpeed = 0.12 + Math.random() * 0.20;
    } else {
      this.angle += Math.sin(this.noiseOffset) * 0.14;
      const targetVx = Math.cos(this.angle) * this.speed;
      const targetVy = Math.sin(this.angle) * this.speed + Math.sin(this.noiseOffset * 2) * 0.4;
      this.vx += (targetVx - this.vx) * 0.09;
      this.vy += (targetVy - this.vy) * 0.09;

      // De vez en cuando, curiosidad: persigue el cursor unos segundos
      if (pointer.active && this.curiousTimer === 0 && Math.random() < 0.0015) {
        this.curiousTimer = 180 + Math.random() * 180;
      }

      if (pointer.active && this.curiousTimer > 0) {
        this.curiousTimer--;
        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        // Se acerca hasta ~45px y revolotea alrededor sin tocarlo
        const pull = dist > 45 ? Math.min(1, (dist - 45) / 200) * 0.14 : -0.25;
        this.vx += (dx / dist) * pull + (-dy / dist) * 0.08;
        this.vy += (dy / dist) * pull + (dx / dist) * 0.08;
        this.flapSpeed = 0.32;
      } else if (pointer.active) {
        // Evasión suave con el ratón (como en ERÊS)
        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 180) {
          const repel = (1 - dist / 180) * 1.2;
          this.vx -= (dx / dist) * repel;
          this.vy -= (dy / dist) * repel;
          this.flapSpeed = 0.38;
        }
      }

      // Planeo al descender
      if (this.vy > 0.3 && Math.random() < 0.025 && !this.isGliding) {
        this.isGliding = true;
        this.glideTimer = 35 + Math.random() * 50;
      }
      if (this.isGliding) {
        this.glideTimer--;
        if (this.glideTimer <= 0) this.isGliding = false;
      }
    }

    // El cursor despierta a las que están dormidas como constelación
    if (this.isConstellation && pointer.active && Math.hypot(pointer.x - this.x, pointer.y - this.y) < 180) this.wake();

    this.x += this.vx;
    this.y += this.vy;

    const heading = Math.atan2(this.vy, this.vx);
    let diff = heading - this.angle;
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;
    this.angle += diff * 0.14;
    this.bankAngle = Math.max(-0.45, Math.min(0.45, diff * 2.4));

    this.flapPhase += this.isGliding ? 0.04 : this.flapSpeed;

    if (Math.random() < 0.35 * this.z) dust.push(new Dust(this.x, this.y, MACONDO.mid));

    if (this.x < -90 || this.x > w + 90 || this.y < -90 || this.y > h + 90) this.reset(w, h);
  }

  draw(ctx) {
    const p = MACONDO;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle + Math.PI / 2);
    ctx.rotate(this.bankAngle);

    const zScale = this.z;
    const baseW = this.scale;
    const baseH = this.scale * 1.35;

    let wingSpan = Math.cos(this.flapPhase);
    if (this.isGliding || this.isConstellation) wingSpan = 0.85 + Math.sin(this.flapPhase) * 0.08;
    const absSpan = Math.max(0.08, Math.abs(wingSpan));
    const wingFlex = Math.sin(this.flapPhase) * 0.16;

    // Metamorfosis a constelación (malla estelar luminosa)
    if (this.isConstellation) {
      ctx.globalAlpha = 0.95;
      ctx.shadowColor = p.neon;
      ctx.shadowBlur = 18 * zScale;
      for (const dir of [-1, 1]) {
        ctx.save();
        ctx.scale(dir * absSpan, 1.0);
        ctx.strokeStyle = p.neon;
        ctx.lineWidth = 1.2 * zScale;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(baseW * 1.15, -baseH * 0.7);
        ctx.lineTo(baseW * 0.95, baseH * 0.15);
        ctx.lineTo(baseW * 0.7, baseH * 0.85);
        ctx.lineTo(0, baseH * 0.4);
        ctx.closePath();
        ctx.stroke();
        [[baseW * 1.15, -baseH * 0.7], [baseW * 0.95, baseH * 0.15], [baseW * 0.7, baseH * 0.85], [0, 0]].forEach(([nx, ny]) => {
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(nx, ny, 2.2 * zScale, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.restore();
      }
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, 3.5 * zScale, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      return;
    }

    // Renderizado vectorial orgánico translúcido
    ctx.globalAlpha = Math.min(0.92, 0.40 + this.z * 0.55);
    ctx.shadowColor = p.amber;
    ctx.shadowBlur = 12 * zScale;

    for (const dir of [-1, 1]) {
      ctx.save();
      ctx.scale(dir * absSpan, 1.0 + (wingSpan < 0 ? -wingFlex : wingFlex));

      // Ala anterior
      const fwGrad = ctx.createRadialGradient(0, 0, 2, baseW * 0.6, -baseH * 0.4, baseW);
      fwGrad.addColorStop(0, p.core);
      fwGrad.addColorStop(0.3, p.mid);
      fwGrad.addColorStop(0.75, p.amber);
      fwGrad.addColorStop(1, p.dark);
      ctx.beginPath();
      ctx.moveTo(0, -baseH * 0.1);
      ctx.bezierCurveTo(baseW * 0.25, -baseH * 0.55, baseW * 0.75, -baseH * 0.85, baseW * 1.15, -baseH * 0.7);
      ctx.bezierCurveTo(baseW * 1.35, -baseH * 0.4, baseW * 1.25, -baseH * 0.05, baseW * 0.95, baseH * 0.15);
      ctx.bezierCurveTo(baseW * 0.6, baseH * 0.25, baseW * 0.25, baseH * 0.1, 0, baseH * 0.05);
      ctx.closePath();
      ctx.fillStyle = fwGrad;
      ctx.fill();
      ctx.strokeStyle = p.outline;
      ctx.lineWidth = 0.85 * zScale;
      ctx.stroke();

      // Venación de filigrana
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(baseW * 0.45, -baseH * 0.45, baseW * 0.95, -baseH * 0.55);
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(baseW * 0.6, -baseH * 0.2, baseW * 1.05, -baseH * 0.15);
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(baseW * 0.5, baseH * 0.05, baseW * 0.8, baseH * 0.1);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
      ctx.lineWidth = 0.55 * zScale;
      ctx.stroke();

      // Perlas de luz en los bordes
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(baseW * 1.1, -baseH * 0.65, 1.2 * zScale, 0, Math.PI * 2);
      ctx.arc(baseW * 1.22, -baseH * 0.25, 1.0 * zScale, 0, Math.PI * 2);
      ctx.arc(baseW * 0.9, baseH * 0.12, 1.0 * zScale, 0, Math.PI * 2);
      ctx.fill();

      // Ala posterior
      const hwGrad = ctx.createRadialGradient(0, baseH * 0.1, 1, baseW * 0.4, baseH * 0.4, baseW * 0.8);
      hwGrad.addColorStop(0, p.core);
      hwGrad.addColorStop(0.35, p.mid);
      hwGrad.addColorStop(0.8, p.amber);
      hwGrad.addColorStop(1, p.dark);
      ctx.beginPath();
      ctx.moveTo(0, baseH * 0.05);
      ctx.bezierCurveTo(baseW * 0.35, baseH * 0.1, baseW * 0.85, baseH * 0.2, baseW * 0.8, baseH * 0.55);
      ctx.bezierCurveTo(baseW * 0.7, baseH * 0.85, baseW * 0.35, baseH * 0.8, baseW * 0.15, baseH * 0.65);
      ctx.bezierCurveTo(baseW * 0.08, baseH * 0.72, 0, baseH * 0.65, 0, baseH * 0.4);
      ctx.closePath();
      ctx.fillStyle = hwGrad;
      ctx.fill();
      ctx.strokeStyle = p.outline;
      ctx.lineWidth = 0.85 * zScale;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, baseH * 0.1);
      ctx.quadraticCurveTo(baseW * 0.4, baseH * 0.35, baseW * 0.65, baseH * 0.65);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 0.5 * zScale;
      ctx.stroke();

      ctx.restore();
    }

    // Cuerpo, anillos, cabeza, ojos y antenas
    ctx.shadowBlur = 4;
    ctx.shadowColor = '#000000';
    ctx.fillStyle = '#1c0c02';
    ctx.beginPath();
    ctx.ellipse(0, baseH * 0.05, 1.6 * zScale, baseH * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = p.mid;
    ctx.fillRect(-1.1 * zScale, -baseH * 0.1, 2.2 * zScale, 1.1 * zScale);
    ctx.fillRect(-0.9 * zScale, 0, 1.8 * zScale, 0.9 * zScale);

    ctx.fillStyle = '#1c0c02';
    ctx.beginPath();
    ctx.arc(0, -baseH * 0.32, 2.0 * zScale, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = p.neon;
    ctx.beginPath();
    ctx.arc(-1.1 * zScale, -baseH * 0.34, 0.85 * zScale, 0, Math.PI * 2);
    ctx.arc(1.1 * zScale, -baseH * 0.34, 0.85 * zScale, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = p.neon;
    ctx.lineWidth = 0.7 * zScale;
    ctx.beginPath();
    ctx.moveTo(-0.7 * zScale, -baseH * 0.34);
    ctx.quadraticCurveTo(-baseW * 0.25, -baseH * 0.55, -baseW * 0.35, -baseH * 0.5);
    ctx.moveTo(0.7 * zScale, -baseH * 0.34);
    ctx.quadraticCurveTo(baseW * 0.25, -baseH * 0.55, baseW * 0.35, -baseH * 0.5);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(-baseW * 0.35, -baseH * 0.5, 1.0 * zScale, 0, Math.PI * 2);
    ctx.arc(baseW * 0.35, -baseH * 0.5, 1.0 * zScale, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
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
    let base = bestView(new Date());
    let butterflies = [];
    let dust = [];
    let hovered = null;
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

      projected.forEach(({ c, pts }) => {
        const isHover = c.name === hovered;
        // Líneas
        ctx.lineWidth = isHover ? 1.2 : 0.6;
        ctx.strokeStyle = isHover ? `rgba(${GOLD}, ${0.25 + hoverGlow * 0.6})` : `rgba(${GOLD}, 0.16)`;
        ctx.shadowColor = `rgba(${GOLD}, 0.8)`;
        ctx.shadowBlur = isHover ? 8 : 0;
        c.lines.forEach(([a, b]) => {
          const p1 = pts[a], p2 = pts[b];
          if (!p1 || !p2) return;
          const t = isHover ? hoverGlow : 1;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p1.x + (p2.x - p1.x) * t, p1.y + (p2.y - p1.y) * t);
          ctx.stroke();
        });
        ctx.shadowBlur = 0;

        // Estrellas (tamaño por magnitud)
        Object.values(pts).forEach(p => {
          const r = Math.max(0.7, 3.2 - p.mag * 0.55) * (isHover ? 1.35 : 1);
          const fade = Math.min(1, (p.alt / DEG + 2) / 8);
          const tw = reduceMotion ? 1 : 0.85 + Math.sin(now * 0.002 + p.x) * 0.15;
          ctx.fillStyle = `rgba(${isHover ? GOLD : IVORY}, ${fade * tw})`;
          ctx.shadowColor = `rgba(${GOLD}, 0.9)`;
          ctx.shadowBlur = r * 4;
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
    const reframe = setInterval(() => { base = bestView(new Date()); }, 600000);

    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
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
