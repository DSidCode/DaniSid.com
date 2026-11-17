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
      { href: '#ofertas', label: 'Servicios' },
      { href: '#guias', label: 'Guías' },
      { href: '#portfolio', label: 'Proyectos' },      { href: '#atelier', label: 'Cómo trabajo' },

      { href: '#sobre-mi', label: 'Sobre mí' },
      { href: '#maison', label: 'A medida' },
      { href: '#contacto', label: 'Contacto' },
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
    { label: 'Estado', text: 'Disponible para nuevos proyectos y equipos en remoto', dot: true },
    { label: 'Servicios', text: 'Automatización con IA · Webs a medida · Experiencias interactivas' },
    { label: 'Enfoque', text: 'Interfaces diseñadas y construidas directamente en código' },
    { label: 'Lab', text: 'Sistemas de partículas en Canvas y carta celeste en tiempo real' },
    { label: 'Reciente', text: 'Antología Poética · Aurum-CRM · Quimera Autómata' },
    { label: 'Madrid', text: null }, // hora local en vivo
  ],

  hero: {
    tag: 'Madrid · Diseño + Código',
    role: 'Design Engineer · Artista digital',
    lines: [
      'Automatización con IA y webs a medida, desde Madrid.',
      'Detecto qué tareas te quitan horas, las automatizo y te lo dejo funcionando. Presupuesto antes de empezar.',
    ],
    ctaProjects: 'VER PROYECTOS',
    ctaTalk: 'HABLEMOS',
    sky: 'Cielo real sobre Madrid',
    skyVisible: 'constelaciones a la vista',
  },

  projects: {
    title: 'Mi trabajo',
    kicker: '[ Webs reales, hechas para clientes ]',
    count: '11 PROYECTOS',
    categories: { 1: 'Experimentos creativos', 2: 'Trabajo real · clientes', 3: 'Ingeniería' },
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
      tag: 'En estudio',
      caseStudy: {
        problem: 'En muchos sistemas de gestión comercial la lógica de negocio acaba repartida entre controladores y consultas a base de datos: cambiar la persistencia rompe media aplicación, las reglas (qué puede pasarle a una venta y cuándo) no están en ningún sitio concreto y probarlas exige levantar todo el sistema.',
        solution: 'Diseñé un CRM full-stack con Clean Architecture en cuatro capas (Dominio, Aplicación, Infraestructura y API) y el patrón CQRS con MediatR, separando los Commands de escritura de las Queries de lectura. Las entidades del dominio protegen sus propias reglas (una oportunidad no retrocede ni cambia tras cerrarse) y la API devuelve errores estándar RFC 7807. El frontend en React 19 usa useOptimistic para mover oportunidades por el pipeline sin esperar al servidor e incluye un Auditor CQRS en vivo que muestra cada Command y Query que atraviesa la arquitectura.',
        result: 'Una base de código desacoplada y verificable: 22 tests automatizados cubren las reglas de negocio y los casos de uso sin necesidad de base de datos, y el auditor visual permite explicar la arquitectura en funcionamiento en lugar de solo describirla. Código completo disponible en GitHub.',
      },
    },
    '10': {
      title: 'Quimera-Sniper-Bot',
      subtitle: 'ALGORITMIA FINANCIERA (PYTHON)',
      tag: 'Proyecto personal',
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
      tag: 'Proyecto personal',
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
      'Soy Daniel, diseñador y desarrollador. Hago webs a medida y automatizo tareas repetitivas con IA para músicos, marcas personales y negocios pequeños.',
      'Vengo del diseño visual en Manizales, Colombia, y me formé como desarrollador en Madrid. Eso me permite cuidar cómo se ve tu proyecto y también cómo funciona, sin tener que coordinar a dos personas.',
      'Trabajo contigo de forma directa: me cuentas lo que necesitas, te propongo qué hacer, cuánto cuesta y en cuánto tiempo, y te lo entrego listo para usar.',
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

  ofertas: {
    kicker: 'Qué puedo hacer por ti',
    title: '¿Qué necesitas resolver?',
    lead: 'Automatizaciones para que lo repetitivo se haga solo, y webs que se ven bien y trabajan por ti. Cuéntame tu caso y te respondo con una propuesta clara.',
    pains: [
      { text: 'Repites la misma tarea cada semana', to: 'automatizacion' },
      { text: 'Tu web no se ve bien en el móvil, o no tienes ninguna', to: 'medida' },
      { text: 'Tu música, tu marca o tu proyecto está repartido en cinco sitios', to: 'musicos' },
    ],
    painsTitle: '¿Te suena?',
    delivery: 'Entrega',
    cta: 'Cuéntame tu caso',
    waIntro: 'Hola Daniel, me interesa: ',
    waOutro: '. Mi proyecto es: ',
    items: [
      {
        id: 'automatizacion',
        tag: 'Mi especialidad',
        title: 'Automatización con IA',
        price: 'A tu medida',
        who: 'Pymes, despachos, clínicas y agencias',
        includes: [
          'Detecto qué tareas te quitan más horas cada semana',
          'Automatizo las que merecen la pena: correos, facturas, citas y contactos',
          'Te lo dejo funcionando y te explico cómo usarlo',
          'Propuesta cerrada antes de empezar',
        ],
        featured: true,
      },
      {
        id: 'medida',
        title: 'Web a medida',
        price: 'A tu medida',
        who: 'Marcas, artistas y negocios',
        includes: [
          'Diseño cuidado, pensado para tu proyecto',
          'Rápida, clara y cómoda en el móvil',
          'Propuesta cerrada tras una llamada de 15 min',
        ],
        href: '#portfolio',
        hrefLabel: 'Ver trabajos',
      },
      {
        id: 'musicos',
        tag: 'Para artistas',
        title: 'Web para músicos',
        price: 'Desde 220 €',
        delivery: '48 h',
        who: 'Artistas y bandas',
        includes: [
          'Tu música, tus vídeos y tus directos en una sola pantalla',
          'Spotify, YouTube y contratación directa por WhatsApp',
          'Hosting incluido',
          'Se ve bien en el móvil',
        ],
        href: '/servicios/web-para-musicos/',
        hrefLabel: 'Ver detalles',
      },
    ],
    note: 'Cuéntame tu idea y te respondo con una propuesta clara. Sin compromiso.',
    guides: {
      title: 'Guías gratis para músicos',
      lead: 'Si aún no lo tienes claro, empieza por aquí. Sin tecnicismos.',
      read: 'Leer la guía',
      items: [
        { href: '/recursos/que-es-un-epk/', title: 'Qué es un EPK y cómo hacer uno', text: 'El dossier de prensa que piden las salas y los programadores.' },
        { href: '/recursos/linktree-vs-web-propia-musicos/', title: 'Linktree o web propia: qué te conviene', text: 'Cuándo basta un enlace y cuándo necesitas tu propia web.' },
        { href: '/servicios/web-para-musicos/', title: 'Web para músicos: precio y qué incluye', text: 'Desde 220 €, en 48 horas.' },
      ],
    },
    stepsTitle: 'Así trabajamos',
    steps: [
      { n: '01', title: 'Me cuentas lo que necesitas', text: 'Por WhatsApp o en una llamada breve de 15 minutos.' },
      { n: '02', title: 'Te propongo cómo hacerlo', text: 'Qué recibes, en qué plazo y cuánto cuesta.' },
      { n: '03', title: 'Lo construyo y lo revisas', text: 'Ves el resultado y se ajusta lo que haga falta.' },
      { n: '04', title: 'Lo entrego listo para usar', text: 'Funcionando, y con ayuda si algo no queda claro.' },
    ],
    whoTitle: 'Para quién es',
    whoText: 'Para músicos, creativos, marcas personales y negocios pequeños que quieren verse bien y trabajar menos. Si tu proyecto es más grande, también lo hablamos.',
    bigger: 'Ver proyectos a medida',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      { q: '¿Cuánto cuesta?', a: 'La web para músicos parte de 220 €. Lo demás depende de lo que necesites: te doy una propuesta clara y cerrada.' },
      { q: '¿Y si no sé qué necesito?', a: 'No pasa nada. Cuéntame tu idea o lo que te quita tiempo y te digo qué haría yo.' },
      { q: '¿Puedo ver trabajos tuyos?', a: 'Sí, están más abajo, en la sección de proyectos, con webs de clientes reales.' },
      { q: '¿En qué idioma trabajamos?', a: 'En español o en inglés, como prefieras.' },
    ],
  },

  maison: {
    kicker: 'Servicios de Estudio',
    lead: 'Servicios a medida, explicados claro.',
    text: 'Webs que se ven bien y se entienden, tareas que se hacen solas con IA y experiencias interactivas para músicos, autores y negocios.',
    services: [
      {
        id: 'web',
        n: '01',
        title: 'Tu web a medida',
        desc: 'Una web rápida, que se ve bien en el móvil y que Google puede encontrar. Te la entrego terminada y online.',
        action: 'Solicitar cotización',
      },
      {
        id: 'automation',
        n: '02',
        title: 'Tareas que se hacen solas, con IA',
        desc: 'Tus correos, facturas y contactos se ordenan solos, sin copiar y pegar. Para pymes, despachos y agencias.',
        action: 'Solicitar cotización',
      },
      {
        id: 'editorial',
        n: '03',
        title: 'Tu libro o tu obra, convertida en web',
        desc: 'Llevo obras literarias y libros a una web que se lee, se escucha y se explora (ya hay una web de autor publicada).',
        action: 'Pedir información',
      },
      {
        id: 'music-ed',
        n: '04',
        title: 'Herramientas para dar clases de música',
        desc: 'Un cancionero web y herramientas interactivas con tu marca, para academias y profesores de música.',
        action: 'Pedir información',
      },
      {
        id: 'creative-code',
        n: '05',
        title: 'Animaciones e interacciones a medida',
        desc: 'Efectos visuales, animaciones y sonido que reaccionan al usuario, para campañas y webs que quieren destacar.',
        action: 'Solicitar cotización',
      },
      {
        id: 'epk',
        n: '06',
        title: 'Tu web de músico, lista para que te contraten',
        desc: 'Tu música, tus fotos y tus fechas en una página con reproductor y un contacto directo para programadores y salas.',
        action: 'Pedir información',
        href: '/servicios/web-para-musicos/',
        hrefLabel: 'Ver precio y detalles',
      },
    ],
    cta: 'SOLICITAR COTIZACIÓN DE PROYECTO',
    whatsapp: 'HABLAR POR WHATSAPP',
  },

  contact: {
    kicker: '[ Contacto y Cotizaciones ]',
    title: 'Iniciar Proyecto',
    subtitle: 'Cuéntame qué necesitas. Te respondo con un presupuesto claro, sin compromiso.',
    ui: {
      whatsappBtn: 'Escribir por WhatsApp',
      rgpdPre: 'He leído y acepto la',
      rgpdPost: 'para el tratamiento de mis datos de contacto. *',
      quickTitle: 'Atención Rápida',
      privacyTitle: 'Privacidad y Confidencialidad',
      privacyText: 'Tus datos se transmiten con cifrado HTTPS y se procesan exclusivamente para responder a tu proyecto. Sin spam ni cesiones a terceros.',
      responseLabel: 'Tiempo medio de respuesta:',
      responseValue: '< 24h laborables',
    },
    directCallTitle: '¿Prefieres una llamada rápida de 15 minutos?',
    directCallDesc: 'Elige una fecha y hora o escríbeme directamente por WhatsApp para coordinar una llamada breve y revisar tu proyecto.',
    directCallCta: 'Agendar llamada por WhatsApp',
    fields: {
      name: 'Nombre completo',
      namePlaceholder: 'Tu nombre o el de tu equipo',
      email: 'Correo electrónico',
      emailPlaceholder: 'nombre@empresa.com',
      company: 'Empresa / Proyecto (opcional)',
      companyPlaceholder: 'Nombre de tu negocio o marca',
      service: 'Servicio de interés',
      servicePlaceholder: 'Selecciona un servicio',
      requestType: 'Objetivo de la solicitud',
      message: 'Detalles del proyecto o consulta',
      messagePlaceholder: 'Ej.: Soy músico y quiero una web con mi música y fechas de conciertos...',
      rgpd: 'He leído y acepto la política de privacidad para gestionar mi solicitud.',
      rgpdLink: 'política de privacidad',
      newsletter: 'Deseo recibir información y novedades técnicas sobre desarrollo y automatización con IA.',
    },
    requestTypes: [
      { id: 'quote', label: 'Solicitar cotización / presupuesto' },
      { id: 'info', label: 'Información sobre servicios' },
      { id: 'call', label: 'Agendar llamada de 15 minutos' },
    ],
    servicesList: [
      { id: 'web', label: 'Webs y Plataformas a Medida' },
      { id: 'automation', label: 'Automatización con IA y Software Interno' },
      { id: 'editorial', label: 'Showcase Editorial Inmersivo' },
      { id: 'music-ed', label: 'Aula Interactiva / Plataforma de Formación' },
      { id: 'creative-code', label: 'Creative Coding y Frontend Dinámico' },
      { id: 'epk', label: 'Presencia y EPK para Músicos' },
      { id: 'other', label: 'Otro / Consulta general' },
    ],
    submitBtn: 'Enviar solicitud',
    submittingBtn: 'Enviando solicitud...',
    successTitle: 'Solicitud recibida',
    successText: 'Gracias por ponerte en contacto. Te responderé en menos de 24 horas laborables. Si es urgente, también puedes escribirme directamente por WhatsApp.',
    successAction: 'Enviar otro mensaje',
    errorTitle: 'No se pudo enviar el formulario',
    errorText: 'Ha ocurrido un error inesperado al procesar el envío. Puedes intentar de nuevo o enviarme tu mensaje directamente por WhatsApp.',
    errorWhatsappBtn: 'Enviar mensaje por WhatsApp',
    validation: {
      required: 'Este campo es obligatorio.',
      emailInvalid: 'Por favor, introduce un correo electrónico válido.',
      messageMin: 'El mensaje debe tener al menos 15 caracteres.',
      rgpdRequired: 'Debes aceptar la política de privacidad para continuar.',
    },
  },

  location: {
    kicker: '[ Ubicación ]',
    title: 'Cómo llegar',
    lead: 'Base en Madrid. Oficina: donde esté tu pantalla.',
    text: 'No tengo un local al que venir. Trabajo en remoto desde Madrid para toda España, Colombia y el resto del mundo. Las reuniones son por videollamada o, si estás en Madrid, en una cafetería a medio camino.',
    route: [
      { label: 'Distancia', value: '0 km' },
      { label: 'Tiempo', value: '1 clic' },
      { label: 'Aparcamiento', value: 'No hace falta' },
    ],
    cta: 'Cómo llegar desde donde estás',
    mapLink: 'Ver Madrid en el mapa',
    mapTitle: 'Mapa de Madrid, donde trabaja Daniel García (DaniSid)',
  },

  footer: '© 2026 Daniel García · Madrid',

  whatsapp: {
    message: 'Hola Daniel, vengo de tu web danisid.com. Me gustaría pedirte un presupuesto para: ',
    label: 'Escríbeme por WhatsApp',
  },

  // Nombres de constelaciones del hero: en español se usan los del JSON tal cual
  constellations: {},
};
