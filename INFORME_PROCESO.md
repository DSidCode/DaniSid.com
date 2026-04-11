# Informe de Proceso y Decisiones Técnicas

**Fecha:** 27 de noviembre de 2025

## Resumen Ejecutivo

La jornada de hoy se centró en dos objetivos críticos: **1) Alinear la sección de proyectos con la visión estratégica profesional** definida en los consejos de Wili y Guille, y **2) Solucionar errores persistentes de funcionalidad** que afectaban la experiencia de usuario. Ambos objetivos se han cumplido con éxito.

---

## 1. Rediseño Estratégico de la Sección de Proyectos

### Decisión Clave: Implementación de Ventana Modal

Siguiendo el principio fundamental de **"No sacar al usuario del sitio"**, se optó por la "Opción B" de los consejos: implementar una vista modal (lightbox) para los detalles del proyecto.

**Acciones Realizadas:**
- **Rediseño de Tarjetas:** Se simplificó la UI de las `.projects_card`, mostrando únicamente la imagen/video, el título y los skills. Esto aumenta el impacto visual y convierte la tarjeta en un claro "call to action" para ver más detalles.
- **Implementación del Modal:** Se añadió el HTML del modal a `index.html` y `index-en.html` y se desarrolló la lógica en `javascript.js`. El modal ahora carga dinámicamente el contenido del proyecto seleccionado, proporcionando una experiencia fluida y profesional sin abandonar la página principal.

**Resultado:** La sección de proyectos ahora es el foco principal, tal como se recomendó. La experiencia es más rápida, profesional y eficaz para un reclutador.

---

## 2. Corrección de Errores Críticos

### Problema: Barra de Habilidades (`Skills`) No Funcional

La barra de habilidades presentaba un error grave que impedía su expansión y contracción. Tras una serie de intentos fallidos que generaron inconsistencias visuales, se realizó un análisis profundo de la estructura original.

**Solución Definitiva:** Se identificó que la lógica original se basaba en dos contenedores (`.skills_bar` y `.skills_secondary`). Se restauró esta lógica en el CSS, asegurando que la clase `.show-skills` se aplicara correctamente al segundo contenedor para hacerlo visible. Se corrigió el CSS para que la animación y la rotación del icono `+` funcionaran de manera predecible.

**Resultado:** La funcionalidad ha sido completamente restaurada y estabilizada, eliminando un punto importante de fricción en la UX.