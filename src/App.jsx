import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  TerminalSquare, 
  Rocket, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  UserCircle,
  Mail,
  MessageCircle
} from 'lucide-react';

/* ════════════════════════════════════════════
   COMPONENTE: Data Log (Evolucionado a Protocolo)
   ════════════════════════════════════════════ */
function DataLog({ status, tags, title, subtitle, mission, id, link }) {
  return (
    <div className="zettel-card p-6 relative overflow-hidden group">
      {/* Glitch/Hover effect bar */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-ds-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="font-mono text-[10px] text-slate-500 mb-2 uppercase tracking-widest">[ CÓDIGO DE PROTOCOLO ]</div>
      <div className="font-mono text-[10px] text-[var(--color-ds-secondary)] mb-4">{status}</div>
      
      <div className="font-mono text-[10px] text-slate-400 mb-2">{tags}</div>
      <h3 className="text-2xl font-sans font-bold text-white mb-1 tracking-tight">{title}</h3>
      <p className="text-sm font-medium text-[var(--color-ds-primary)] mb-4">{subtitle}</p>
      
      <p className="text-sm text-slate-400 mb-4 leading-relaxed">
        {mission.desc}
      </p>
      
      <div className="text-xs text-slate-500 font-mono mb-2">
        [ OBJETIVO ESTRATÉGICO ]
      </div>
      <p className="text-sm text-white mb-6">
        {mission.objective}
      </p>
      
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/50">
        <div className="text-[10px] font-mono text-slate-600">
          REF: {id}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[var(--color-ds-primary)] hover:text-[var(--color-ds-secondary)] transition-colors tracking-widest uppercase">
            Ver Despliegue ↗
          </a>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   APP PRINCIPAL
   ════════════════════════════════════════════ */
function App() {
  return (
    <div className="min-h-screen bg-[var(--color-ds-bg)] text-[var(--color-ds-text)] selection:bg-[var(--color-ds-primary)] selection:text-[#0A0F1C] relative">
      {/* Textura de Lujo (Quiet Luxury) */}
      <div className="noise-overlay fixed" />
      
      {/* ─── NAVEGACIÓN ─── */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--color-ds-bg)]/80 backdrop-blur-md border-b border-[var(--color-ds-border)]/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-sans font-black text-xl tracking-tighter">
            DaniSid<span className="text-[var(--color-ds-primary)] animate-pulse">.</span>
          </div>
          <div className="hidden md:flex gap-6 font-mono text-xs text-slate-400 uppercase tracking-widest items-center">
            <a href="#proposito" className="hover:text-[var(--color-ds-primary)] transition-colors">La Filosofía</a>
            <a href="#atelier" className="hover:text-[var(--color-ds-primary)] transition-colors">El Atelier</a>
            <a href="#experiencia" className="hover:text-[var(--color-ds-primary)] transition-colors">La Corte</a>
            <a href="#contacto" className="hover:text-[var(--color-ds-primary)] transition-colors">Contacto</a>
            <div className="w-px h-4 bg-slate-800 mx-2"></div>
            <a href="https://github.com/DaniSidCode" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.25a11.39 11.39 0 0 0-7 0C6.1 2.75 5 3.1 5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.5 9.5c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/danisidcode/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, var(--color-ds-primary), transparent 70%)' }}
        />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, var(--color-ds-secondary), transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-ds-surface)] border border-[var(--color-ds-primary)]/20 text-[10px] font-mono text-[var(--color-ds-primary)] mb-8 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[var(--color-ds-primary)] animate-pulse" />
              Sistemas e Infraestructura B2B
            </div>
            
            <h1 className="text-5xl md:text-7xl font-sans font-black tracking-tighter mb-6 leading-[1.05] text-white">
              Arquitecto Web & <br/>
              <span className="text-gradient-cyber">
                Fundador de Maison Quintessence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 font-light">
              Arquitectura digital de élite. Diseño sistemas escalables, interfaces premium y flujos de automatización inteligente para empresas que exigen perfección técnica. El 100% de la ingeniería digital de tu negocio, bajo un estricto protocolo.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#atelier" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-ds-secondary)] to-[var(--color-ds-accent)] text-[#050505] hover:opacity-90 px-8 py-3.5 text-sm font-bold tracking-wide uppercase transition-all rounded-sm shadow-[0_0_20px_rgba(255,184,0,0.3)] relative z-10">
                Entrar al Atelier <Rocket className="w-4 h-4" />
              </a>
              <a href="mailto:garciadanielsid@gmail.com" className="inline-flex items-center justify-center gap-2 border border-[var(--color-ds-primary)]/30 text-[var(--color-ds-primary)] hover:bg-[var(--color-ds-primary)]/10 px-8 py-3.5 text-sm font-mono tracking-widest uppercase transition-all rounded-sm relative z-10">
                Agendar Audiencia <TerminalSquare className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FILOSOFÍA DE TRABAJO (VERSALLES) ─── */}
      <section id="proposito" className="py-24 px-6 bg-[var(--color-ds-bg)] relative border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sans font-black text-4xl md:text-5xl tracking-tighter text-gradient-cyber mb-6">El Protocolo de la Excelencia</h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Al igual que Versalles no fue construido con talento sino con rigor arquitectónico, abordo cada ecosistema con la obsesión de un científico y el gusto de un artista. No creo en atajos; creo en la maestría forjada a través de la investigación y el diseño impecable.
            </p>
            <p className="text-sm font-mono text-white mt-8 uppercase tracking-widest p-6 border border-slate-800 bg-[#0B101E] rounded-lg">
              "El talento es un accidente; la excelencia es un protocolo."<br/><span className="text-xs text-[var(--color-ds-secondary)] mt-2 block">La disciplina estoica y el gusto impecable son la única corte donde reina la maestría.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="zettel-card p-8">
              <BookOpen className="w-8 h-8 text-[var(--color-ds-primary)] mb-6" />
              <h3 className="text-2xl font-sans font-bold tracking-tight text-white mb-4">Investigación y Rigor</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Cada línea de código y cada decisión de interfaz nace de un estudio crítico. Mi trabajo es apasionado, pero siempre fundamentado en datos, rendimiento y arquitectura científica de precisión.
              </p>
            </div>
            <div className="zettel-card p-8 border-[var(--color-ds-primary)]/40 shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-ds-primary)] opacity-[0.05] rounded-full blur-2xl"></div>
              <Cpu className="w-8 h-8 text-[var(--color-ds-primary)] mb-6" />
              <h3 className="text-2xl font-sans font-bold tracking-tight text-white mb-4">La Etiqueta del Código</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                La tecnología avanzada (IA, React, WebOps) no es un atajo para trabajar menos. Es el protocolo necesario para orquestar ecosistemas digitales que rozan la perfección estética y funcional.
              </p>
            </div>
            <div className="zettel-card p-8">
              <ShieldCheck className="w-8 h-8 text-[var(--color-ds-secondary)] mb-6" />
              <h3 className="text-2xl font-sans font-bold tracking-tight text-white mb-4">Soberanía y Disciplina</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                La majestuosidad exige sacrificio y dedicación absoluta. Me inspiro en la élite del mercado para superarlos paso a paso, garantizando resultados empresariales inquebrantables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EL ATELIER (MAISON QUINTESSENCE) ─── */}
      <section id="atelier" className="py-32 px-6 bg-[#0B101E] relative border-t border-slate-800/50 overflow-hidden">
        {/* Intense Cyberpunk Glow behind Atelier */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-[var(--color-ds-primary)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block border border-[var(--color-ds-primary)]/30 px-4 py-1 text-xs font-mono text-[var(--color-ds-primary)] mb-6 tracking-widest uppercase">Firma B2B Boutique</div>
          <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tighter text-gradient-cyber mb-6">
            Maison Quintessence
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Mientras <span className="font-bold text-white">DaniSid</span> es la mente arquitectónica, <strong className="text-white font-black tracking-tight">Maison Quintessence</strong> es mi Atelier exclusivo. Es la corte donde nuestra ingeniería se transmuta en portales B2B de lujo y SaaS de alto rendimiento corporativo.
          </p>
          <a href="https://maison-quintessence.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-ds-secondary)] text-[#0A0F1C] bg-[var(--color-ds-secondary)] hover:bg-transparent hover:text-[var(--color-ds-secondary)] px-10 py-4 text-sm font-black tracking-widest uppercase transition-all rounded-sm shadow-[0_0_30px_rgba(0,255,163,0.2)]">
                Explorar La Agencia <Rocket className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ─── LABORATORIO I+D ─── */}
      <section id="vision" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black tracking-tighter text-4xl text-gradient-cyber mb-12 text-center">Laboratorio de I+D</h2>
          
          <div className="space-y-6">
            <DataLog 
              status="DEPLOYED"
              tags="React.WebOps.SaaS.HORECA"
              title="El Rincón - Carta Interactiva"
              subtitle="Digitalización Gastronómica B2B"
              mission={{
                desc: "Desarrollo de un menú digital escalable. Implementación de arquitectura frontend con CI/CD en Netlify para garantizar actualizaciones en tiempo real y alta disponibilidad en entornos de alta demanda (restauración).",
                objective: "Modernizar la experiencia de usuario final (UX) y optimizar el embudo de ventas del restaurante mediante diseño responsivo de alto rendimiento."
              }}
              id="RNC-01"
              link="https://elrincontetuan.com/"
            />

            <DataLog 
              status="ACTIVE"
              tags="React.UI/UX.QuietLuxury.Media"
              title="Eddy Soundscapes EPK"
              subtitle="Arquitectura de Identidad Digital"
              mission={{
                desc: "Construcción de un Electronic Press Kit (EPK) B2B. Fusión de la filosofía 'Quiet Luxury' con componentes reactivos para orquestar la reproducción multimedia y estructurar un portal de booking premium.",
                objective: "Posicionar una marca personal en el segmento de lujo para la captación directa de contratos y eventos privados."
              }}
              id="EDY-02"
              link="https://eddycamusic.netlify.app/"
            />

            <DataLog 
              status="FUNCTIONAL"
              tags="Python.DataMining.AI.Automation"
              title="Motor Quimera IA"
              subtitle="Automatización de Datos Complejos"
              mission={{
                desc: "Sistema local de ingeniería inversa para la extracción, clasificación y empaquetado de gigabytes de conversaciones desestructuradas y archivos multimedia.",
                objective: "Optimizar la recopilación y limpieza de datos (Data Engineering) para sentar las bases de entrenamiento de modelos NLP personalizados."
              }}
              id="QMR-03"
            />

            <DataLog 
              status="CLASSIFIED"
              tags="Ciberseguridad.Infraestructura.RBAC"
              title="Terminal Zero"
              subtitle="Auditoría de Red y Bypass ISP"
              mission={{
                desc: "Diagnóstico y restablecimiento de conectividad de nodos transaccionales físicos bajo bloqueo de ISP. Implementación de control de acceso (RBAC) y pasarelas seguras independientes.",
                objective: "Garantizar alta disponibilidad en operaciones comerciales críticas, evadiendo restricciones a través de ingeniería de redes (Secure Gateway)."
              }}
              id="TZ-04"
            />
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCIA PROFESIONAL ─── */}
      <section id="experiencia" className="py-24 px-6 bg-[#050505] border-t border-slate-800/50 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans font-black tracking-tighter text-4xl text-gradient-cyber mb-16 text-center">La Corte (Experiencia)</h2>
          
          <div className="space-y-12">
            {/* Exp 1 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <h3 className="text-2xl font-sans font-bold tracking-tight text-white mb-2">Maison Quintessence</h3>
                <p className="font-mono text-[var(--color-ds-primary)] text-xs uppercase tracking-widest">Firma B2B de Lujo</p>
              </div>
              <div className="zettel-card p-8 border-l-4 border-l-[var(--color-ds-primary)]">
                <h4 className="text-lg font-sans font-bold text-white mb-2">Fundador & Lead Architect</h4>
                <p className="font-mono text-xs text-[var(--color-ds-secondary)] mb-6">2024 - Actualidad</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Lideré el diseño, desarrollo y despliegue completo de soluciones empresariales. Implementé flujos de trabajo con Git y CI/CD en Netlify. Apliqué principios de ingeniería para la refactorización y orquestación de IA en procesos B2B de alto valor.
                </p>
              </div>
            </div>

            {/* Exp 2 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <h3 className="text-2xl font-sans font-bold tracking-tight text-white mb-2">Proyecto Antología</h3>
                <p className="font-mono text-slate-400 text-xs uppercase tracking-widest">Migración SPA</p>
              </div>
              <div className="zettel-card p-8">
                <h4 className="text-lg font-sans font-bold text-white mb-2">Desarrollador Frontend (React)</h4>
                <p className="font-mono text-xs text-slate-500 mb-6">2024</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Lideré la migración de un proyecto JavaScript puro a una aplicación moderna con React y Vite. Re-arquitecturé la app a un modelo de componentes, gestionando estado global y optimizando la UI para una experiencia de lectura fluida.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-800/50">
                  <a href="https://antologia.danisid.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-[var(--color-ds-primary)] hover:text-[var(--color-ds-secondary)] transition-colors tracking-widest uppercase">
                    Ver Proyecto Antología ↗
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* ─── SERVICIOS (Grid Final) ─── */}
      <section className="py-24 px-6 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-sans font-black tracking-tighter text-center text-gradient-cyber mb-16">Servicios de Élite</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="zettel-card p-6">
              <Code2 className="w-10 h-10 text-[var(--color-ds-primary)] mb-4" />
              <h3 className="font-sans font-bold text-xl text-white mb-3">Ingeniería Web</h3>
              <p className="text-xs text-slate-400">Aplicaciones interactivas con React. Soluciones escalables centradas en el rendimiento.</p>
            </div>
            <div className="zettel-card p-6">
              <Rocket className="w-10 h-10 text-[var(--color-ds-secondary)] mb-4" />
              <h3 className="font-sans font-bold text-xl text-white mb-3">Infraestructura WebOps</h3>
              <p className="text-xs text-slate-400">Mejora de rendimiento (WPO), CI/CD con Netlify y servidores modernos.</p>
            </div>
            <div className="zettel-card p-6 border-[var(--color-ds-primary)]/20 shadow-[0_0_15px_rgba(0,240,255,0.05)]">
              <Sparkles className="w-10 h-10 text-[var(--color-ds-primary)] mb-4" />
              <h3 className="font-sans font-bold text-xl text-white mb-3">Orquestación IA</h3>
              <p className="text-xs text-slate-400">Consultoría e integración de Inteligencia Artificial en flujos de trabajo corporativos.</p>
            </div>
            <div className="zettel-card p-6">
              <UserCircle className="w-10 h-10 text-[var(--color-ds-secondary)] mb-4" />
              <h3 className="font-sans font-bold text-xl text-white mb-3">Arquitectura UI/UX</h3>
              <p className="text-xs text-slate-400">Ingeniería de interfaces B2B de alta conversión bajo la filosofía 'Quiet Luxury'.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IDENTIDAD CORPORATIVA (MANUAL) ─── */}
      <section className="py-24 px-6 relative border-t border-slate-800/50 bg-[#0B101E]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans font-black tracking-tighter text-4xl text-white mb-12 text-center">Manual de Identidad</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Typography */}
            <div className="zettel-card p-8">
              <h3 className="text-sm font-mono text-[var(--color-ds-secondary)] font-bold uppercase tracking-widest mb-8">[ TIPOGRAFÍA ]</h3>
              <div className="mb-8 p-4 bg-[#0A0F1C] border border-slate-800 rounded-lg">
                <div className="text-4xl font-sans font-black tracking-tighter text-gradient-cyber mb-2">Outfit ExtraBold</div>
                <div className="text-xs font-mono text-slate-400">TITULARES / IMPACTO / LUJO MODERNO</div>
              </div>
              <div className="p-4 bg-[#0A0F1C] border border-slate-800 rounded-lg">
                <div className="text-2xl font-mono text-[var(--color-ds-primary)] mb-2">JetBrains Mono</div>
                <div className="text-xs font-mono text-slate-400">DATOS / CÓDIGO / PROTOCOLO TÉCNICO</div>
              </div>
            </div>

            {/* Colors */}
            <div className="zettel-card p-8">
              <h3 className="text-sm font-mono text-[var(--color-ds-secondary)] font-bold uppercase tracking-widest mb-8">[ PALETA CROMÁTICA ]</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#050505] border border-slate-800 shadow-inner"></div>
                  <div>
                    <div className="text-base text-white font-bold">OLED Black (El Lienzo Oscuro)</div>
                    <div className="text-xs font-mono text-slate-500">#050505</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.4)]"></div>
                  <div>
                    <div className="text-base text-white font-bold">Cian Láser (La Mente / Ingeniería)</div>
                    <div className="text-xs font-mono text-slate-500">#00F0FF</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#FFB800] shadow-[0_0_20px_rgba(255,184,0,0.4)]"></div>
                  <div>
                    <div className="text-base text-white font-bold">Oro Puro (El Lujo / Excelencia)</div>
                    <div className="text-xs font-mono text-slate-500">#FFB800</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#FF2A2A] shadow-[0_0_20px_rgba(255,42,42,0.4)]"></div>
                  <div>
                    <div className="text-base text-white font-bold">Rojo Escarlata (El Alma / Pasión Colombiana)</div>
                    <div className="text-xs font-mono text-slate-500">#FF2A2A</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section id="contacto" className="py-24 px-6 relative border-t border-slate-800/50 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block border border-[var(--color-ds-primary)]/30 px-4 py-1 text-xs font-mono text-[var(--color-ds-primary)] mb-6 tracking-widest uppercase">Canal de Comunicación</div>
          <h2 className="text-4xl md:text-5xl font-sans font-black tracking-tighter text-white mb-6">
            Inicia el Protocolo
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            ¿Buscas elevar la arquitectura digital de tu negocio o tienes algún proyecto en mente? Hablemos de sistemas, rendimiento y diseño premium.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="mailto:garciadanielsid@gmail.com" className="zettel-card p-8 flex flex-col items-center justify-center hover:border-[var(--color-ds-primary)]/50 transition-colors group">
              <Mail className="w-10 h-10 text-[var(--color-ds-primary)] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-sans font-bold text-lg text-white mb-2">Correo Electrónico</h3>
              <p className="text-xs text-slate-400">garciadanielsid@gmail.com</p>
            </a>
            
            <a href="https://wa.me/34641868620" target="_blank" rel="noopener noreferrer" className="zettel-card p-8 flex flex-col items-center justify-center hover:border-[var(--color-ds-secondary)]/50 transition-colors group">
              <MessageCircle className="w-10 h-10 text-[var(--color-ds-secondary)] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-sans font-bold text-lg text-white mb-2">WhatsApp</h3>
              <p className="text-xs text-slate-400">+34 641 86 86 20</p>
            </a>
            
            <a href="https://www.linkedin.com/in/danisidcode/" target="_blank" rel="noopener noreferrer" className="zettel-card p-8 flex flex-col items-center justify-center hover:border-[#0077b5]/50 transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-[#0077b5] mb-4 group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <h3 className="font-sans font-bold text-lg text-white mb-2">LinkedIn</h3>
              <p className="text-xs text-slate-400">Red Profesional</p>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-slate-800/30 py-12 text-center bg-[#050505] relative z-10">
        <div className="font-sans font-black text-white text-3xl mb-4 tracking-tighter">DaniSid.</div>
        
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/DaniSidCode" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.25a11.39 11.39 0 0 0-7 0C6.1 2.75 5 3.1 5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.5 9.5c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/danisidcode/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0077b5] transition-colors" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="mailto:garciadanielsid@gmail.com" className="text-slate-400 hover:text-[var(--color-ds-primary)] transition-colors" title="Contacto">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-[var(--color-ds-primary)] font-mono tracking-widest uppercase opacity-80">
          © {new Date().getFullYear()} El protocolo de la excelencia.
        </p>
      </footer>
    </div>
  );
}

export default App;
