# Changelog

## [2025-11-27]

### Added
- **Funcionalidad de Modal de Proyectos:**
  - Se ha añadido el código HTML para la ventana modal en `index.html` y `index-en.html`, siguiendo las mejores prácticas para su renderizado.
  - Se ha implementado la lógica completa en `javascript.js` para abrir el modal al hacer clic en una tarjeta de proyecto, cargar dinámicamente su contenido (título, imagen/video, descripción, skills) y gestionar su cierre (botón, tecla 'Escape', clic fuera).

### Changed
- **Sección de Proyectos:**
  - Rediseño de las tarjetas de proyecto (`.projects_card`) para un aspecto más limpio y profesional. Se ocultó la descripción y el botón para que actúen como disparadores del nuevo modal, alineándose con los objetivos estratégicos.
- **Sección de Habilidades (Skills):**
  - Se ha restaurado y estabilizado la funcionalidad de la barra de habilidades expandible. Ahora se expande y contrae de forma fiable.
  - El icono `+` ahora se transforma en una `x` cuando la barra está expandida, mejorando la UX.

### Fixed
- **Barra de Habilidades:** Solucionados errores críticos que impedían el correcto funcionamiento de la animación de expansión/contracción. La lógica ahora es robusta y respeta la estructura HTML original de dos contenedores.
- **Sección Hero:** Corregidos problemas iniciales con el efecto "matrix" y el "glitch" del título.