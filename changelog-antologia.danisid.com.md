## [Version X.Y.Z] - Mejoras de UI y Build

### `Added`
- **Efecto Neón en Botones**: Se ha implementado un efecto visual de "brillo neón" en los botones de redes sociales y donaciones. Al pasar el cursor, el logo SVG emite un resplandor blanco que contrasta con el color de fondo de la marca, mejorando la retroalimentación visual y la estética del sitio.

### `Fixed`
- **Resolución de Módulos en Vite**: Se corrigió un error de build que impedía resolver importaciones con alias (ej. `@/components/...`). Se configuró `vite.config.js` para mapear el alias `@` al directorio `src`, garantizando que las rutas de importación sean consistentes y fiables en todo el proyecto.

### `Changed`
- **Refactorización de CSS**: Se han refactorizado los estilos `:hover` de los botones para combinar una transición de color de fondo con el nuevo efecto de brillo en el logo. Se ajustó la propiedad `transition` para animar `transform` y `filter` de forma simultánea y fluida.

