# Plan de Trabajo: Fase 2 - Profesionalización y Escalabilidad

Este documento detalla las próximas mejoras y funcionalidades a implementar en `danisid.com` y sus subproyectos, con un enfoque en la especialización, la experiencia de usuario y la escalabilidad técnica.

---

## 0. Gestión de Infraestructura y Servicios

- **Cancelar Suscripción de IONOS**:
    - **Objetivo**: Dar de baja los servicios de hosting con IONOS para optimizar costes, dado que el proyecto ha sido migrado exitosamente a Netlify.
    - **Acción**: Proceder con la cancelación de la suscripción mensual/anual desde el panel de cliente de IONOS.

- **Migrar Subdominio `cyberpunk.danisid.com` a Netlify**:
    - **Objetivo**: Mover el proyecto Cyberpunk del hosting de IONOS a Netlify para unificar la infraestructura y aprovechar las ventajas de CI/CD.
    - **Acciones**:
        1. Desplegar el proyecto Cyberpunk en Netlify como un nuevo sitio (si es un repositorio separado).
        2. En la configuración de DNS de `danisid.com` dentro de Netlify, añadir un registro (probablemente CNAME) para que el subdominio `cyberpunk` apunte al nuevo sitio desplegado.

Este documento detalla las próximas mejoras y funcionalidades a implementar en `danisid.com` y sus subproyectos, con un enfoque en la especialización, la experiencia de usuario y la escalabilidad técnica.

---

## 1. Página Principal (`index.html`) - El Centro de Operaciones

El objetivo es refinar la página de inicio para que refleje claramente la nueva dirección profesional hacia el desarrollo de software y la IA.

### 1.1. Actualizar Barra de Habilidades (Skills Bar)
*   **Objetivo:** Reflejar las tecnologías más relevantes y de uso reciente.
*   **Acciones:**
    *   **Mantener:** HTML, CSS, JavaScript como base fundamental.
    *   `[x]` **Añadir:**
        *   `[x]` Icono de Tux (el pingüino de Linux).
        *   `[x]` Icono de Kali Linux.
        *   `[x]` Icono de la Terminal/CLI.
        *   `[x]` Logo de Gemini (usando el nuevo archivo `gemini.svg`).
        *   `[x]` Logo de Visual Studio Code (usando el nuevo archivo `vscode.svg`).
    *   **Implementar un botón "Ver más":** Añadir un icono (ej. `+` o `...`) que al hacer clic despliegue una vista con el resto de las habilidades (Figma, WordPress, Photoshop, etc.) para mantener la barra principal limpia y enfocada.
    *   **Ampliar barra secundaria**: Añadir logos para After Effects, Premiere Pro, Krita, Inkscape, GIMP, Kdenlive.
    *   **Revisar:** El resto de los iconos para asegurar que la barra principal sea concisa y potente.

### 1.2. Categorizar Proyectos
*   **Objetivo:** Diferenciar claramente los proyectos de desarrollo de los de diseño gráfico para enfocar la atención del visitante.
*   **Acciones:**
    *   `[x]` **Añadir Tarjeta de Proyecto:** Crear una nueva tarjeta en la sección "ULTIMOS PROYECTOS" para **"Aventuras de Adrián"**, destacando su valor como proyecto de desarrollo personal y pedagógico.
    *   `[x]` **Crear Categorías Visuales:** Reestructurar la presentación de proyectos para separarlos en dos grandes grupos:
        *   **Desarrollo Web y Tecnológico:** Incluirá `Antología`, `Cyberpunk`, `Portafolio DSid`, `Aventuras de Adrián`.
        *   **Diseño Visual y Gráfico:** Incluirá `Leyenda Del Dorado`, `Logos`, `Ilustración Digital`, `Motion Graphics`, `Publicidad Yedra Pub`.
        *   *Nota: Se puede lograr creando dos sub-títulos dentro de la sección `projects` o utilizando la sección `lab` para los proyectos más personales/experimentales.*
    *   `[x]` **Actualizar Imágenes de Proyectos**:
        - `[x]` **Antología**: Reemplazar la imagen actual por un screenshot de la página del proyecto.
        - `[x]` **Aventuras de Adrián**: Reemplazar la imagen actual por el screenshot `assets/img/aventuras_adrian.png`.

### 1.3. Revisión de Estructura y Semántica
*   **Objetivo:** Asegurar que el HTML sea limpio, semántico y no contenga elementos fuera de lugar que afecten el diseño o la UX.
*   **Acciones:**
    *   Realizar una auditoría completa del `index.html` para confirmar que todo el contenido visible está dentro de las etiquetas `<main>` y `<footer>` correspondientes.
    *   Eliminar cualquier contenido residual o mal posicionado que pueda haber quedado de versiones anteriores.

