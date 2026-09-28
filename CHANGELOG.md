# CHANGELOG - Portafolio de Desarrollo (DaniSid)

Todos los cambios notables en este proyecto (01_Web_Activa_Vite) serán documentados en este archivo.

## [1.2.0] - 2026-09-28

### 🌟 Añadido
- **Proyecto 09 (Aurum-CRM):** Caso de estudio completo (problema / solución / resultado), stack técnico (.NET 10, MediatR, EF Core, React 19, TypeScript, xUnit), 3 capturas 1920×1080 en `public/screenshots/aurum/` y botón "Ver Código en GitHub" apuntando a https://github.com/DSidCode/Aurum-CRM (sin demo en vivo, por decisión).
  - Añadidas las 3 capturas restantes (`aurum_4` nuevo cliente, `aurum_5` Swagger API, `aurum_6` móvil): 6 en total.
- **Proyecto 10 (Quimera-Sniper-Bot):** Caso de estudio completo basado en el README/CHANGELOG del bot y su código (`sniper_scanner.py`, `server.py`), stack técnico y 3 capturas 1920×1080 en `public/screenshots/sniper/` (Radar, Forward Testing, Terminal). Corregida la descripción: el bot consulta la API REST de Binance cada 30 s, no usa WebSockets. Sin botón de GitHub por ahora.
- **Proyecto 11 (Cyberpunk Luxury Cluster):** Caso de estudio y stack redactados a partir del README/CHANGELOG del clúster, sin IPs, nombres de terceros ni datos de casos reales. Imagen pendiente (se generará con IA).
- **Recursos:** Portadas del proyecto CV copiadas a `recursos/portadas_cv/` y diagramas opcionales del clúster en `recursos/cluster_diagramas/` (fuera de `public/`, no se publican).
- **Hero interactivo "Cielo real sobre Madrid" (`HeroCosmos.jsx`):** Canvas que proyecta en tiempo real las 30 constelaciones de ERÊS (`src/data/constellations.json`, RA/Dec) según el tiempo sidéreo local de Madrid. El ratón desplaza la mirada y revela en oro la constelación cercana con su nombre; mariposas doradas de Macondo (adaptadas de ERÊS) orbitan el cursor, se espantan al hacer clic y se transforman en constelación. Se pausa fuera de pantalla y respeta `prefers-reduced-motion`. Sustituye a `hero-abstract.jpg`.
- **Mariposas del hero:** sustituidas por un port fiel de `AlchemicalMacondoButterfly` de ERÊS (vuelo con planeo e inclinación, nervaduras, perlas de luz, cuerpo, ojos y antenas; paleta "Oro Macondo"), más pequeñas. Evitan el cursor con suavidad; de vez en cuando una se vuelve curiosa y lo persigue unos segundos; el clic las espanta; el cursor despierta a las que duermen transformadas en constelación.
- **Versión móvil:**
  - Menú hamburguesa con desplegable animado (antes en móvil no había navegación). Menú unificado en `NAV_LINKS`: Obra, Proceso, Maison Quintessence, Contacto (se retira "Sobre Mí", que apuntaba a `#proposito`, inexistente).
  - Hero: el degradado lateral solo en escritorio; en móvil, velo uniforme para legibilidad. El pie del cielo se acorta en pantallas pequeñas.
  - Cielo: la proyección usa el lado largo de la pantalla, así que en vertical las constelaciones no se encogen.
  - Tarjetas pequeñas muestran la descripción en móvil.
  - Modal: a pantalla completa en móvil, botón de cerrar fijo arriba a la derecha, sin doble scroll y con menos márgenes. Se cierra con Escape (`role="dialog"`).
  - Navegación interna con `goToSection` (App.jsx): desplazamiento suave hecho con `requestAnimationFrame` y compensación de la barra fija. Se elimina `scroll-behavior: smooth` del CSS porque no avanzaba en navegadores móviles (el menú móvil y "Ver la obra" cambiaban la URL pero no desplazaban la página). Respeta `prefers-reduced-motion`.
