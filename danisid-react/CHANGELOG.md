# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.1.0] - 2024-05-24

### Added
- **Sistema de Enrutamiento:** Implementado `react-router-dom` para permitir la navegación entre múltiples páginas.
- **Nueva Página "Propuesta de Valor":** Creada la ruta `/propuesta-de-valor` para mostrar el manifiesto de marca en una página dedicada.
- **Nuevos Componentes:**
    - `ValueProposition.jsx`: Componente que contiene el texto y la estructura de la propuesta de valor.
    - `HomePage.jsx`: Componente que agrupa todas las secciones de la página de inicio.
- **Documentos de Estrategia:**
    - `BRAND_STRATEGY.md`: Define la identidad visual "Cyber-Noir de Lujo" y la estrategia de marca híbrida.
    - `VALUE_PROPOSITION.md`: Documenta los tres pilares de la propuesta de valor.
    - `TODO.md`: Archivo para el seguimiento de tareas de refactorización visual.

### Changed
- **Componente `Hero.jsx`:**
    - Actualizado para reflejar la estrategia de marca híbrida, añadiendo "Fundador de Quimera Alchemist".
    - Reemplazado el subtítulo por "Alquimista Digital".
    - Modificado el botón "Mi Propuesta" para que sea un `<Link>` que navega a la nueva página.
- **Componentes de Navegación (`Nav.jsx`, `Footer.jsx`):**
    - Actualizados para usar el componente `<Link>` de `react-router-dom`, asegurando una navegación correcta entre páginas.
- **Estilos Globales (`style.css`):**
    - Paleta de colores simplificada a un único acento (cian) para alinearse con la estética "Cyber-Noir de Lujo".
    - Tipografía invertida: `monospace` para títulos y `sans-serif` para el cuerpo de texto.
- **Componente `ValueProposition.jsx`:**
    - El texto ha sido reescrito para ser más profesional y orientado al cliente, eliminando la jerga "friki".

### Fixed
- **Bug del Logo de Figma:** Solucionado permanentemente editando el archivo `skills-figma.svg` para añadir un `viewBox` y hacerlo escalable.
- **Navegación Rota:** Corregidos los enlaces para que funcionen correctamente desde cualquier página de la aplicación.
- **Error de Importación de CSS:** Solucionado el problema de la ruta incorrecta para `valueProposition.css`.