### 1.4. Mejoras de UI en Hero Section
*   **Objetivo:** Simplificar y clarificar las llamadas a la acción principales.
*   **Acciones:**
    *   `[x]` Modificar el texto del botón "Descargar CV" a simplemente "CV" o una palabra similar que indique la visualización del currículum.

### 1.5. Ampliar Laboratorio Creativo
*   **Objetivo:** Reflejar los intereses actuales y conceptualizar un nuevo proyecto técnico en el área de ciberseguridad.
*   **Acciones:**
    *   **Tarjeta de Ciberseguridad:** Añadir una nueva tarjeta en la sección "LABORATORIO CREATIVO" dedicada a la **Ciberseguridad**. La descripción debe mencionar el uso de Kali Linux y el interés en explorar este campo.
    *   **Conceptualización de Proyecto "Network Sentinel":**
        *   **Idea:** Desarrollar una aplicación que sirva como un detector de conexiones externas al ordenador y a la red privada, ayudando a diferenciar entre conexiones seguras y no seguras.
        *   **Paso 1 (Investigación):** Realizar una investigación para identificar si ya existen herramientas similares o iguales, analizar su funcionamiento y viabilidad.
        *   **Visión a Largo Plazo:** Diseñar el concepto pensando en su escalabilidad para múltiples plataformas:
            *   Widget para entornos de escritorio (Linux, GNOME).
            *   Aplicación para Android.
            *   Extensión para navegadores web.

---

## 2. Proyecto `Antologia` - Escalabilidad y Funcionalidad

El objetivo es convertir la Antología en un proyecto web robusto, funcional y fácil de mantener.

### 2.1. Reorganización de Archivos
*   **Objetivo:** Aplicar la misma estructura de `assets` que en el proyecto principal para mejorar la escalabilidad.
*   **Acciones:** `[x]`
    *   Crear las carpetas `Antologia/assets/css/` y `Antologia/assets/js/`.
    *   Mover el CSS y el JavaScript que actualmente están en línea en `index.html` a archivos externos (`style.css`, `script.js`) dentro de sus nuevas carpetas.

### 2.2. Completar Contenido y Navegación
*   **Objetivo:** Ofrecer una experiencia completa y funcional al lector.
*   **Acciones:**
    *   `[ ]` **Autobiografía:** Redactar y añadir el contenido final en la sección correspondiente.
    *   `[x]` **Escríbeme:** Reemplazar el formulario no funcional por botones de contacto directo (WhatsApp, Instagram, Email).

### 2.3. Implementar Funciones Dinámicas
*   **Objetivo:** Aumentar la viralidad del contenido y facilitar el apoyo de los lectores.
*   **Acciones:**
    *   `[ ]` **Botones de Compartir:** Programar en JavaScript una función que:
        1.  Detecte el poema que el usuario está viendo.
        2.  Obtenga su título y URL única (ej: `.../Antologia/index.html#poema-1`).
        3.  Genere dinámicamente los enlaces para compartir en X (Twitter) y Facebook.
    *   `[ ]` **Botones de Donación:** Investigar y configurar los enlaces directos a las pasarelas de pago o perfiles de donación para:
        *   PayPal (PayPal.Me).
        *   Bizum (posiblemente a través de un QR o número de teléfono).
        *   Nequi (similar a Bizum).

---

## 3. Estrategia de Diseño y Navegación

### 3.1. Evolución del Diseño Visual
*   **Objetivo:** Modernizar sutilmente la estética del sitio para que se perciba más profesional y alineada con las tendencias actuales en diseño de portafolios tecnológicos.
*   **Acciones:**
    *   Buscar referentes visuales en sitios como Awwwards, Behance (portafolios de desarrolladores) y Dribbble.
    *   Realizar ajustes incrementales en `style.css` (tipografía, espaciado, paleta de colores, micro-interacciones).

### 3.2. Filosofía del Proyecto: "El Alma Digital"
*   **Objetivo:** Infundir el diseño y la experiencia de usuario con la personalidad y la historia de vida del autor, tratando el sitio como una "representación poética de una existencia".
*   **Concepto Clave:** Cada sección (proyectos, CV, antología, aventuras) es una faceta del "alma" del autor. El sitio debe invitar al visitante a conocer estas diferentes partes de una vida.
*   **Acciones:**
    *   Utilizar esta filosofía como guía principal para las decisiones de diseño en la tarea `3.1. Evolución del Diseño Visual`.
    *   Buscar elementos visuales (micro-interacciones, transiciones, iconografía) que reflejen las dualidades clave: técnico y artístico, profesional y personal, lógico y emocional.
    *   Asegurar que el "storytelling" a través de la navegación (tarea `3.3`) sea coherente con este viaje introspectivo.

