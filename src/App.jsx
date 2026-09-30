import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ProjectModal from './components/ProjectModal';
import HeroCosmos from './components/HeroCosmos';
import StatusTicker from './components/StatusTicker';
import NeuralProtocol from './components/NeuralProtocol';
import PortraitReveal from './components/PortraitReveal';
import ThemeToggle from './components/ThemeToggle';
import EnglishHint from './components/EnglishHint';
import WhatsAppButton, { WhatsAppIcon, WHATSAPP_URL } from './components/WhatsApp';
import { track } from './lib/analytics';
import { T, LANG, LANG_URLS } from './i18n';
import { Mail, ArrowRight, Terminal, Shield, Cpu, Code2, Database, Globe, Network, Layers, GitBranch, TerminalSquare, ExternalLink, Server, Zap, Lock, Menu, X } from 'lucide-react';

/* ════════════════════════════════════════════
   APP PRINCIPAL: LUXURY B2B & PORTFOLIO
   ════════════════════════════════════════════ */

// Datos de los proyectos que no dependen del idioma.
// Los textos (título, descripción, caso de estudio) están en src/i18n/es.js y en.js.
const PORTFOLIO_PROJECTS = [
  {
    id: '01', url: 'https://umbanda-eres.netlify.app', cat: 1, hero: true,
    media: ['/screenshots/umbanda/umbanda_1.webp'],
    stack: ['JavaScript', 'HTML5 Canvas', 'Web Audio API', 'Astronomía (tiempo sidéreo)'],
  },
  {
    id: '02', url: 'https://quimera-automata.netlify.app', cat: 1, hero: true,
    media: ['/screenshots/quimera/quimera_1.webp'],
    stack: ['JavaScript', 'HTML5 Canvas', 'Web Audio API'],
  },
  {
    id: '03', url: 'https://antologia.danisid.com', cat: 1,
    media: ['/screenshots/antologia/antologia_1.webp'],
    stack: ['React', 'Vite', 'CSS3', 'SEO & Open Graph'],
  },
  {
    id: '04', url: 'https://guitarra.danisid.com', cat: 1,
    media: ['/screenshots/cancionero/cancionero_1.webp'],
    stack: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    id: '05', url: 'https://elrincontetuan.com', cat: 2, hero: true,
    media: ['/screenshots/rincon/rincon_1.webp', '/screenshots/rincon/rincon_2.webp', '/screenshots/rincon/rincon_3.webp'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Cloudflare'],
  },
  {
    id: '06', url: 'https://marianisac.com', cat: 2, hero: true,
    media: ['/screenshots/marian/marian_1.webp', '/screenshots/marian/marian_2.webp', '/screenshots/marian/marian_3.webp'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Cloudflare', 'Google Analytics'],
  },
  {
    id: '07', url: 'https://asociacioncreandosuenos.com', cat: 2, hero: true,
    media: ['/screenshots/creando/creando_1.webp'],
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: '08', url: 'https://eddycamusic.netlify.app', cat: 2, hero: true,
    media: ['/screenshots/eddy/eddy_1.webp'],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: '09', url: '', github: 'https://github.com/DSidCode/Aurum-CRM', cat: 3,
    media: ['/screenshots/aurum/aurum_1.webp', '/screenshots/aurum/aurum_2.webp', '/screenshots/aurum/aurum_3.webp', '/screenshots/aurum/aurum_4.webp', '/screenshots/aurum/aurum_5.webp', '/screenshots/aurum/aurum_6.webp'],
    stack: ['.NET 10', 'C#', 'MediatR (CQRS)', 'EF Core', 'React 19', 'TypeScript', 'Tailwind CSS', 'xUnit'],
  },
  {
    id: '10', url: '', cat: 3,
    media: ['/screenshots/sniper/sniper_1.webp', '/screenshots/sniper/sniper_2.webp', '/screenshots/sniper/sniper_3.webp'],
    stack: ['Python', 'Pandas', 'CCXT (Binance API)', 'Flask', 'JavaScript (Vanilla)', 'HTML5 / CSS3', 'Linux notify-send'],
  },
  {
    id: '11', url: '', cat: 3,
    media: ['/screenshots/cluster/cluster_1.webp', '/screenshots/cluster/cluster_2.webp'],
    stack: ['Linux (Nobara · Mint · Kali)', 'Bash', 'Python', 'SSH / rsync', 'The Sleuth Kit', 'dd + SHA-256', 'GPT / parted'],
  },
];

// Proyectos con los textos del idioma de la página
const PROJECTS = PORTFOLIO_PROJECTS.map(p => ({
  ...p,
  ...T.projects.items[p.id],
  categoryName: T.projects.categories[p.cat],
  stack: p.stack.map(tech => T.projects.stackTerms[tech] ?? tech),
}));

// Selector ES · EN: enlaces reales a cada versión; el idioma activo, en oro
function LanguageSwitch({ className = '' }) {
  return (
    <div className={`items-center font-mono text-xs tracking-widest ${className}`} aria-label={T.nav.language} role="group">
      {['es', 'en'].map((lang, i) => (
        <React.Fragment key={lang}>
          {i > 0 && <span className="text-[var(--color-ds-border)] px-0.5" aria-hidden="true">·</span>}
          <a
            href={LANG_URLS[lang]}
            hrefLang={lang}
            lang={lang}
            aria-current={lang === LANG ? 'true' : undefined}
            onClick={() => { if (lang !== LANG) track('language_switch', { to: lang }); }}
            className={`min-w-11 min-h-11 flex items-center justify-center uppercase transition-colors ${lang === LANG ? 'text-[var(--color-ds-primary)] font-bold' : 'text-[var(--color-ds-muted)] hover:text-[var(--color-ds-text)]'}`}
          >
            {lang}
          </a>
        </React.Fragment>
      ))}
    </div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navegación del menú: desplazamiento suave hecho a mano (rAF).
  // `scroll-behavior: smooth` no avanza en navegadores móviles al cerrar el menú.
  const goToSection = (e, href) => {
    setMenuOpen(false);
    if (href.startsWith('mailto:')) track('contact_email', { location: 'nav' });
    if (!href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    history.replaceState(null, '', href);

    const NAV_HEIGHT = 64;
    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + startY - NAV_HEIGHT;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, endY);
      return;
    }
    const duration = Math.min(900, 300 + Math.abs(endY - startY) * 0.15);
    const start = performance.now();
    const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const step = now => {
      const t = Math.min(1, (now - start) / duration);
      window.scrollTo(0, startY + (endY - startY) * ease(t));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <div className="min-h-screen bg-[var(--color-ds-bg)] text-[var(--color-ds-text)] selection:bg-[var(--color-ds-primary)] selection:text-[#ffffff] relative font-sans overflow-x-hidden">
      
      {/* ─── NAVEGACIÓN ─── */}
      <nav className="fixed top-0 w-full z-40 bg-[var(--color-ds-bg)]/90 backdrop-blur-sm border-b border-[var(--color-ds-border)]">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="font-sans font-black text-xl lg:text-2xl tracking-tighter uppercase shrink-0">
            DaniSid<span className="text-[var(--color-ds-primary)] animate-pulse">_</span>
          </div>
          <div className="flex items-center">
          <div className="hidden md:flex font-mono text-[10px] lg:text-xs text-[var(--color-ds-muted)] uppercase tracking-widest items-center">
            {T.nav.links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => goToSection(e, link.href)}
                className={`hover:text-[var(--color-ds-text)] transition-colors h-16 flex items-center ${i < T.nav.links.length - 1 ? 'px-4 lg:px-6 border-r border-[var(--color-ds-border)]' : 'pl-4 lg:pl-6 hover:text-[var(--color-ds-primary)]'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Idioma (escritorio; en móvil está dentro del menú) */}
          <LanguageSwitch className="hidden md:flex md:ml-4 lg:ml-6 md:pl-4 lg:pl-6 md:border-l border-[var(--color-ds-border)] h-16" />

          {/* Modo claro / oscuro (escritorio y móvil) */}
          <ThemeToggle className="md:ml-2 lg:ml-4" />

          {/* Botón de menú (móvil) */}
          <button
            onClick={() => setMenuOpen(open => !open)}
            className="md:hidden -mr-2 p-2 text-[var(--color-ds-text)]"
            aria-label={menuOpen ? T.nav.closeMenu : T.nav.openMenu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>

        {/* Menú desplegable (móvil) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden overflow-hidden border-t border-[var(--color-ds-border)] bg-[var(--color-ds-bg)]"
            >
              {T.nav.links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => goToSection(e, link.href)}
                  className="block px-6 py-4 font-mono text-sm uppercase tracking-widest text-[var(--color-ds-text)] border-b border-[var(--color-ds-border)] active:text-[var(--color-ds-primary)]"
                >
                  {link.label}
                </a>
              ))}
              <LanguageSwitch className="flex px-4 py-1 border-b border-[var(--color-ds-border)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ─── Ticker Marquesina ─── */}
      <div className="pt-16 border-b border-[var(--color-ds-border)] bg-[var(--color-ds-surface)]">
        <StatusTicker />
      </div>

      <div className="relative overflow-hidden">
      {/* Cielo real sobre Madrid + mariposas (canvas interactivo) */}
      <HeroCosmos />
      {/* Velo suave en móvil para que el texto se lea sobre el cielo */}
      <div className="md:hidden absolute inset-0 z-[1] bg-[var(--color-ds-bg)]/20 pointer-events-none" />

      <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col md:flex-row border-x border-[var(--color-ds-border)] min-h-[calc(100vh-64px)] pointer-events-none">

        {/* Lado Izquierdo: Texto Editorial Brutalista */}
        <div className="w-full md:w-1/2 p-6 lg:p-16 flex flex-col justify-center min-w-0 md:bg-gradient-to-r md:from-[var(--color-ds-bg)] md:via-[var(--color-ds-bg)]/60 md:to-transparent [&_a]:pointer-events-auto [text-shadow:0_1px_14px_rgba(10,10,10,0.95)] md:[text-shadow:none] hero-text">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-block border border-[var(--color-ds-border)] px-3 py-1 text-[9px] font-mono text-[var(--color-ds-muted)] mb-8 tracking-widest uppercase bg-[var(--color-ds-bg)] opacity-70">
              {T.hero.tag}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 text-[var(--color-ds-text)] leading-[0.9] break-words">
              DANIEL<br/>GARCÍA
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-8 text-[var(--color-ds-muted)]">
              {T.hero.role}
            </h2>

            <p className="text-sm font-mono text-[var(--color-ds-text)] max-w-md leading-relaxed mb-12">
              &gt; {T.hero.lines[0]}<br/>
              &gt; {T.hero.lines[1]}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" onClick={(e) => goToSection(e, '#portfolio')} className="bg-[var(--color-ds-primary)] text-black px-8 py-3 text-xs font-bold transition-all hover:bg-[#b5952f]">
                {T.hero.ctaProjects}
              </a>
              <a href="mailto:garciadanielsid@gmail.com" onClick={() => track('contact_email')} className="border border-[var(--color-ds-primary)] text-[var(--color-ds-primary)] px-8 py-3 text-xs font-bold transition-all hover:bg-[var(--color-ds-primary)] hover:text-black">
                {T.hero.ctaTalk}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Lado Derecho: espacio libre para el cielo */}
        <div className="hidden md:block md:w-1/2" />
      </div>
      </div>

      {/* ─── PORTFOLIO / SYS.LOGS (NUEVO) ─── */}
      <section id="portfolio" className="border-y border-[var(--color-ds-border)] bg-[var(--color-ds-surface)] py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16 border-b border-[var(--color-ds-border)] pb-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-ds-text)] uppercase">
                {T.projects.title}
              </h2>
              <p className="font-mono text-xs text-[var(--color-ds-muted)] mt-2 uppercase tracking-widest">
                {T.projects.kicker}
              </p>
            </div>
            <div className="hidden md:block font-mono text-[10px] text-[var(--color-ds-primary)]">
              {T.projects.count}
            </div>
          </div>

          <div className="space-y-12">
            {[1, 2, 3].map(catId => {
              const categoryProjects = PROJECTS.filter(p => p.cat === catId);
              if (categoryProjects.length === 0) return null;
              return (
                <div key={catId}>
                  <h3 className={`text-xl font-bold font-mono text-[var(--color-ds-primary)] mb-6 border-b border-[var(--color-ds-border)] pb-2 uppercase tracking-widest ${catId !== 1 ? 'mt-8' : ''}`}>
                    [0{catId}] {categoryProjects[0].categoryName}
                  </h3>
                  <div className="space-y-4">
                    {categoryProjects.map(project => {
                      const isHero = Boolean(project.hero);
                      
                      return (
                        <motion.button 
                          key={project.id}
                          onClick={() => { setSelectedProject(project); track('open_project', { project_id: project.id, project_title: project.title }); }}
                          whileHover={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          className={`w-full text-left group block border border-[var(--color-ds-border)] hover:border-[var(--color-ds-primary)] transition-colors relative overflow-hidden flex flex-col md:flex-row ${isHero ? 'project-hero min-h-[400px] md:min-h-[500px]' : 'bg-[var(--color-ds-bg)] p-4 md:p-6'}`}
                        >
                          {/* HERO BACKGROUND (en modo claro, velo crema: ver index.css) */}
                          {isHero && project.media && project.media.length > 0 && (
                            <div className="absolute inset-0 z-0">
                              <div className="project-hero__fade absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                              <div className="project-hero__veil absolute inset-0 bg-black/40 z-10" />
                              <motion.img 
                                src={project.media[0]} 
                                alt={project.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8 }}
                              />
                            </div>
                          )}

                          {project.tag && (
                            <div className="absolute top-0 right-0 z-20 bg-[var(--color-ds-primary)] text-black font-bold text-[9px] px-3 py-1 font-mono uppercase tracking-widest">{project.tag}</div>
                          )}
                          
                          {/* CONTENT */}
                          <div className={`relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full ${isHero ? 'p-8 md:p-16 h-full justify-center md:justify-start' : (project.tag ? 'mt-2' : '')}`}>
                            
                            <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
                              
                              {/* THUMBNAIL PARA NO-HEROS */}
                              {!isHero && (
                                <div className="hidden md:flex w-24 h-24 shrink-0 bg-[var(--color-ds-surface)] border border-[var(--color-ds-border)] items-center justify-center overflow-hidden">
                                  {project.media && project.media.length > 0 ? (
                                    <img src={project.media[0]} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                  ) : (
                                    <Code2 className="text-[var(--color-ds-muted)] opacity-50" size={24} />
                                  )}
                                </div>
                              )}

                              <span className={`font-mono font-bold ${isHero ? 'text-4xl text-[var(--color-ds-primary)] mb-4 md:mb-0' : 'text-xl text-[var(--color-ds-primary)]'}`}>
                                {project.id}
                              </span>
                              
                              <div>
                                <h4 className={`${isHero ? 'text-4xl md:text-6xl text-white' : 'text-2xl text-[var(--color-ds-text)]'} font-black uppercase tracking-tight group-hover:text-[var(--color-ds-primary)] transition-colors`}>
                                  {project.title}
                                </h4>
                                <p className={`font-mono text-[10px] uppercase tracking-widest mt-2 ${isHero ? 'text-gray-400' : 'text-[var(--color-ds-muted)]'}`}>
                                  {project.subtitle}
                                </p>
                                
                                {!isHero && (
                                  <p className="lg:hidden font-mono text-xs text-[var(--color-ds-muted)] mt-3 leading-relaxed">
                                    {project.desc}
                                  </p>
                                )}

                                {isHero && (
                                  <div className="font-mono text-sm text-gray-300 max-w-lg mt-6 border-l-2 border-[var(--color-ds-primary)] pl-4">
                                    {project.desc}
                                  </div>
                                )}
                              </div>
                            </div>

                            {!isHero && (
                              <div className="font-mono text-xs text-[var(--color-ds-text)] max-w-sm hidden lg:block">
                                {project.desc}
                              </div>
                            )}

                            <div className={`shrink-0 ${isHero ? 'mt-8 md:mt-0 md:absolute md:bottom-16 md:right-16' : ''}`}>
                              <ArrowRight className={`transition-colors ${isHero ? 'text-[var(--color-ds-primary)] w-12 h-12' : 'text-[var(--color-ds-border)] group-hover:text-[var(--color-ds-primary)]'}`} />
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SOBRE MÍ ─── */}
      <section id="sobre-mi" className="bg-[var(--color-ds-bg)] border-b border-[var(--color-ds-border)] overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 md:gap-20 items-start">

          {/* Retrato */}
          <PortraitReveal />

          {/* Historia */}
          <div>
            <p className="font-mono text-xs text-[var(--color-ds-primary)] tracking-widest uppercase mb-4">{T.about.kicker}</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--color-ds-text)] leading-tight mb-3">
              Daniel García
            </h2>
            <p className="font-mono text-sm md:text-base text-[var(--color-ds-primary)] mb-10">
              {T.about.role}
            </p>

            <div className="space-y-6 text-sm md:text-base text-[var(--color-ds-text)]/85 leading-relaxed max-w-2xl">
              {T.about.paragraphs.map(text => <p key={text}>{text}</p>)}
            </div>

            {/* Ficha */}
            <dl className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6 border-t border-[var(--color-ds-border)] pt-8 font-mono text-xs">
              {T.about.facts.map(fact => (
                <div key={fact.label}>
                  <dt className="text-[var(--color-ds-primary)] uppercase tracking-widest mb-2">{fact.label}</dt>
                  {fact.items.map(item => (
                    <dd key={item} className="text-[var(--color-ds-muted)] leading-relaxed">{item}</dd>
                  ))}
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="https://github.com/DSidCode" target="_blank" rel="noopener noreferrer" onClick={() => track('social_click', { network: 'github' })} className="border border-[var(--color-ds-border)] px-5 py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ds-text)] hover:border-[var(--color-ds-primary)] hover:text-[var(--color-ds-primary)] transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/danisidcode/" target="_blank" rel="noopener noreferrer" onClick={() => track('social_click', { network: 'linkedin' })} className="border border-[var(--color-ds-border)] px-5 py-3 font-mono text-xs uppercase tracking-widest text-[var(--color-ds-text)] hover:border-[var(--color-ds-primary)] hover:text-[var(--color-ds-primary)] transition-colors">
                LinkedIn
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => track('contact_whatsapp', { location: 'about' })} className="flex items-center gap-2 bg-[var(--color-ds-primary)] text-black px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                <WhatsAppIcon size={14} /> {T.about.talk}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FILOSOFÍA & INGENIERÍA (HW.SPECS) ─── */}
      <section id="atelier" className="bg-[var(--color-ds-bg)] border-b border-[var(--color-ds-border)]">
        <div className="max-w-screen-2xl mx-auto flex flex-col-reverse md:flex-row border-x border-[var(--color-ds-border)]">
          
          {/* Lado Izquierdo: Código Macro */}
          <div className="w-full md:w-1/2 border-r border-[var(--color-ds-border)] p-6 relative">
            <div className="relative w-full h-full min-h-[420px] md:min-h-[560px] border border-[var(--color-ds-border)] bg-[var(--color-ds-bg)] overflow-hidden">
              {/* Red neuronal interactiva: el ciclo de trabajo */}
              <NeuralProtocol />
            </div>
          </div>

          {/* Lado Derecho: Texto de Especificaciones */}
          <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center bg-dot-matrix">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--color-ds-text)] mb-12 uppercase">
              {T.work.title}
            </h2>
            
            <ol className="space-y-6 border-l-2 border-[var(--color-ds-border)] pl-6 list-none m-0">
              {T.work.steps.map(step => (
                <li key={step.n}>
                  <h3 className="text-lg md:text-xl font-bold text-[var(--color-ds-text)] mb-1 flex items-center gap-3">
                    <span className="font-mono text-sm text-[var(--color-ds-primary)]">{step.n}</span>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-ds-muted)] leading-relaxed">{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── MAISON QUINTESSENCE ─── */}
      <section id="maison" className="relative overflow-hidden bg-[var(--color-ds-surface)] border-b border-[var(--color-ds-border)]">
        {/* Halo dorado de fondo */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(212,175,55,0.10),transparent_60%)]" />

        <div className="relative max-w-screen-2xl mx-auto px-6 py-20 md:px-16 md:py-28 text-center border-x border-[var(--color-ds-border)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-[var(--color-ds-primary)]"></div>

          <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-[var(--color-ds-muted)] mt-6 mb-10">
            {T.maison.kicker}
          </p>

          <h2 className="maison-wordmark font-light uppercase leading-tight tracking-[0.18em] md:tracking-[0.3em] text-3xl sm:text-5xl md:text-7xl">
            Maison<br />Quintessence
          </h2>

          <div className="flex items-center justify-center gap-4 my-10" aria-hidden="true">
            <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[var(--color-ds-primary)]" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[var(--color-ds-primary)]" />
            <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[var(--color-ds-primary)]" />
          </div>

          <p className="text-lg md:text-2xl text-[var(--color-ds-text)] max-w-2xl mx-auto leading-relaxed mb-4">
            {T.maison.lead}
          </p>
          <p className="font-mono text-xs md:text-sm text-[var(--color-ds-muted)] max-w-xl mx-auto leading-relaxed mb-16">
            {T.maison.text}
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--color-ds-border)] border border-[var(--color-ds-border)] max-w-5xl mx-auto text-left mb-16">
            {T.maison.services.map(service => (
              <div key={service.n} className="bg-[var(--color-ds-surface)] p-8 md:p-10 transition-colors hover:bg-[var(--color-ds-bg)]">
                <span className="font-mono text-xs text-[var(--color-ds-primary)]">{service.n}</span>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-ds-text)] mt-4 mb-3">{service.title}</h3>
                <p className="font-mono text-xs text-[var(--color-ds-muted)] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://maison-quintessence.netlify.app/" onClick={() => track('maison_click')} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-ds-primary)] text-black px-10 py-4 text-xs font-bold tracking-[0.25em] transition-colors hover:bg-white">
              {T.maison.cta}
            </a>
            <a href={WHATSAPP_URL} onClick={() => track('contact_whatsapp', { location: 'maison' })} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[var(--color-ds-border)] text-[var(--color-ds-text)] px-8 py-4 text-xs font-bold tracking-[0.2em] transition-colors hover:border-[var(--color-ds-primary)] hover:text-[var(--color-ds-primary)]">
              <WhatsAppIcon size={14} /> {T.maison.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[var(--color-ds-bg)]">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center border-x border-[var(--color-ds-border)] p-6">
          <div className="font-black text-xl tracking-tighter text-[var(--color-ds-text)] uppercase">
            DaniSid_
          </div>
          
          <div className="flex gap-4 my-6 md:my-0">
            <a href="https://github.com/DSidCode" target="_blank" rel="noopener noreferrer" className="border border-[var(--color-ds-border)] p-2 text-[var(--color-ds-muted)] hover:text-[var(--color-ds-primary)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.39-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.35-3.5 1.25a11.39 11.39 0 0 0-7 0C6.1 2.75 5 3.1 5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.5 9.5c0 5.6 3.35 6.65 6.5 7a4.8 4.8 0 0 0-1 3.02V22"/><path d="M9 20c-5 1.5-5-2.5-7-3"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/danisidcode/" target="_blank" rel="noopener noreferrer" className="border border-[var(--color-ds-border)] p-2 text-[var(--color-ds-muted)] hover:text-[var(--color-ds-primary)] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={WHATSAPP_URL} onClick={() => track('contact_whatsapp', { location: 'footer' })} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="border border-[var(--color-ds-border)] p-2 text-[var(--color-ds-muted)] hover:text-[var(--color-ds-primary)] transition-colors">
              <WhatsAppIcon size={16} />
            </a>
            <a href="mailto:garciadanielsid@gmail.com" onClick={() => track('contact_email')} className="border border-[var(--color-ds-border)] p-2 text-[var(--color-ds-muted)] hover:text-[var(--color-ds-primary)] transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
          
          <div className="font-mono text-[10px] text-[var(--color-ds-muted)] tracking-widest uppercase">
            {T.footer}
          </div>
        </div>
      </footer>


      <WhatsAppButton />
      <EnglishHint />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;
