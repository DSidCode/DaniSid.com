/* ════════════════════════════════════════════
   TEXTOS EN INGLÉS (danisid.com/en/)
   Mismas claves que es.js. Inglés americano (og:locale en_US),
   sin jerga ni superlativos, igual que la versión española.
   Nombres propios sin traducir: ERÊS, Umbanda, Orixás, Macondo,
   Maison Quintessence, Aurum-CRM, Quimera Autómata, Cancionero Pro…
   ════════════════════════════════════════════ */

export default {
  locale: 'en-GB', // formato de hora 24 h, como en la versión española

  nav: {
    links: [
      { href: '#portfolio', label: 'Projects' },
      { href: '#sobre-mi', label: 'About' },
      { href: '#atelier', label: 'How I work' },
      { href: '#maison', label: 'Studio' },
      { href: 'mailto:garciadanielsid@gmail.com', label: 'Contact' },
    ],
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },

  theme: {
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
  },

  englishHint: null, // solo se muestra en la versión española

  ticker: [
    { label: 'Status', text: 'Available for projects and teams', dot: true },
    { label: 'In progress', text: 'Polishing Quimera Autómata and the ERÊS star chart' },
    { label: 'Learning', text: 'Kubernetes and cloud fundamentals (AWS · GCP)' },
    { label: 'Latest project', text: 'Aurum-CRM · .NET 10 + React 19' },
    { label: 'Madrid', text: null }, // hora local en vivo
  ],

  hero: {
    tag: 'Madrid · Design + Code',
    role: 'Design Engineer · Digital Artist',
    lines: [
      'Software developer and designer based in Madrid.',
      'I build complete web products: the interface, the code and the production launch.',
    ],
    ctaProjects: 'VIEW PROJECTS',
    ctaTalk: "LET'S TALK",
    sky: 'Real sky over Madrid',
    skyVisible: 'constellations in view',
  },

  projects: {
    title: 'Projects',
    kicker: '[ Selected projects ]',
    count: '11 PROJECTS',
    categories: { 1: 'Creative projects', 2: 'Clients', 3: 'Engineering' },
    stackTerms: { 'Astronomía (tiempo sidéreo)': 'Astronomy (sidereal time)' },
    items: {
      '01': {
        title: 'ERÊS • Magical Realism',
        subtitle: 'INTERACTIVE CULTURAL EXPERIENCE',
        desc: 'A web experience about Umbanda and the Erês: magical realism, a real astronomical sky and generative music.',
        caseStudy: {
          problem: 'Create a web experience that shares Umbanda and the tradition of the Ibejis and the Erês, told through the magical realism of García Márquez, and that runs smoothly on mobile without heavy 3D libraries.',
          solution: 'An interactive website that brings together a guide to Umbanda (its history, the Orixás and their stories), a narrative trailer in a magical-realist style and a hand-built Canvas planetarium that calculates the real sky over Madrid, Bahia and Manizales with 30 constellations. The soundscape (batá drum, bells and bossa nova) is generated in the browser with Web Audio, and the yellow butterflies fly on a custom animation engine.',
          result: 'An experience you move through like a story: it shares a cultural tradition, works as an art piece and solves the technical side (astronomy, animation and sound) with its own code, without external libraries.',
        },
      },
      '02': {
        title: 'Quimera Autómata',
        subtitle: 'ARTIFICIAL LIFE AND GENERATIVE SOUND',
        desc: 'An artificial life simulation with generative sound.',
        caseStudy: {
          problem: 'Take Conway\'s Game of Life, a classic black-and-white cellular automaton, and turn it into something alive: with color, with sound, and without getting stuck in repeating patterns.',
          solution: 'A Canvas simulator with five engines. Each cell inherits its color from its parents; a system detects when the board stalls and triggers events (meteors, waves of gliders, extinctions); and the sound is generated in real time with Web Audio from the population, using custom synthesis and NOAA recordings of whales and orcas.',
          result: 'A generative audiovisual piece that never repeats itself: you can watch it, interact with it using the mouse and listen to it. It runs full screen and adapts to the resolution of each display.',
        },
      },
      '03': {
        title: 'Antología Poética',
        subtitle: 'DIGITAL POETRY BOOK',
        desc: 'A digital poetry book, rebuilt in React.',
        caseStudy: {
          problem: 'The first version, written in plain JavaScript with no framework, lost its state when moving from one poem to the next and broke on small screens: the opposite of what quiet reading needs.',
          solution: 'I rebuilt it in React with Vite, split into components (book, page, index). On desktop each poem reads like a page; on mobile, with natural scrolling. I added keyboard navigation, illustrations inside the poems, donations through QR codes (with the numbers protected from bots) and metadata for sharing on social media.',
          result: 'A stable, comfortable reading experience on any screen, easy to extend with new poems and illustrations.',
        },
      },
      '04': {
        title: 'Cancionero Pro',
        subtitle: 'CHORD APP FOR MUSICIANS',
        desc: 'A chord app that changes the key of a song in real time.',
        caseStudy: {
          problem: 'When a song is not in your key, you have to transpose the chords in your head. And the usual chord websites are full of ads and do not show how to play each chord.',
          solution: 'A React web app that raises or lowers the key of any song (up to ±5 semitones) and instantly updates the lyrics and chords. It includes a fretboard that shows how to play each chord, auto-scroll for hands-free playing and adjustable text size.',
          result: 'A tool built for rehearsing and playing live, with your phone or tablet on the music stand.',
        },
      },
      '05': {
        title: 'El Rincón de Tetuán',
        subtitle: 'DIGITAL MENU FOR A RESTAURANT',
        desc: 'The restaurant\'s digital menu, designed to be read on a phone.',
        caseStudy: {
          problem: 'The restaurant had no online presence and no way to share its menu with a mixed audience (Spanish and Brazilian). There was no digital version of the menu to check on a phone without touching the printed one, and no visual material to show its dishes in an appealing way.',
          solution: 'I designed and built a mobile-friendly digital menu, with photos of the dishes optimized to load quickly and clear prices.',
          result: 'Customers check the menu on their phones, at the table or before ordering delivery, and the dishes are presented in an appetizing way.',
        },
      },
      '06': {
        title: 'Marian Isac',
        subtitle: 'AUTHOR WEBSITE',
        desc: 'An author website with a book catalog and direct sales.',
        caseStudy: {
          problem: 'Marian Isac is a published author (Editorial Círculo Rojo, 6 books) with no online presence that reflected the author\'s brand or made it easy to sell books directly to readers.',
          solution: 'An author website with a dark, elegant look: a catalog of the 6 books, a gallery of photos and videos from book presentations and a WhatsApp buy button on every title, so sales do not depend only on distributors.',
          result: 'A live website with its own domain and analytics, and a direct channel where readers can buy books and arrange presentations.',
        },
      },
      '07': {
        title: 'Creando Sueños Association',
        subtitle: 'WEBSITE FOR A NON-PROFIT ASSOCIATION',
        desc: 'Website for a non-profit association that supports migrants: services, volunteering and donations.',
        caseStudy: {
          problem: 'The Creando Sueños Association, which supports migrants in Spain, needed a professional online presence to bring together its immigration services, sports (the La Banda team) and solidarity brigades, and to attract volunteers and donations.',
          solution: 'A clear, fast and accessible one-page website with the association\'s identity (navy blue and gold), direct contact through WhatsApp and forms for volunteers and supporters.',
          result: 'The association now has a professional online presence: people who need advice get in touch in one click, and supporters sign up directly on the website.',
        },
      },
      '08': {
        title: 'Eddy Soundscapes',
        subtitle: 'MUSIC PRESS KIT (EPK)',
        desc: 'A musician\'s press kit (EPK), with contact details for bookings.',
        caseStudy: {
          problem: 'Eddy Castaño (singer-songwriter and guitarist) needed a modern, highly visual Electronic Press Kit (EPK) to present acoustic sessions to promoters and concert venues, without the media content slowing down the page.',
          solution: 'I designed a dark website built around photography and typefaces with character (Playfair Display and Outfit), with embedded music players and a gallery, making sure the media content does not slow down loading.',
          result: 'A fast, polished introduction for promoters and venues, with direct contact for bookings.',
        },
      },
      '09': {
        title: 'Aurum-CRM',
        subtitle: 'BUSINESS SYSTEM (.NET 10 + REACT TS)',
        desc: 'A complete CRM in .NET and React, with Clean Architecture and CQRS.',
        tag: 'Personal project',
        caseStudy: {
          problem: 'In many sales management systems, business logic ends up scattered across controllers and database queries: changing the persistence layer breaks half the application, the rules (what can happen to a sale, and when) live nowhere in particular, and testing them means spinning up the whole system.',
          solution: 'I designed a full-stack CRM with Clean Architecture in four layers (Domain, Application, Infrastructure and API) and the CQRS pattern with MediatR, separating write Commands from read Queries. Domain entities protect their own rules (an opportunity cannot move backwards or change once it is closed) and the API returns standard RFC 7807 errors. The React 19 frontend uses useOptimistic to move opportunities through the pipeline without waiting for the server, and includes a live CQRS Auditor that shows every Command and Query as it passes through the architecture.',
          result: 'A decoupled, verifiable codebase: 22 automated tests cover the business rules and use cases without needing a database, and the visual auditor makes it possible to show the architecture working instead of only describing it. Full source code available on GitHub.',
        },
      },
      '10': {
        title: 'Quimera-Sniper-Bot',
        subtitle: 'FINANCIAL ALGORITHMS (PYTHON)',
        desc: 'A cryptocurrency scanner with technical indicators and a trade simulator.',
        caseStudy: {
          problem: 'Watching 16 cryptocurrencies across several timeframes at once by hand is not feasible: good entries appear in the middle of the night or during the Asian and Wall Street opens, and isolated moving-average crossovers produce a large number of false signals in sideways markets.',
          solution: 'I built a Python scanner that queries the public Binance API (through CCXT) every 30 seconds and analyzes 16 pairs on the 15m, 30m and 1h timeframes. The indicators are calculated by hand with Pandas: EMA 9/21 crossover, Wilder\'s RSI (14), volume SMA, MACD (12, 26, 9) and Bollinger Band "squeeze" detection. A native system alert fires only when all the filters agree. Each signal opens a simulated trade with a Stop Loss and Take Profit set for its timeframe, and a web terminal (Radar + Terminal, vanilla JavaScript on a Flask server) shows the status in real time.',
          result: 'A quantitative lab with honest validation: forward testing revealed an initial hit rate of 10% (30 signals). I diagnosed the cause (a volume filter that entered at the top of the move and Stops that were too tight for crypto volatility), redesigned the margins with a 2:1 ratio, and the cumulative hit rate rose to 39% over 210 signals. It is a research project, not an automated investment system.',
        },
      },
      '11': {
        title: 'Cyberpunk Luxury Cluster',
        subtitle: 'HOMELAB INFRASTRUCTURE',
        desc: 'A three-machine Linux homelab for automated tasks and digital forensics.',
        caseStudy: {
          problem: 'I needed my own environment to run heavy tasks without tying up my development machine (indexing, data recovery, mirror backups) and to practice digital forensics without risking altering the evidence. Meanwhile, several old laptops were sitting unused and a disk of almost 800 GB had piled up years of unsorted data.',
          solution: 'I repurposed three machines as a cluster on the local network. AETHER is the master node (orchestration, development and AI); ORÁCULO runs 24/7 without a display (disabled through a kernel parameter) and receives a mirror of the vault over SSH and rsync; NYX is the forensic workstation. I also built the "Grimorio" (grimoire), a 1 TB disk with a GPT partition table and two partitions: a bootable FAT32 one with Kali Live and an exFAT one as an evidence vault. The protocol follows the ISO/IEC 27037 standard: write blocking with blockdev, bit-by-bit imaging with dd and verification with SHA-256 hashes.',
          result: 'I recovered deleted files from a 793 GB disk of my own by mapping its inodes with The Sleuth Kit, and a Python script deduplicated the recovered files by MD5 hash: 168 unique files (44 videos, 113 images and 11 archives), with metadata analysis to date their origin. The audit identified about 635 GB that could be purged and 72 GB of essential data to keep. The whole process is documented and automated with Bash scripts.',
        },
      },
    },
  },

  modal: {
    close: 'Close',
    closeEsc: 'Close (Esc)',
    preview: (title, n, total) => `Preview of ${title} (${n}/${total})`,
    shot: n => `Screenshot ${n}`,
    placeholder: '[ MEDIA PLACEHOLDER ]',
    waiting: title => `Waiting for HQ screenshots of ${title}`,
    problem: 'The Challenge',
    solution: 'The Solution',
    result: 'The Impact',
    pending: {
      problem: '[ TO BE WRITTEN: The original business or technical problem that led to this project. ]',
      solution: '[ TO BE WRITTEN: The chosen architecture and how the challenge was approached efficiently. ]',
      result: '[ TO BE WRITTEN: Metric, tangible result or final benefit delivered to the client or system. ]',
    },
    stack: 'Main Stack',
    stackPending: 'Stack pending',
    live: 'Visit live project',
    code: 'View code on GitHub',
  },

  about: {
    kicker: '[ About ]',
    role: 'Design Engineer · Madrid',
    paragraphs: [
      'I\'m a software developer. I build complete web products, from the server architecture to the last interaction in the interface.',
      'I treat engineering and experience with the same rigor: clean, tested, well-deployed code, and also the motion and interaction details that make a product memorable. Code is also my creative tool, and what I learn by experimenting goes into every project.',
      'I come from visual design in Colombia, trained as a developer in Madrid and keep learning every day; right now, cloud and Kubernetes.',
    ],
    facts: [
      { label: 'Based in', items: ['Madrid, Spain'] },
      { label: 'From', items: ['Manizales, Colombia'] },
      { label: 'Education', items: ['Visual Design · Universidad de Caldas', '3D Animation · Unitécnica', '42 Madrid Piscine', 'Professional Certificate in Web Development (Spain)', 'University extension courses · URJC (Madrid)'] },
      { label: 'Tools', items: ['React · TypeScript · .NET', 'Canvas · Web Audio API', 'Linux · Docker · CI/CD'] },
    ],
    talk: 'Let\'s talk',
    portraitAlt: 'Portrait of Daniel García',
    portraitCaption: 'Daniel García · Madrid',
  },

  work: {
    title: 'HOW I WORK',
    steps: [
      { n: '01', title: 'Listen', desc: 'I learn what the project needs and what the people who will use it need to achieve.' },
      { n: '02', title: 'Design', desc: 'I define the experience and the interface, and test them with a prototype before building.' },
      { n: '03', title: 'Build', desc: 'I build the complete product, from frontend to server, with clean code.' },
      { n: '04', title: 'Verify', desc: 'Tests, performance and accessibility, so it works well on any device.' },
      { n: '05', title: 'Ship', desc: 'I put it into production with automated deployment, measure how it is used and keep improving it.' },
    ],
    phases: [
      { title: '01 · LISTEN', sub: 'the real problem, not just the brief' },
      { title: '02 · DESIGN', sub: 'UI/UX · interactive prototype' },
      { title: '03 · BUILD', sub: 'React · TypeScript · .NET' },
      { title: '04 · VERIFY', sub: 'tests · performance · a11y' },
      { title: '05 · SHIP', sub: 'CI/CD · Netlify · Cloudflare' },
    ],
    hub: ['DESIGN', 'CODE'],
    loop: '↻ ITERATE UNTIL IT FEELS RIGHT',
    aria: 'Work cycle: listen, design, build, verify and ship, around design and code',
  },

  maison: {
    kicker: 'The studio',
    lead: 'My studio for client work.',
    text: 'What you see on this website, made for your brand: custom design and code for those who care about every detail.',
    services: [
      { n: '01', title: 'Custom websites', desc: 'Fast brand websites, carefully detailed and easy to find on Google.' },
      { n: '02', title: 'Interactive experiences', desc: 'Generative pieces with motion and sound for brands, artists and events.' },
      { n: '03', title: 'Online presence for artists', desc: 'Portfolios and EPKs for musicians and creators, with direct contact and bookings.' },
    ],
    cta: 'CONTACT THE STUDIO',
    whatsapp: 'CHAT ON WHATSAPP',
  },

  footer: '© 2026 Daniel García · Madrid',

  whatsapp: {
    message: 'Hi Daniel, I saw your website and I\'d like to talk about a project.',
    label: 'Message me on WhatsApp',
  },

  // Nombres de constelaciones del hero (clave: nombre en constellations.json)
  constellations: {
    'TAURO': 'TAURUS',
    'GÉMINIS (IBEJIS)': 'GEMINI (IBEJIS)',
    'CÁNCER': 'CANCER',
    'ESCORPIO': 'SCORPIUS',
    'SAGITARIO (EL CENTAURO)': 'SAGITTARIUS (THE ARCHER)',
    'CAPRICORNIO': 'CAPRICORNUS',
    'ACUARIO': 'AQUARIUS',
    'PISCIS': 'PISCES',
    'ORIÓN': 'ORION',
    'CASSIOPEA': 'CASSIOPEIA',
    'CRUZ DEL SUR': 'SOUTHERN CROSS',
    'OSA MAYOR (EL CARRO)': 'URSA MAJOR (THE BIG DIPPER)',
    'CAN MAYOR (SIRIO)': 'CANIS MAJOR (SIRIUS)',
    'CISNE (CRUZ DEL NORTE)': 'CYGNUS (NORTHERN CROSS)',
    'ÁGUILA (ALTAIR)': 'AQUILA (ALTAIR)',
    'LIRA (VEGA)': 'LYRA (VEGA)',
    'PEGASO (GRAN CUADRADO)': 'PEGASUS (GREAT SQUARE)',
    'CENTAURO': 'CENTAURUS',
    'DRAGÓN': 'DRACO',
    'PEZ AUSTRAL (FOMALHAUT)': 'PISCIS AUSTRINUS (FOMALHAUT)',
    'FÉNIX': 'PHOENIX',
    'OFIUCO': 'OPHIUCHUS',
    'ESCUDO': 'SCUTUM',
  },
};