### 3.3. Mapa del Sitio y Flujo de Navegación
*   **Objetivo:** Crear una representación visual de la arquitectura del sitio para entender y mejorar los flujos de navegación del usuario.
*   **Acciones:**
    *   **Generar un Árbol de Archivos:** Documentar la estructura actual de carpetas y archivos para tener una visión clara del proyecto.
    *   **Diseñar un Mapa de Navegación (User Flow):** Crear un diagrama que muestre cómo un usuario se mueve entre las páginas clave (Inicio -> Proyectos -> CV -> Antología, etc.).
    *   **Identificar Puntos de Fricción:** Usar el mapa para encontrar lugares donde la navegación podría ser confusa o donde se pueden añadir enlaces para mejorar la experiencia.

---

## 4. Página de CV (`cv/cv.html`) - Limpieza y Estructura

*   **Objetivo:** Corregir problemas estructurales y de contenido en la página del CV principal para asegurar una presentación profesional y limpia.
*   **Acciones:**
    *   **Auditoría de Contenido:** Realizar un análisis del HTML para identificar cualquier texto o elemento que se encuentre fuera de lugar (ej. después del `<footer>`).
    *   **Reubicación o Eliminación:** Integrar el contenido relevante en las secciones correspondientes del CV o eliminarlo si es redundante o un vestigio de versiones anteriores.
    *   **Asegurar la Integridad del Diseño:** Confirmar que no haya elementos fuera de las etiquetas semánticas principales (`<main>`, `<footer>`) que afecten la maquetación y la experiencia de usuario.
    *   **Añadir Botón de Impresión:** Integrar un botón visible (ej. "Imprimir CV") en la página `cv.html`.
    *   **Crear Estilos de Impresión:** Desarrollar una hoja de estilos específica para impresión (`@media print`) que formatee el contenido del CV para que se ajuste estéticamente en una o dos páginas A4, ocultando elementos no necesarios como la navegación, el footer y el propio botón de imprimir.

---

## 5. Optimización Técnica

*   **Objetivo:** Mejorar drásticamente la velocidad de carga y la experiencia de usuario del sitio principal.
*   **Acciones:**
    *   **Conversión de GIF a Video:**
        -   `[x]` Convertir el archivo `motion.gif` a formato `motion.mp4` y reemplazar la etiqueta `<img>` por `<video>`.
    *   **Optimización de Imágenes a WebP:**
        -   `[x]` Convertir las imágenes de los proyectos (formatos `.png`) al formato moderno `.webp` para reducir su tamaño sin perder calidad.
        -   `[x]` Actualizar las rutas en `index.html` para que apunten a las nuevas imágenes `.webp`.
    *   **Priorización de Carga:**
        -   `[x]` Añadir el atributo `fetchpriority="high"` a la imagen principal de la sección "hero" (`foto3.webp`).
        -   `[x]` Eliminar `loading="lazy"` de las primeras imágenes para mejorar la fluidez del scroll.
    *   **Mejora Visual de Proyecto:**
        -   Añadir el logo de Instagram a la tarjeta del proyecto "Yedra Disco Pub" para reflejar que fue una campaña para redes sociales.

---

## 6. Integración de Backend y Formularios

### 6.1. Configurar Formulario de Contacto con Firebase

- **Objetivo**: Migrar el formulario de contacto principal de EmailJS a Firebase (Firestore) para tener un control más robusto sobre los mensajes recibidos.

