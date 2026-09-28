/* Mariposas de Macondo compartidas por el hero y el retrato de "Sobre mí". */

/* ─── Mariposas de Macondo: port fiel del motor de ERÊS (AlchemicalMacondoButterfly),
       con la paleta "Oro Macondo Alquímico" ─── */
export const MACONDO = { core: '#ffffff', mid: '#fde047', amber: '#f59e0b', dark: '#78350f', outline: '#451a03', neon: '#fbbf24' };

export class Dust {
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

export class Butterfly {
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