- **Favicon nuevo en SVG** (`favicon.svg`): "D" marfil con el cursor "_" dorado del logo DaniSid_, nítido a 16 px; respaldos `favicon-32.png` y `apple-touch-icon.png`. Sustituye al `</>` en JPG.
- **Publicación:** esta carpeta pasa a ser el repositorio de `DSidCode/DaniSid.com` (rama `main`, que despliega Netlify). Imágenes sin uso movidas fuera de `public/` (a `recursos/`, que no se publica): `public/` baja de 19 a 14 MB. README actualizado y `.gitignore` nuevo. Se retiran del repo documentos internos antiguos (siguen en el historial de git).
- **Sección "Sobre mí" (`#sobre-mi`)**, entre Obra y Proceso, con enlace en el menú. Retrato en blanco y negro con marco dorado (`daniel-garcia.webp` de 40 KB, con respaldo JPG), historia en primera persona (Diseño Visual en la Universidad de Caldas, Manizales; animación 3D; de la imagen al código en Madrid; clientes desde 2022; obra propia; formación en Madrid y Piscina 42; aprendiendo Kubernetes y cloud) y ficha con base, origen, formación y herramientas. Botones GitHub, LinkedIn y WhatsApp, con evento `social_click`. JSON-LD `Person` ampliado con `image` y `alumniOf` (Universidad de Caldas, 42 Madrid).
- **Google Analytics 4 restaurado (`G-MHT141WKZZ`):** la versión publicada lo tenía, pero esta base de código no. Solo se carga en `danisid.com` (las pruebas en local no cuentan). Eventos nuevos con `src/lib/analytics.js`: `open_project` (id y título), `contact_whatsapp` (flotante, footer o maison), `contact_email` y `maison_click`.
- **Dominio canónico `www.danisid.com`** (danisid.com redirige a www): canonical, Open Graph, Twitter, JSON-LD, `sitemap.xml` y `robots.txt` actualizados.
- **Sección Maison rediseñada:** sin imagen. Nombre "Maison Quintessence" en tipografía fina con brillo dorado lento, frase "Mi estudio de encargos", tres servicios (Digital Boutique, Experiencias interactivas, Presencia para artistas) sin nombres de clientes, y accesos "Solicitar audiencia" y WhatsApp. Se retira `maison.png`.
- **El Protocolo: red neuronal interactiva (`NeuralProtocol.jsx`)** en lugar de `hw3.png` (poliedro con código ilegible generado por IA). Unas 70 neuronas unidas por hilos dorados alrededor de "Diseño + Código"; las 5 fases del ciclo (Escuchar, Diseñar, Construir, Verificar, Publicar) forman un anillo por el que viaja un impulso que las va encendiendo. El ratón ilumina y aparta la red; el clic dispara una cascada de impulsos. Etiquetas ajustadas a los bordes; en móvil van encima o debajo de cada fase. Red con semilla fija, pausa fuera de pantalla y `prefers-reduced-motion`.
- **Maison:** imagen cambiada a `maison.png` (vestíbulo de mármol, sin texto) en lugar de `hw2.png`, que llevaba una placa inventada por IA ("Aurora B2B Engineering Studio"). El botón "Solicitar audiencia" tenía clases vacías y solo aparecía al pasar el ratón: ahora tiene estilo y en móvil hay un acceso siempre visible.
- **WhatsApp (`WhatsApp.jsx`):** botón flotante dorado con mensaje prellenado (etiqueta "Escríbeme por WhatsApp" al pasar el ratón en escritorio) e icono en el pie de página. El pie del cielo del hero se desplaza para no quedar debajo del botón.
- **Proyecto 11 (Cluster):** añadidos los dos diagramas (`public/screenshots/cluster/`): topología de nodos y protocolo forense.
- **Barra de estado (`StatusTicker.jsx`)** en lugar de la marquesina: muestra Estado (disponible), En curso, Estudiando, Último proyecto y la hora real de Madrid. Se edita en `STATUS_ITEMS`. Corregido el hueco vacío al final de cada vuelta: dos grupos idénticos, cada uno de al menos el ancho de pantalla, desplazados -50%. Más lenta (45 s por vuelta), se pausa al pasar el ratón y queda estática con `prefers-reduced-motion`.
- **Mariposas más lentas** (~40%): vuelo, aleteo, persecución, evasión y huida al clic.
- **Identidad y textos:** Hero con "Daniel García · Design Engineer · Artista digital", textos en primera persona sin superlativos y botones "Ver la obra" / "Hablemos". La marquesina muestra el stack real. La cabecera del portafolio dice "11 proyectos".
- **SEO:** título con nombre, meta description, canonical, Open Graph y Twitter Card con `og-image.jpg` (1200×630 generada desde el hero), JSON-LD `Person`, favicons ligeros (`favicon-64.png`, `apple-touch-icon.png`) en lugar del JPG de 488 KB, eliminado Font Awesome (no se usaba) y `sitemap.xml` actualizado.
- **Footer:** enlace de GitHub corregido a `github.com/DSidCode`.
- **Portafolio reordenado:** [01] Obra & Arte Generativo (ERÊS, Quimera, Antología, Cancionero) → [02] Clientes en Producción → [03] Ingeniería & Sistemas. Fichas renumeradas; las tarjetas grandes se marcan con `hero: true` en vez de por id. Corregida la errata "exactitude".
- **Galería en el modal de proyecto:** miniaturas clicables bajo la imagen principal para recorrer todas las capturas de `media` (antes solo se mostraba la primera). Afecta también a 01 y 02.