- **Guía Paso a Paso**:

    #### **Paso 1: Crear el Proyecto en Firebase**

    1.  **Ir a la Consola de Firebase:** Entra en `console.firebase.google.com`.
    2.  **Crear un nuevo proyecto:** Dale un nombre (ej. `danisid-portfolio`) y sigue los pasos.

    #### **Paso 2: Configurar la Base de Datos (Firestore)**

    1.  En el menú del proyecto, ve a **Compilación > Firestore Database**.
    2.  Haz clic en **"Crear base de datos"**.
    3.  Elige **"Iniciar en modo de prueba"** para el desarrollo.
    4.  Selecciona una ubicación para el servidor.

    #### **Paso 3: Conectar la Web con Firebase**

    1.  Ve a **Configuración del proyecto** (icono de engranaje).
    2.  En "Tus apps", haz clic en el icono web **`</>`**.
    3.  Dale un apodo y registra la aplicación.
    4.  Copia el objeto de configuración `firebaseConfig`.

    #### **Paso 4: Añadir los Scripts de Firebase a `index.html`**

    1.  Reemplaza el script de EmailJS por los de Firebase SDK:
        ```html
        <!-- Firebase SDK -->
        <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js" defer></script>
        <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js" defer></script>
        ```

    #### **Paso 5: Actualizar `javascript.js` para Guardar en Firestore**

    1.  Pega el objeto `firebaseConfig` al inicio del script.
    2.  Inicializa Firebase y obtén la referencia a la base de datos.
    3.  Modifica la función `submitForm` para que guarde los datos del formulario en una colección de Firestore llamada "messages", añadiendo un `timestamp`.
    *   **Priorización de Carga:**
        -   `[x]` Añadir el atributo `fetchpriority="high"` a la imagen principal de la sección "hero" (`foto3.webp`).
        -   `[x]` Eliminar `loading="lazy"` de las primeras imágenes para mejorar la fluidez del scroll.
    *   **Mejora Visual de Proyecto:**
        -   Añadir el logo de Instagram a la tarjeta del proyecto "Yedra Disco Pub" para reflejar que fue una campaña para redes sociales.

---

## 5. Estrategia de Crecimiento y Branding

### 5.1. SEO y Analítica Web
*   **Objetivo:** Aumentar la visibilidad orgánica del sitio y entender el comportamiento del usuario.
*   **Acciones:**
    *   Realizar una auditoría de Google Analytics para identificar las páginas más visitadas y las fuentes de tráfico.
    *   Definir e implementar una estrategia de palabras clave (keywords) enfocada en "desarrollador web creativo", "diseñador visual Madrid", "automatización IA", etc.
    *   Optimizar las metaetiquetas (título, descripción) de todas las páginas clave.

### 5.2. Branding Externo
*   **Objetivo:** Mantener una imagen de marca coherente y profesional en todas las plataformas.
*   **Acciones:**
    *   Diseñar y actualizar la imagen de portada de LinkedIn para que refleje el nuevo enfoque en tecnología y desarrollo.

---

## 6. Proyecto `IA Assistant` - Desarrollo y Conceptualización

*   **Objetivo:** Desarrollar el concepto del asistente web con IA mencionado en el CV.
*   **Acciones:**
    *   Definir el alcance y las funcionalidades clave de la herramienta (generación de texto, imágenes, etc.).
    *   Diseñar la interfaz de usuario (UI) y la experiencia de usuario (UX).
    *   Investigar las APIs de OpenAI o Gemini necesarias para su implementación.
    *   Crear una página de proyecto dedicada para documentar el progreso y el objetivo.

---

## 7. Refactorización Completa del Portafolio a React (Próxima Fase)

- **Objetivo Estratégico**: Migrar el sitio principal `danisid.com` de una arquitectura de HTML/CSS/JS puro a una Single Page Application (SPA) moderna con **React y Vite**.

- **Justificación**:
    - **Conflictos de Mantenibilidad**: El proyecto actual, basado en la manipulación directa del DOM, está mostrando los mismos problemas de escalabilidad, conflictos de estado y dificultades para implementar cambios estructurales (como se vio en la revisión de accesibilidad) que se encontraron en el proyecto 'Antología' antes de su migración.
    - **Coherencia Tecnológica**: Unificar el stack tecnológico del portafolio con el de los sub-proyectos más modernos ('Antología React'), demostrando una apuesta clara por las tecnologías actuales.
    - **Profesionalización y Escalabilidad**: Adoptar un enfoque basado en componentes, estado gestionado y un entorno de build profesional (Vite) para facilitar el desarrollo futuro, la implementación de nuevas funcionalidades complejas y la depuración.

- **Acciones Propuestas (para la próxima sesión de trabajo)**:
    1.  **Configuración del Entorno**: Crear un nuevo proyecto React + Vite para el portafolio principal.
    2.  **Plan de Migración por Componentes**: Analizar y desglosar la página `index.html` actual en una estructura de componentes reutilizables (ej: `Hero`, `Navbar`, `ProjectsGrid`, `ExperienceTimeline`, `ContactForm`, etc.).
    3.  **Migración Inicial**: Comenzar la migración de los componentes más sencillos y los estilos CSS para establecer la base de la nueva aplicación.
    4.  **Reevaluación de Librerías**: Analizar si librerías como `ScrollReveal` pueden ser reemplazadas por soluciones más modernas del ecosistema React, como `Framer Motion` o `IntersectionObserver` hooks.