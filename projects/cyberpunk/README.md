# DaniSid :: Cybergrid - Un Portafolio Inmersivo

Este documento detalla el concepto, la estructura y la tecnología detrás del proyecto "Cybergrid", una versión alternativa y temática del portafolio principal de Daniel Sid, accesible en [cyberpunk.danisid.com](https://cyberpunk.danisid.com).

---

## 1. Concepto y Visión del Proyecto

**Cybergrid** no es solo una página web, es una **experiencia inmersiva** que reimagina el portafolio profesional bajo una estética **cyberpunk**. El objetivo es fusionar la narrativa visual con la demostración de habilidades técnicas, presentando el perfil de Daniel Sid como un "operativo digital" que navega por un ciberespacio de creaciones.

La visión es tratar el portafolio como un producto en sí mismo, donde cada elemento, desde las animaciones hasta el texto, contribuye a una historia coherente. Sirve como un escaparate avanzado para destacar la creatividad y la capacidad de ejecución en desarrollo front-end y diseño de experiencias.

---

## 2. Características Principales y Funcionalidades

El sitio está construido como una aplicación de una sola página (SPA) simulada, con secciones que se exploran a través de scroll o navegación.

### Secciones Clave:

*   **`Núcleo (#core)`**: La sección de bienvenida. Presenta la identidad "DaniSid" con un fuerte impacto visual y una llamada a la acción principal ("Explorar la Red") que invita al usuario a sumergirse.
*   **`Datos del Núcleo (#data)`**: La sección "Sobre mí". Utiliza una narrativa cyberpunk para describir la trayectoria y habilidades del autor. Incluye contadores animados que se activan con el scroll para mostrar estadísticas clave (proyectos, años de experiencia).
*   **`Red de Creaciones (#grid)`**: El portafolio de proyectos. Es una cuadrícula interactiva y filtrable que muestra diferentes tipos de trabajos (Web, Arte, 3D). Los enlaces dirigen a los proyectos reales en Behance o al portafolio principal.
*   **`Ciberherramientas (#tools)`**: La sección de habilidades. Muestra un arsenal de tecnologías y software dominados, desde lenguajes de programación hasta herramientas de diseño y 3D. Los iconos tienen un efecto de "activación" al pasar el ratón sobre ellos.
*   **`Terminal de Conexión (#link)`**: El formulario de contacto. Diseñado como una "terminal" para "enviar transmisiones", mantiene la coherencia temática hasta el final de la experiencia.
    *   **Funcionalidad Completa**: Integrado con **EmailJS** para el envío real de correos electrónicos.

### Efectos y Experiencia de Usuario (UX):

*   **Preloader Inmersivo**: Simula un proceso de "booting" o arranque del sistema.
*   **HUD (Heads-Up Display)**: Una capa superpuesta con efectos de `scanlines` (líneas de escaneo) y `noise` (ruido) para emular la vista desde una interfaz futurista.
*   **Animaciones y Micro-interacciones**:
    *   Efectos `glitch` en textos clave.
    *   Textos y botones con brillo de neón.
    *   Animaciones de entrada para elementos que aparecen con el scroll (`IntersectionObserver`).
    *   Efectos de paralaje y un "drone" que sigue sutilmente el movimiento del ratón.

---

## 3. Arquitectura y Tecnologías

El proyecto está construido con tecnologías web fundamentales, sin depender de frameworks complejos, lo que demuestra un sólido dominio de las bases del desarrollo front-end.

*   **HTML5**: Estructura semántica con un fuerte uso de IDs para la navegación interna.
*   **CSS3**:
    *   Uso intensivo de **Variables CSS (Custom Properties)** para una tematización fácil y consistente (colores neón, fondos).
    *   **CSS Grid** y **Flexbox** para la maquetación responsive.
    *   **Animaciones y Transiciones** para todos los efectos visuales, optimizando el rendimiento.
    *   `backdrop-filter` para crear el efecto de panel translúcido en el header.
*   **JavaScript (Vanilla)**:
    *   Manejo completo del DOM para la interactividad.
    *   **`IntersectionObserver`** para activar animaciones de forma eficiente al hacer scroll.
    *   Lógica para el preloader, la navegación móvil, el filtrado de la galería y los contadores animados.

---

## 4. Decisiones a Futuro y Oportunidades

Este `README.md` establece una base conceptual para futuras mejoras.

*   **Contenido**: ¿Qué nuevas "Ciberherramientas" se pueden añadir? ¿La "Red de Creaciones" puede incluir nuevos tipos de proyectos, como "Scripts de Automatización" o "Experimentos con IA"?
*   **Funcionalidad**:
    *   Los enlaces del footer ("Darkpool", "Neonhub") son placeholders y podrían apuntar a redes sociales o proyectos relevantes.
*   **Optimización**:
    *   Las animaciones y efectos son visualmente impactantes, pero se debe vigilar su rendimiento en dispositivos de gama baja. Se podría considerar desactivar algunos efectos en pantallas pequeñas.
    *   Las imágenes de fondo de los módulos de proyecto (`.module-holo`) están hardcodeadas en el CSS. Esto podría refactorizarse para que se definan en el HTML, facilitando la adición de nuevos proyectos.

Este proyecto es un excelente "laboratorio digital". Su fuerte identidad visual y conceptual lo convierte en una pieza central del portafolio, ideal para demostrar que se puede ir más allá de un simple sitio web y construir una verdadera **experiencia digital**.