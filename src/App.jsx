import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import ProjectModal from './components/ProjectModal';
import HeroCosmos from './components/HeroCosmos';
import StatusTicker from './components/StatusTicker';
import NeuralProtocol from './components/NeuralProtocol';
import PortraitReveal from './components/PortraitReveal';
import WhatsAppButton, { WhatsAppIcon, WHATSAPP_URL } from './components/WhatsApp';
import { track } from './lib/analytics';
import { Mail, ArrowRight, Terminal, Shield, Cpu, Code2, Database, Globe, Network, Layers, GitBranch, TerminalSquare, ExternalLink, Server, Zap, Lock, Menu, X } from 'lucide-react';

/* ════════════════════════════════════════════
   APP PRINCIPAL: LUXURY B2B & PORTFOLIO
   ════════════════════════════════════════════ */

const NAV_LINKS = [
  { href: '#portfolio', label: 'Obra' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#atelier', label: 'Proceso' },
  { href: '#maison', label: 'Maison Quintessence' },
  { href: 'mailto:garciadanielsid@gmail.com', label: 'Contacto' },
];

const ABOUT_FACTS = [
  { label: 'Base', items: ['Madrid, España'] },
  { label: 'Origen', items: ['Manizales, Colombia'] },
  { label: 'Formación', items: ['Diseño Visual · Universidad de Caldas', 'Animación 3D · Unitécnica', 'Piscina 42 Madrid', 'Certificado de Profesionalidad en Desarrollo Web (Madrid)', 'Extensión universitaria · URJC (Madrid)'] },
  { label: 'Herramientas', items: ['React · TypeScript · .NET', 'Canvas · Web Audio API', 'Linux · Docker · CI/CD'] },
];

const MAISON_SERVICES = [
  { n: '01', title: 'Digital Boutique', desc: 'Webs de marca a medida: rápidas, cuidadas al detalle y fáciles de encontrar.' },
  { n: '02', title: 'Experiencias interactivas', desc: 'Piezas generativas con movimiento y sonido para marcas, artistas y eventos.' },
  { n: '03', title: 'Presencia para artistas', desc: 'Portafolios y EPK para músicos y creadores, con contacto y reservas directas.' },
];

const PORTFOLIO_PROJECTS = [
  { 
    id: '01', title: 'ERÊS • Realismo Mágico', subtitle: 'PLANETARIO STELLARIUM & WEB AUDIO API', desc: 'Simulador astronómico 360° con cosmovisión alquímica.', url: 'https://umbanda-eres.netlify.app', cat: 1, categoryName: 'Obra & Arte Generativo', hero: true,
    media: ['/screenshots/umbanda/umbanda_1.png'], 
    stack: ['JavaScript (OOP)', 'HTML5 Canvas', 'Web Audio API', 'Stellarium Math'], 
    caseStudy: { 
      problem: 'Construir un ecosistema web inmersivo que fusionara la exactitud científica de un planetario astronómico con el misticismo del realismo mágico (Gabriel García Márquez) y la cosmovisión de la Umbanda, asegurando 60 FPS en dispositivos móviles sin librerías externas pesadas (como Three.js).', 
      solution: 'Se desarrolló un "Motor Planetario 1:1" nativo en Canvas capaz de calcular el Tiempo Sidéreo Local (LST) real de tres coordenadas geográficas (Madrid, Bahía, Manizales). Integra cámara esférica panorámica (180° FOV) con zoom direccional, 30 constelaciones oficiales de la IAU, un sistema de audio polifónico (Bossa Nova, tambores Batá, 432 Hz) y físicas complejas de enjambre aeroelástico 3D para mariposas generativas.', 
      result: 'Un "Multiverso" interactivo espectacular que actúa como simulador astronómico, caja de música generativa y compendio de saberes. Logra fluidez absoluta con Glassmorphism luxury UI y diseño arquitectónico simétrico, consolidándose como una obra maestra de programación Front-end matemática.' 
    }
  },
  { 
    id: '02', title: 'Quimera Autómata', subtitle: 'SIMULADOR CANVAS / WEB AUDIO API', desc: 'El Juego de la Vida de Conway optimizado para alto rendimiento visual.', url: 'https://quimera-automata.netlify.app', cat: 1, categoryName: 'Obra & Arte Generativo', hero: true,
    media: ['/screenshots/quimera/quimera_1.png'], 
    stack: ['JavaScript (Vanilla)', 'HTML5 Canvas', 'Web Audio API', 'OOP Architecture'], 
    caseStudy: { 
      problem: 'Llevar el clásico autómata celular de Conway al siguiente nivel: romper la estática del clásico blanco y negro, evitar el "estancamiento matemático" (cuando las células se quedan atascadas en bucles) y añadir una dimensión bio-acústica hiperrealista.', 
      solution: 'Desarrollé un motor físico y acústico de 5 niveles con arquitectura OOP. Implementé genética de herencia cromática neón, un sistema de "Catástrofes Inactivas" que detecta entropía para inyectar eventos (meteoritos, gliders, extinciones masivas), y síntesis matemática (Web Audio API) que reproduce cantos de ballenas y orcas basados en la masa biológica poblacional en tiempo real.', 
      result: 'Un ecosistema generativo y audiovisual inmersivo en formato God Mode, optimizado para escalar hasta pantallas 4K que simula una biología viva con fluidos gravitacionales, donde las células experimentan mitosis, mutaciones y reproducen acústica marina científica proporcionada por la NOAA.' 
    }
  },
  { 
    id: '03', title: 'Antología Poética', subtitle: 'EXPERIENCIA DE LECTURA DIGITAL (REACT)', desc: 'Migración a React de un libro interactivo con diseño editorial.', url: 'https://antologia.danisid.com', cat: 1, categoryName: 'Obra & Arte Generativo',
    media: ['/screenshots/antologia/antologia_1.png'], 
    stack: ['React', 'Vite', 'CSS3', 'SEO & Open Graph'], 
    caseStudy: { 
      problem: 'La versión original (construida en Vanilla JS puro) sufría de fragilidad en el manejo de estado al navegar por los poemas y conflictos de layout en pantallas pequeñas, rompiendo la inmersión que requiere la lectura literaria.', 
      solution: 'Se ejecutó una migración profesional a React usando Vite, componentizando la arquitectura (Book, Page, Index). Se integró un layout responsivo que simula una hoja A4 en escritorio y un scroll natural en móvil. Además, se ofuscaron números de donaciones contra bots y se inyectaron metadatos Open Graph para SEO en redes sociales.', 
      result: 'Una experiencia de lectura digital fluida, libre de bugs de renderizado, con soporte completo para navegación por teclado, pasarela de donaciones con códigos QR flotantes e ilustraciones embebidas, creando un ecosistema inmersivo para el lector.' 
    }
  },
  { 
    id: '04', title: 'Cancionero Pro', subtitle: 'SAAS MUSICAL INTERACTIVO (REACT)', desc: 'Transposición de acordes y búsqueda reactiva en tiempo real.', url: 'https://guitarra.danisid.com', cat: 1, categoryName: 'Obra & Arte Generativo',
    media: ['/screenshots/cancionero/cancionero_1.png'], 
    stack: ['React', 'Vite', 'Tailwind CSS', 'Lucide React'], 
    caseStudy: { 
      problem: 'Los músicos y cantantes suelen enfrentarse al problema de tener que transponer acordes mentalmente cuando una canción está fuera de su rango vocal. Además, las plataformas de acordes tradicionales están saturadas de publicidad y no son interactivas (no muestran digitaciones ni permiten autoscroll en tiempo real).', 
      solution: 'Desarrollé una aplicación web (SaaS) con estética Cyberpunk Luxury que incluye un "Transposer Vocal" algorítmico, capaz de subir y bajar la tonalidad de cualquier canción (±5 semitonos) actualizando las letras y el diccionario de acordes en tiempo real. Cuenta con un diapasón interactivo para visualizar la digitación y funciones como Autoscroll Manos Libres y zoom ajustable.', 
      result: 'Una herramienta técnica de alto rendimiento, optimizada para ensayos en vivo y uso en atriles, que fusiona código algorítmico musical avanzado con un diseño inmersivo y sin fricción.' 
    }
  },
  { 
    id: '05', title: 'El Rincón de Tetuán', subtitle: 'CARTA DIGITAL Y SAAS HORECA', desc: 'Sistema web ultra-rápido para gestión y pedidos en sala.', url: 'https://elrincontetuan.com', cat: 2, categoryName: 'Clientes en Producción', hero: true,
    media: ['/screenshots/rincon/rincon_1.png', '/screenshots/rincon/rincon_2.png', '/screenshots/rincon/rincon_3.png'], 
    stack: ['HTML5', 'CSS3 (Glassmorphism)', 'JavaScript', 'Netlify', 'Cloudflare'], 
    caseStudy: { 
      problem: 'El restaurante no tenía presencia digital ni forma de comunicar su carta a un público mixto (español y brasileño). No existía una versión digital de la carta para consultar desde el móvil sin necesidad de tocar la carta física, ni material visual que mostrara sus platos de forma atractiva.', 
      solution: 'Diseño y desarrollo de una carta digital web, responsive, con estética luxury cuidada a nivel de diseño, fotografía de los platos en alta resolución pero optimizada para carga rápida en web, y precios claros por plato.', 
      result: 'Una carta accesible desde cualquier móvil sin fricción, que muestra los platos de forma atractiva para generar más ganas de consumir, y permite a quien está lejos consultar el menú antes de pedir a domicilio.' 
    }
  },
  { 
    id: '06', title: 'Marian Isac', subtitle: 'PLATAFORMA DE AUTOR (CYBERPUNK NOIR)', desc: 'Despliegue web con diseño arquitectónico elegante e inmersivo.', url: 'https://marianisac.com', cat: 2, categoryName: 'Clientes en Producción', hero: true,
    media: ['/screenshots/marian/marian_1.png', '/screenshots/marian/marian_2.png', '/screenshots/marian/marian_3.png'], 
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Cloudflare', 'Google Analytics'], 
    caseStudy: { 
      problem: 'Marian Isac es autor publicado (Editorial Círculo Rojo, 6 libros) sin una presencia digital que reflejara su marca ni facilitara la venta directa de sus obras a lectores.', 
      solution: 'Diseño y desarrollo de una landing page de autor con estética oscura y elegante, catálogo completo de sus 6 libros, galería multimedia (fotos y vídeos de presentaciones y eventos), y un embudo de venta directo vía WhatsApp para cada título — sin depender solo de distribuidoras externas.', 
      result: 'Web en producción con dominio propio, analítica integrada, y canal de venta directo activo al autor, facilitando tanto la compra de libros como la contratación de presentaciones.' 
    }
  },
  { 
    id: '07', title: 'Asoc. Creando Sueños', subtitle: 'PORTAL INSTITUCIONAL (ONG)', desc: 'Plataforma de impacto social con embudo de donaciones y captación.', url: 'https://asociacioncreandosuenos.com', cat: 2, categoryName: 'Clientes en Producción', hero: true,
    media: ['/screenshots/creando/creando_1.png'], 
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Diseño UX/UI Solidario'], 
    caseStudy: { 
      problem: 'La Asociación Creando Sueños, enfocada en apoyar a migrantes en España, necesitaba presencia digital profesional para centralizar sus servicios de extranjería, deporte (Equipo La Banda) y brigadas solidarias, además de captar voluntarios y donaciones.', 
      solution: 'Desarrollo de un portal institucional moderno, accesible y rápido. Se implementó una arquitectura clara tipo One-Page, diseño con estética corporativa (Navy/Gold), embudos hacia WhatsApp y formularios de colaboración B2B.', 
      result: 'Una web que dignifica la imagen de la ONG, facilita el contacto rápido de asesoría y automatiza la captación de colaboradores, consolidando su presencia oficial en Madrid.' 
    }
  },
  { 
    id: '08', title: 'Eddy Soundscapes', subtitle: 'EPK Y PORTAFOLIO MUSICAL', desc: 'Arquitectura minimalista enfocada en rendimiento multimedia.', url: 'https://eddycamusic.netlify.app', cat: 2, categoryName: 'Clientes en Producción', hero: true,
    media: ['/screenshots/eddy/eddy_1.png'], 
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'], 
    caseStudy: { 
      problem: 'Eddy Castaño (cantautor y guitarrista) necesitaba un Electronic Press Kit (EPK) moderno y altamente visual para presentar sus sesiones acústicas a promotores y salas de conciertos, sin que el contenido multimedia ralentizara la carga.', 
      solution: 'Se diseñó una interfaz inmersiva y de estilo "dark mode" centrada en la fotografía artística y tipografías expresivas (Playfair Display & Outfit). El portafolio incluye integración de reproductores sin fricción y una galería dinámica.', 
      result: 'Una plataforma rápida, elegante y minimalista que proyecta la sensibilidad del artista, optimizando su carta de presentación para contratación en la industria musical.' 
    }
  },
  { 
    id: '09', title: 'Aurum-CRM', subtitle: 'SISTEMA EMPRESARIAL (.NET 10 + REACT TS)', desc: 'Arquitectura limpia y escalable implementando el patrón CQRS.', url: '', github: 'https://github.com/DSidCode/Aurum-CRM', tag: 'Proyecto Personal / Showcase Técnico', cat: 3, categoryName: 'Ingeniería & Sistemas',
    media: ['/screenshots/aurum/aurum_1.png', '/screenshots/aurum/aurum_2.png', '/screenshots/aurum/aurum_3.png', '/screenshots/aurum/aurum_4.png', '/screenshots/aurum/aurum_5.png', '/screenshots/aurum/aurum_6.png'],
    stack: ['.NET 10', 'C#', 'MediatR (CQRS)', 'EF Core', 'React 19', 'TypeScript', 'Tailwind CSS', 'xUnit'],
    caseStudy: {
      problem: 'En muchos sistemas de gestión comercial la lógica de negocio acaba repartida entre controladores y consultas a base de datos: cambiar la persistencia rompe media aplicación, las reglas (qué puede pasarle a una venta y cuándo) no están en ningún sitio concreto y probarlas exige levantar todo el sistema.',
      solution: 'Diseñé un CRM full-stack con Clean Architecture en cuatro capas (Dominio, Aplicación, Infraestructura y API) y el patrón CQRS con MediatR, separando los Commands de escritura de las Queries de lectura. Las entidades del dominio protegen sus propias reglas (una oportunidad no retrocede ni cambia tras cerrarse) y la API devuelve errores estándar RFC 7807. El frontend en React 19 usa useOptimistic para mover oportunidades por el pipeline sin esperar al servidor e incluye un Auditor CQRS en vivo que muestra cada Command y Query que atraviesa la arquitectura.',
      result: 'Una base de código desacoplada y verificable: 22 tests automatizados cubren las reglas de negocio y los casos de uso sin necesidad de base de datos, y el auditor visual permite explicar la arquitectura en funcionamiento en lugar de solo describirla. Código completo disponible en GitHub.'
    }
  },
  { 
    id: '10', title: 'Quimera-Sniper-Bot', subtitle: 'ALGORITMIA FINANCIERA (PYTHON)', desc: 'Escáner cuantitativo multi-temporalidad con forward testing y terminal local.', url: '', cat: 3, categoryName: 'Ingeniería & Sistemas',
    media: ['/screenshots/sniper/sniper_1.png', '/screenshots/sniper/sniper_2.png', '/screenshots/sniper/sniper_3.png'],
    stack: ['Python', 'Pandas', 'CCXT (Binance API)', 'Flask', 'JavaScript (Vanilla)', 'HTML5 / CSS3', 'Linux notify-send'],
    caseStudy: {
      problem: 'Vigilar a mano 16 criptomonedas en varias temporalidades a la vez es inviable: las buenas entradas aparecen de madrugada o durante las aperturas de Asia y Wall Street, y los cruces de medias móviles aislados generan muchísimas señales falsas en mercados laterales.',
      solution: 'Desarrollé un escáner en Python que consulta la API pública de Binance (vía CCXT) cada 30 segundos y analiza 16 pares en 15m, 30m y 1h. Los indicadores están calculados a mano con Pandas: cruce de EMAs 9/21, RSI de Wilder (14), SMA de volumen, MACD (12, 26, 9) y detección de "squeeze" con Bandas de Bollinger. Solo se lanza una alerta nativa del sistema cuando todos los filtros coinciden. Cada señal abre una operación simulada con Stop Loss y Take Profit propios de su temporalidad, y una terminal web (Radar + Terminal, JavaScript vanilla sobre un servidor Flask) muestra el estado en tiempo real.',
      result: 'Un laboratorio cuantitativo con validación honesta: el forward testing destapó un 10% de acierto inicial (30 señales). Diagnostiqué la causa (un filtro de volumen que entraba en el techo del movimiento y Stops demasiado ajustados para la volatilidad cripto), rediseñé los márgenes con ratio 2:1 y el acierto acumulado subió al 39% sobre 210 señales. Es un proyecto de investigación, no un sistema de inversión automático.'
    }
  },
  { 
    id: '11', title: 'Cyberpunk Luxury Cluster', subtitle: 'INFRAESTRUCTURA HOMELAB', desc: 'Clúster Linux de 3 nodos para cómputo desatendido y análisis forense.', url: '', cat: 3, categoryName: 'Ingeniería & Sistemas',
    media: ['/screenshots/cluster/cluster_1.png', '/screenshots/cluster/cluster_2.png'],
    stack: ['Linux (Nobara · Mint · Kali)', 'Bash', 'Python', 'SSH / rsync', 'The Sleuth Kit', 'dd + SHA-256', 'GPT / parted'],
    caseStudy: {
      problem: 'Necesitaba un entorno propio para ejecutar tareas pesadas sin bloquear mi equipo de desarrollo (indexación, recuperación de datos, copias espejo) y para practicar análisis forense digital sin arriesgarme a alterar las pruebas. Mientras tanto, varios portátiles antiguos estaban parados y un disco de casi 800 GB acumulaba años de datos sin clasificar.',
      solution: 'Reutilicé tres equipos como clúster en red local. AETHER es el nodo maestro (orquestación, desarrollo e IA); ORÁCULO trabaja 24/7 sin pantalla (desactivada por parámetro del kernel) y recibe un espejo del vault por SSH y rsync; NYX es la estación forense. Además forjé el "Grimorio", un disco de 1 TB con tabla GPT y dos particiones: una FAT32 arrancable con Kali Live y una exFAT como bóveda de evidencias. El protocolo sigue la norma ISO/IEC 27037: bloqueo de escritura con blockdev, imagen bit a bit con dd y verificación con hash SHA-256.',
      result: 'Recuperé archivos borrados de un disco propio de 793 GB mapeando sus inodos con The Sleuth Kit, y un script en Python deduplicó lo recuperado por hash MD5: 168 archivos únicos (44 vídeos, 113 imágenes y 11 comprimidos), con análisis de metadatos para fechar su origen. La auditoría identificó unos 635 GB purgables y 72 GB esenciales a preservar. Todo el proceso está documentado y automatizado con scripts de Bash.'
    }
  }

];

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
          <div className="hidden md:flex font-mono text-[10px] lg:text-xs text-[var(--color-ds-muted)] uppercase tracking-widest items-center">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => goToSection(e, link.href)}
                className={`hover:text-[var(--color-ds-text)] transition-colors h-16 flex items-center ${i < NAV_LINKS.length - 1 ? 'px-4 lg:px-6 border-r border-[var(--color-ds-border)]' : 'pl-4 lg:pl-6 hover:text-[var(--color-ds-primary)]'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Botón de menú (móvil) */}
          <button
            onClick={() => setMenuOpen(open => !open)}
            className="md:hidden -mr-2 p-2 text-[var(--color-ds-text)]"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => goToSection(e, link.href)}
                  className="block px-6 py-4 font-mono text-sm uppercase tracking-widest text-[var(--color-ds-text)] border-b border-[var(--color-ds-border)] active:text-[var(--color-ds-primary)]"
                >
                  {link.label}
                </a>
              ))}
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
        <div className="w-full md:w-1/2 p-6 lg:p-16 flex flex-col justify-center min-w-0 md:bg-gradient-to-r md:from-[var(--color-ds-bg)] md:via-[var(--color-ds-bg)]/60 md:to-transparent [&_a]:pointer-events-auto [text-shadow:0_1px_14px_rgba(10,10,10,0.95)] md:[text-shadow:none]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-block border border-[var(--color-ds-border)] px-3 py-1 text-[9px] font-mono text-[var(--color-ds-muted)] mb-8 tracking-widest uppercase bg-[var(--color-ds-bg)] opacity-70">
              Madrid · Diseño + Código
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-6 text-[var(--color-ds-text)] leading-[0.9] break-words">
              DANIEL<br/>GARCÍA
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-8 text-[var(--color-ds-muted)]">
              Design Engineer · Artista digital
            </h2>

            <p className="text-sm font-mono text-[var(--color-ds-text)] max-w-md leading-relaxed mb-12">
              &gt; Diseño y construyo experiencias digitales donde el arte y la ingeniería son la misma cosa.<br/>
              &gt; Vengo del diseño visual y escribo el código de principio a fin: React y TypeScript en la interfaz, .NET en el servidor.<br/>
              &gt; <span className="text-[var(--color-ds-primary)]">Este cielo es real:</span> son las constelaciones que hay ahora mismo sobre Madrid.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" onClick={(e) => goToSection(e, '#portfolio')} className="bg-[var(--color-ds-primary)] text-black px-8 py-3 text-xs font-bold transition-all hover:bg-[#b5952f]">
                VER LA OBRA
              </a>
              <a href="mailto:garciadanielsid@gmail.com" onClick={() => track('contact_email')} className="border border-[var(--color-ds-primary)] text-[var(--color-ds-primary)] px-8 py-3 text-xs font-bold transition-all hover:bg-[var(--color-ds-primary)] hover:text-black">
                HABLEMOS
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
                Portafolio
              </h2>
              <p className="font-mono text-xs text-[var(--color-ds-muted)] mt-2 uppercase tracking-widest">
                [ Proyectos seleccionados ]
              </p>
            </div>
            <div className="hidden md:block font-mono text-[10px] text-[var(--color-ds-primary)]">
              11 PROYECTOS
            </div>
          </div>

          <div className="space-y-12">
            {[1, 2, 3].map(catId => {
              const categoryProjects = PORTFOLIO_PROJECTS.filter(p => p.cat === catId);
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
                          className={`w-full text-left group block border border-[var(--color-ds-border)] hover:border-[var(--color-ds-primary)] transition-colors relative overflow-hidden flex flex-col md:flex-row ${isHero ? 'min-h-[400px] md:min-h-[500px]' : 'bg-[var(--color-ds-bg)] p-4 md:p-6'}`}
                        >
                          {/* HERO BACKGROUND */}
                          {isHero && project.media && project.media.length > 0 && (
                            <div className="absolute inset-0 z-0">
                              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                              <div className="absolute inset-0 bg-black/40 z-10" />
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
            <p className="font-mono text-xs text-[var(--color-ds-primary)] tracking-widest uppercase mb-4">[ Sobre mí ]</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--color-ds-text)] leading-tight mb-3">
              Daniel García
            </h2>
            <p className="font-mono text-sm md:text-base text-[var(--color-ds-primary)] mb-10">
              Design Engineer · Madrid
            </p>

            <div className="space-y-6 text-sm md:text-base text-[var(--color-ds-text)]/85 leading-relaxed max-w-2xl">
              <p>
                Soy desarrollador de software. Construyo productos web completos, desde la arquitectura del servidor
                hasta la última interacción de la interfaz.
              </p>
              <p>
                Trato la ingeniería y la experiencia con el mismo rigor: código limpio, probado y bien desplegado, y
                también los detalles de movimiento e interacción que hacen que un producto se recuerde. El código es
                además mi herramienta creativa, y lo que aprendo experimentando lo llevo a cada proyecto.
              </p>
              <p>
                Vengo del diseño visual en Colombia, me formé como desarrollador en Madrid y sigo aprendiendo cada día;
                ahora, cloud y Kubernetes.
              </p>
            </div>

            {/* Ficha */}
            <dl className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6 border-t border-[var(--color-ds-border)] pt-8 font-mono text-xs">
              {ABOUT_FACTS.map(fact => (
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
                <WhatsAppIcon size={14} /> Hablemos
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
              EL PROTOCOLO
            </h2>
            
            <div className="space-y-8 border-l-2 border-[var(--color-ds-border)] pl-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--color-ds-text)] mb-2 uppercase flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--color-ds-primary)] inline-block"></span>
                  MOD_01: Arquitectura Sólida
                </h3>
                <p className="font-mono text-[var(--color-ds-muted)] text-xs leading-relaxed">
                  [CLEAN_CODE] El código invisible es el que sostiene el negocio. Diseño estructuras modulares pensadas para la escalabilidad y el rendimiento a largo plazo.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[var(--color-ds-text)] mb-2 uppercase flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--color-ds-primary)] inline-block"></span>
                  MOD_02: Diseño Minimalista
                </h3>
                <p className="font-mono text-[var(--color-ds-muted)] text-xs leading-relaxed">
                  [RENDERED IN REACT] Creación de interfaces limpias y directas. Eliminar el ruido visual para potenciar la usabilidad y la experiencia del usuario.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--color-ds-text)] mb-2 uppercase flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--color-ds-primary)] inline-block"></span>
                  MOD_03: Orquestación Inteligente
                </h3>
                <p className="font-mono text-[var(--color-ds-muted)] text-xs leading-relaxed">
                  [AI_INTEGRATION] Implementación de agentes y LLMs para optimizar procesos y flujos de trabajo, aportando valor real y medible.
                </p>
              </div>
            </div>
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
            El estudio
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
            Mi estudio de encargos.
          </p>
          <p className="font-mono text-xs md:text-sm text-[var(--color-ds-muted)] max-w-xl mx-auto leading-relaxed mb-16">
            Lo que ves en esta web, hecho para tu marca: diseño y código a medida para quien cuida cada detalle.
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-[var(--color-ds-border)] border border-[var(--color-ds-border)] max-w-5xl mx-auto text-left mb-16">
            {MAISON_SERVICES.map(service => (
              <div key={service.n} className="bg-[var(--color-ds-surface)] p-8 md:p-10 transition-colors hover:bg-[var(--color-ds-bg)]">
                <span className="font-mono text-xs text-[var(--color-ds-primary)]">{service.n}</span>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-ds-text)] mt-4 mb-3">{service.title}</h3>
                <p className="font-mono text-xs text-[var(--color-ds-muted)] leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://maison-quintessence.netlify.app/" onClick={() => track('maison_click')} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-ds-primary)] text-black px-10 py-4 text-xs font-bold tracking-[0.25em] transition-colors hover:bg-white">
              SOLICITAR AUDIENCIA
            </a>
            <a href={WHATSAPP_URL} onClick={() => track('contact_whatsapp', { location: 'maison' })} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[var(--color-ds-border)] text-[var(--color-ds-text)] px-8 py-4 text-xs font-bold tracking-[0.2em] transition-colors hover:border-[var(--color-ds-primary)] hover:text-[var(--color-ds-primary)]">
              <WhatsAppIcon size={14} /> HABLAR POR WHATSAPP
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
            SYS.VERSION 2026.1 // END OF FILE
          </div>
        </div>
      </footer>


      <WhatsAppButton />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;
