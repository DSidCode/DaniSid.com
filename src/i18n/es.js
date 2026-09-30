/* ════════════════════════════════════════════
   TEXTOS EN ESPAÑOL (danisid.com/)
   La versión inglesa está en en.js, con las mismas claves.
   Los datos que no dependen del idioma (enlaces, capturas, stack)
   siguen en App.jsx.
   ════════════════════════════════════════════ */

export default {
  locale: 'es-ES',

  nav: {
    links: [
      { href: '#portfolio', label: 'Proyectos' },
      { href: '#sobre-mi', label: 'Sobre mí' },
      { href: '#atelier', label: 'Cómo trabajo' },
      { href: '#maison', label: 'Estudio' },
      { href: 'mailto:garciadanielsid@gmail.com', label: 'Contacto' },
    ],
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
  },

  theme: {
    toLight: 'Activar modo claro',
    toDark: 'Activar modo oscuro',
  },

  // Aviso discreto para quien tiene el navegador en inglés (solo en la versión española)
  englishHint: {
    text: 'View this site in English',
    close: 'Close',
  },

  ticker: [
    { label: 'Estado', text: 'Disponible para proyectos y equipos', dot: true },
    { label: 'En curso', text: 'Puliendo Quimera Autómata y la carta celeste de ERÊS' },
    { label: 'Estudiando', text: 'Kubernetes y fundamentos Cloud (AWS · GCP)' },
    { label: 'Último proyecto', text: 'Aurum-CRM · .NET 10 + React 19' },
    { label: 'Madrid', text: null }, // hora local en vivo
  ],

  hero: {
    tag: 'Madrid · Diseño + Código',
    role: 'Design Engineer · Artista digital',
    lines: [
      'Desarrollador de software y diseñador en Madrid.',
      'Construyo productos web completos: la interfaz, el código y la puesta en producción.',
    ],
    ctaProjects: 'VER PROYECTOS',
    ctaTalk: 'HABLEMOS',
    sky: 'Cielo real sobre Madrid',
    skyVisible: 'constelaciones a la vista',
  },

  projects: {
    title: 'Proyectos',
    kicker: '[ Proyectos seleccionados ]',
    count: '11 PROYECTOS',
    categories: { 1: 'Proyectos creativos', 2: 'Clientes', 3: 'Ingeniería' },
    stackTerms: {},
    items: {
    '01': {
      title: 'ERÊS • Realismo Mágico',
      subtitle: 'EXPERIENCIA CULTURAL INTERACTIVA',
      desc: 'Experiencia web sobre la Umbanda y los Erês: realismo mágico, un cielo astronómico real y música generativa.',
      caseStudy: {
        problem: 'Crear una experiencia web que divulgue la Umbanda y la tradición de los Ibejis y los Erês, contada con la estética del realismo mágico de García Márquez, y que funcione con fluidez en el móvil sin librerías 3D pesadas.',
        solution: 'Una web interactiva que reúne un compendio sobre la Umbanda (su historia, los Orixás y sus relatos), un tráiler narrativo en clave de realismo mágico y un planetario hecho a mano en Canvas, que calcula el cielo real de Madrid, Bahía y Manizales con 30 constelaciones. El paisaje sonoro (tambor batá, campanas y bossa nova) se genera en el navegador con Web Audio, y las mariposas amarillas vuelan con un motor de animación propio.',
        result: 'Una experiencia que se recorre como un relato: divulga una tradición cultural, funciona como pieza artística y resuelve con código propio la parte técnica (astronomía, animación y sonido), sin librerías externas.',
      },
    },
    '02': {
      title: 'Quimera Autómata',
      subtitle: 'VIDA ARTIFICIAL Y SONIDO GENERATIVO',
      desc: 'Simulación de vida artificial con sonido generativo.',
      caseStudy: {
        problem: 'Partir del Juego de la Vida de Conway, un autómata celular clásico en blanco y negro, y convertirlo en algo vivo: con color, con sonido y sin quedarse atascado en patrones que se repiten.',
        solution: 'Un simulador en Canvas con cinco motores. Cada célula hereda el color de sus padres; un sistema detecta cuándo el tablero se estanca y provoca eventos (meteoritos, oleadas de planeadores, extinciones); y el sonido se genera en tiempo real con Web Audio a partir de la población, con síntesis propia y grabaciones de ballenas y orcas de la NOAA.',
        result: 'Una pieza generativa audiovisual que no se repite: se puede observar, intervenir con el ratón y escuchar. Funciona a pantalla completa y se adapta a la resolución de cada pantalla.',
      },
    },
    '03': {
      title: 'Antología Poética',
      subtitle: 'LIBRO DE POESÍA DIGITAL',
      desc: 'Libro de poesía digital, rehecho en React.',
      caseStudy: {
        problem: 'La primera versión, hecha en JavaScript sin framework, perdía el estado al pasar de un poema a otro y se descolocaba en pantallas pequeñas, justo lo contrario de lo que pide una lectura tranquila.',
        solution: 'La rehice en React con Vite, separada en componentes (libro, página, índice). En escritorio cada poema se lee como una hoja; en móvil, con scroll natural. Añadí navegación con teclado, ilustraciones dentro de los poemas, donaciones con códigos QR (con los números protegidos frente a bots) y metadatos para compartir en redes.',
        result: 'Una lectura digital estable y cómoda en cualquier pantalla, fácil de ampliar con nuevos poemas e ilustraciones.',
      },
    },
    '04': {
      title: 'Cancionero Pro',
      subtitle: 'APP DE ACORDES PARA MÚSICOS',
      desc: 'App de acordes que cambia el tono de las canciones en tiempo real.',
      caseStudy: {
        problem: 'Cuando una canción no está en tu tono, hay que transportar los acordes de cabeza. Y las webs de acordes habituales están llenas de publicidad y no muestran cómo se toca cada acorde.',
        solution: 'Una aplicación web en React que sube o baja el tono de cualquier canción (hasta ±5 semitonos) y actualiza al momento la letra y los acordes. Incluye un diapasón que muestra cómo tocar cada acorde, desplazamiento automático para tocar sin manos y ajuste del tamaño del texto.',
        result: 'Una herramienta pensada para ensayar y tocar en directo, con el móvil o la tablet en el atril.',
      },
    },
    '05': {
      title: 'El Rincón de Tetuán',
      subtitle: 'CARTA DIGITAL PARA RESTAURANTE',
      desc: 'Carta digital del restaurante, pensada para leerse en el móvil.',
      caseStudy: {
        problem: 'El restaurante no tenía presencia digital ni forma de comunicar su carta a un público mixto (español y brasileño). No existía una versión digital de la carta para consultar desde el móvil sin necesidad de tocar la carta física, ni material visual que mostrara sus platos de forma atractiva.',
        solution: 'Diseñé y desarrollé una carta digital adaptada al móvil, con fotografías de los platos optimizadas para cargar rápido y precios claros.',
        result: 'Los clientes consultan la carta desde su móvil, en la mesa o antes de pedir a domicilio, y los platos se presentan de forma apetecible.',
      },
    },
    '06': {
      title: 'Marian Isac',
      subtitle: 'WEB DE AUTOR',
      desc: 'Web de autor con el catálogo de sus libros y venta directa.',
      caseStudy: {
        problem: 'Marian Isac es autor publicado (Editorial Círculo Rojo, 6 libros) sin una presencia digital que reflejara su marca ni facilitara la venta directa de sus obras a lectores.',
        solution: 'Una web de autor con estética oscura y elegante: el catálogo de sus 6 libros, una galería de fotos y vídeos de presentaciones y un botón de compra por WhatsApp en cada título, sin depender solo de las distribuidoras.',
        result: 'Web en producción con dominio propio y analítica, y un canal directo con los lectores para comprar libros y contratar presentaciones.',
      },
    },
    '07': {
      title: 'Asoc. Creando Sueños',
      subtitle: 'WEB PARA UNA ASOCIACIÓN',
      desc: 'Web de una asociación sin ánimo de lucro de apoyo a migrantes: servicios, voluntariado y donaciones.',
      caseStudy: {
        problem: 'La Asociación Creando Sueños, enfocada en apoyar a migrantes en España, necesitaba presencia digital profesional para centralizar sus servicios de extranjería, deporte (Equipo La Banda) y brigadas solidarias, además de captar voluntarios y donaciones.',
        solution: 'Una web de una sola página, clara, rápida y accesible, con la identidad de la asociación (azul marino y dorado), contacto directo por WhatsApp y formularios para voluntarios y colaboradores.',
        result: 'La asociación tiene una presencia profesional en internet: quien necesita asesoría contacta en un clic y los colaboradores se apuntan desde la propia web.',
      },
    },
    '08': {
      title: 'Eddy Soundscapes',
      subtitle: 'DOSSIER DE PRENSA MUSICAL (EPK)',
      desc: 'Dossier de prensa (EPK) de un músico, con contacto para contrataciones.',
      caseStudy: {
        problem: 'Eddy Castaño (cantautor y guitarrista) necesitaba un Electronic Press Kit (EPK) moderno y altamente visual para presentar sus sesiones acústicas a promotores y salas de conciertos, sin que el contenido multimedia ralentizara la carga.',
        solution: 'Diseñé una web oscura centrada en la fotografía y en tipografías con carácter (Playfair Display y Outfit), con reproductores de música integrados y una galería, cuidando que el contenido multimedia no ralentice la carga.',
        result: 'Una carta de presentación rápida y cuidada para promotores y salas, con contacto directo para contrataciones.',
      },
    },
    '09': {
      title: 'Aurum-CRM',
      subtitle: 'SISTEMA EMPRESARIAL (.NET 10 + REACT TS)',
      desc: 'CRM completo en .NET y React, con arquitectura limpia y CQRS.',
      tag: 'Proyecto personal',
      caseStudy: {
        problem: 'En muchos sistemas de gestión comercial la lógica de negocio acaba repartida entre controladores y consultas a base de datos: cambiar la persistencia rompe media aplicación, las reglas (qué puede pasarle a una venta y cuándo) no están en ningún sitio concreto y probarlas exige levantar todo el sistema.',
        solution: 'Diseñé un CRM full-stack con Clean Architecture en cuatro capas (Dominio, Aplicación, Infraestructura y API) y el patrón CQRS con MediatR, separando los Commands de escritura de las Queries de lectura. Las entidades del dominio protegen sus propias reglas (una oportunidad no retrocede ni cambia tras cerrarse) y la API devuelve errores estándar RFC 7807. El frontend en React 19 usa useOptimistic para mover oportunidades por el pipeline sin esperar al servidor e incluye un Auditor CQRS en vivo que muestra cada Command y Query que atraviesa la arquitectura.',
        result: 'Una base de código desacoplada y verificable: 22 tests automatizados cubren las reglas de negocio y los casos de uso sin necesidad de base de datos, y el auditor visual permite explicar la arquitectura en funcionamiento en lugar de solo describirla. Código completo disponible en GitHub.',
      },
    },
    '10': {
      title: 'Quimera-Sniper-Bot',
      subtitle: 'ALGORITMIA FINANCIERA (PYTHON)',
      desc: 'Escáner de criptomonedas con indicadores técnicos y simulador de operaciones.',
      caseStudy: {
        problem: 'Vigilar a mano 16 criptomonedas en varias temporalidades a la vez es inviable: las buenas entradas aparecen de madrugada o durante las aperturas de Asia y Wall Street, y los cruces de medias móviles aislados generan muchísimas señales falsas en mercados laterales.',
        solution: 'Desarrollé un escáner en Python que consulta la API pública de Binance (vía CCXT) cada 30 segundos y analiza 16 pares en 15m, 30m y 1h. Los indicadores están calculados a mano con Pandas: cruce de EMAs 9/21, RSI de Wilder (14), SMA de volumen, MACD (12, 26, 9) y detección de "squeeze" con Bandas de Bollinger. Solo se lanza una alerta nativa del sistema cuando todos los filtros coinciden. Cada señal abre una operación simulada con Stop Loss y Take Profit propios de su temporalidad, y una terminal web (Radar + Terminal, JavaScript vanilla sobre un servidor Flask) muestra el estado en tiempo real.',
        result: 'Un laboratorio cuantitativo con validación honesta: el forward testing destapó un 10% de acierto inicial (30 señales). Diagnostiqué la causa (un filtro de volumen que entraba en el techo del movimiento y Stops demasiado ajustados para la volatilidad cripto), rediseñé los márgenes con ratio 2:1 y el acierto acumulado subió al 39% sobre 210 señales. Es un proyecto de investigación, no un sistema de inversión automático.',
      },
    },
    '11': {
      title: 'Cyberpunk Luxury Cluster',
      subtitle: 'INFRAESTRUCTURA HOMELAB',
      desc: 'Homelab Linux de 3 equipos para tareas automáticas y análisis forense.',
      caseStudy: {
        problem: 'Necesitaba un entorno propio para ejecutar tareas pesadas sin bloquear mi equipo de desarrollo (indexación, recuperación de datos, copias espejo) y para practicar análisis forense digital sin arriesgarme a alterar las pruebas. Mientras tanto, varios portátiles antiguos estaban parados y un disco de casi 800 GB acumulaba años de datos sin clasificar.',
        solution: 'Reutilicé tres equipos como clúster en red local. AETHER es el nodo maestro (orquestación, desarrollo e IA); ORÁCULO trabaja 24/7 sin pantalla (desactivada por parámetro del kernel) y recibe un espejo del vault por SSH y rsync; NYX es la estación forense. Además forjé el "Grimorio", un disco de 1 TB con tabla GPT y dos particiones: una FAT32 arrancable con Kali Live y una exFAT como bóveda de evidencias. El protocolo sigue la norma ISO/IEC 27037: bloqueo de escritura con blockdev, imagen bit a bit con dd y verificación con hash SHA-256.',
        result: 'Recuperé archivos borrados de un disco propio de 793 GB mapeando sus inodos con The Sleuth Kit, y un script en Python deduplicó lo recuperado por hash MD5: 168 archivos únicos (44 vídeos, 113 imágenes y 11 comprimidos), con análisis de metadatos para fechar su origen. La auditoría identificó unos 635 GB purgables y 72 GB esenciales a preservar. Todo el proceso está documentado y automatizado con scripts de Bash.',
      },
    },
    },
  },

  modal: {
    close: 'Cerrar',
    closeEsc: 'Cerrar (Esc)',
    preview: (title, n, total) => `Vista previa de ${title} (${n}/${total})`,
    shot: n => `Captura ${n}`,
    placeholder: '[ MEDIA PLACEHOLDER ]',
    waiting: title => `Esperando capturas HQ de ${title}`,
    problem: 'El Desafío',
    solution: 'La Solución',
    result: 'El Impacto',
    pending: {
      problem: '[ PENDIENTE DE REDACCIÓN: Descripción del problema de negocio o técnico original que motivó este proyecto. ]',
      solution: '[ PENDIENTE DE REDACCIÓN: Explicación de la arquitectura elegida y cómo se abordó el desafío de manera eficiente. ]',
      result: '[ PENDIENTE DE REDACCIÓN: Métrica, resultado tangible o beneficio final entregado al cliente/sistema. ]',
    },
    stack: 'Stack Principal',
    stackPending: 'Stack Pendiente',
    live: 'Visitar Proyecto en Vivo',
    code: 'Ver Código en GitHub',
  },

  about: {
    kicker: '[ Sobre mí ]',
    role: 'Design Engineer · Madrid',
    paragraphs: [
      'Soy desarrollador de software. Construyo productos web completos, desde la arquitectura del servidor hasta la última interacción de la interfaz.',
      'Trato la ingeniería y la experiencia con el mismo rigor: código limpio, probado y bien desplegado, y también los detalles de movimiento e interacción que hacen que un producto se recuerde. El código es además mi herramienta creativa, y lo que aprendo experimentando lo llevo a cada proyecto.',
      'Vengo del diseño visual en Colombia, me formé como desarrollador en Madrid y sigo aprendiendo cada día; ahora, cloud y Kubernetes.',
    ],
    facts: [
      { label: 'Base', items: ['Madrid, España'] },
      { label: 'Origen', items: ['Manizales, Colombia'] },
      { label: 'Formación', items: ['Diseño Visual · Universidad de Caldas', 'Animación 3D · Unitécnica', 'Piscina 42 Madrid', 'Certificado de Profesionalidad en Desarrollo Web (Madrid)', 'Extensión universitaria · URJC (Madrid)'] },
      { label: 'Herramientas', items: ['React · TypeScript · .NET', 'Canvas · Web Audio API', 'Linux · Docker · CI/CD'] },
    ],
    talk: 'Hablemos',
    portraitAlt: 'Retrato de Daniel García',
    portraitCaption: 'Daniel García · Madrid',
  },

  work: {
    title: 'CÓMO TRABAJO',
    steps: [
      { n: '01', title: 'Escuchar', desc: 'Entiendo qué necesita el proyecto y qué tiene que conseguir quien lo va a usar.' },
      { n: '02', title: 'Diseñar', desc: 'Defino la experiencia y la interfaz, y las pruebo con un prototipo antes de construir.' },
      { n: '03', title: 'Construir', desc: 'Desarrollo el producto completo, del frontend al servidor, con código limpio.' },
      { n: '04', title: 'Verificar', desc: 'Tests, rendimiento y accesibilidad, para que funcione bien en cualquier dispositivo.' },
      { n: '05', title: 'Publicar', desc: 'Lo pongo en producción con despliegue automático, mido cómo se usa y lo sigo mejorando.' },
    ],
    // Red neuronal (NeuralProtocol.jsx)
    phases: [
      { title: '01 · ESCUCHAR', sub: 'el problema real, no el encargo' },
      { title: '02 · DISEÑAR', sub: 'UI/UX · prototipo interactivo' },
      { title: '03 · CONSTRUIR', sub: 'React · TypeScript · .NET' },
      { title: '04 · VERIFICAR', sub: 'tests · rendimiento · a11y' },
      { title: '05 · PUBLICAR', sub: 'CI/CD · Netlify · Cloudflare' },
    ],
    hub: ['DISEÑO', 'CÓDIGO'],
    loop: '↻ ITERAR HASTA QUE SE SIENTA BIEN',
    aria: 'Ciclo de trabajo: escuchar, diseñar, construir, verificar y publicar, alrededor de diseño y código',
  },

  maison: {
    kicker: 'El estudio',
    lead: 'Mi estudio de encargos.',
    text: 'Lo que ves en esta web, hecho para tu marca: diseño y código a medida para quien cuida cada detalle.',
    services: [
      { n: '01', title: 'Webs a medida', desc: 'Webs de marca rápidas, cuidadas al detalle y fáciles de encontrar en Google.' },
      { n: '02', title: 'Experiencias interactivas', desc: 'Piezas generativas con movimiento y sonido para marcas, artistas y eventos.' },
      { n: '03', title: 'Presencia para artistas', desc: 'Portafolios y EPK para músicos y creadores, con contacto y reservas directas.' },
    ],
    cta: 'CONTACTAR CON EL ESTUDIO',
    whatsapp: 'HABLAR POR WHATSAPP',
  },

  footer: '© 2026 Daniel García · Madrid',

  whatsapp: {
    message: 'Hola Daniel, he visto tu web danisid.com y me gustaría hablar contigo.',
    label: 'Escríbeme por WhatsApp',
  },

  // Nombres de constelaciones del hero: en español se usan los del JSON tal cual
  constellations: {},
};