## [1.1.0] - 2026-09-25

### 🌟 Añadido & Actualizado
- **Reestructuración de Casos de Estudio (Case Studies):**
  - **Proyecto 03 (Asoc. Creando Sueños):** Extracción de contenido en base a su misión real con la comunidad migrante, inclusión de su tech stack (HTML5, Tailwind, Diseño Solidario) y toma de captura de pantalla automatizada desde la web en producción.
  - **Proyecto 04 (Eddy Soundscapes):** Completado de textos explicando la arquitectura inmersiva de su EPK y captura en vivo del sitio, integrando la miniatura en el modal.
  - **Proyecto 05 (Cancionero Pro):** Redacción técnica destacando el Transposer Vocal algorítmico, y su estética Cyberpunk Luxury (tomado de la documentación del proyecto). Captura y enlazado de miniatura.
  - **Proyecto 06 (Quimera Autómata):** Resumen fiel a nivel de ingeniería (algoritmo Conway, OOP, motores Web Audio API de ballenas NOAA, genética neón) basado en los logs y visión creativa del proyecto original. Captura inmersiva del Canvas acoplada.
  - **Proyecto 07 (Antología Poética):** Agregada documentación del *refactor* completo a React, incluyendo detalles de la ofuscación de números de donación contra bots y la implementación de metadatos SEO. Captura en vivo del sitio web adjunta al modal.
  - **Proyecto 08 (ERÊS • Realismo Mágico):** Reescribimos por completo su caso de estudio para reflejar la increíble magnitud de ingeniería detrás (cálculos matemáticos de la IAU para el cielo 360°, Web Audio API para síntesis Bossa Nova y motor enjambre aeroelástico 3D). Título actualizado a su nombre final.

- **Diseño UI / UX:**
  - Inclusión de los proyectos 03 (Asoc. Creando Sueños) y 04 (Eddy Soundscapes) en la categoría y renderizado de formato "Hero" (diseño cinematográfico ancho con imagen de fondo completa), al igual que los proyectos 01 y 02.
  - Restauración y enlazado correcto de la carpeta `public/` para visualización correcta de assets base (como el hero-abstract y las miniaturas de los modales).

### 🗑️ Eliminado
- **Simplificación de la interfaz:** Se purgó del código principal (`App.jsx`, `main.jsx`) el componente interactivo `ThemeSwitcher` a petición de simplificar la UI, dejando una estética robusta por defecto.
