# Plan de Migración a React: danisid.com

Este documento detalla la estrategia y los pasos técnicos para migrar `danisid.com` de una arquitectura de HTML/CSS/JS a una Single Page Application (SPA) con React y Vite.

**Filosofía de Diseño (Post-Feedback):** Se adopta un enfoque híbrido. Se mantiene un "Hero Header" de alto impacto para establecer la marca personal ("Ingeniero de Soluciones Web") y demostrar habilidad técnica desde el primer momento, seguido inmediatamente por la galería de proyectos para satisfacer la necesidad del reclutador de ir "directo al grano".

---

## Fase 1: Preparación y Descomposición

El objetivo de esta fase es analizar la web actual y planificar su estructura en componentes de React.

### 1.1. Descomposición de la UI en Componentes

Analizando `index.html`, podemos identificar la siguiente jerarquía de componentes:

```
App
├── Nav.jsx                   // La barra de navegación lateral fija.
├── Main.jsx                  // Contenedor principal que agrupa las secciones.
│   ├── Hero.jsx              // Sección de bienvenida con el título y la animación Matrix.
│   │   ├── MatrixEffect.jsx  // Componente aislado para la animación del canvas.
│   │   └── SkillsBar.jsx     // La barra de habilidades principal y secundaria.
│   │
│   ├── Projects.jsx          // La sección "ULTIMOS PROYECTOS".
│   │   └── ProjectCard.jsx   // Componente reutilizable para cada tarjeta de proyecto.
│   │
│   ├── Lab.jsx               // La sección "LABORATORIO CREATIVO".
│   │   └── LabCard.jsx       // Tarjeta para cada elemento del laboratorio.
│   │
│   ├── Services.jsx          // La sección "SERVICIOS OFRECIDOS".
│   │   └── ServiceCard.jsx   // Tarjeta para cada servicio.
│   │
│   ├── Experience.jsx        // La sección "Experiencia Profesional".
│   │   └── ExperienceCard.jsx// Tarjeta para cada experiencia laboral.
│   │
│   └── Contact.jsx           // La sección de contacto con el formulario.
│       └── ContactForm.jsx   // El formulario gestionado por Netlify Forms.
│
├── Footer.jsx                // El pie de página con logo, enlaces y redes sociales.
└── ScrollUp.jsx              // El botón de "volver arriba".
```

### 1.2. Estrategia para Estilos (Manteniendo el Diseño)

- **Principio**: No reinventar la rueda. Reutilizaremos el 95% de tu `style.css` actual.
- **Método**:
    1.  **CSS Global**: Importaremos `style.css` directamente en el archivo principal de React (`main.jsx` o `App.jsx`). Esto aplicará todos los estilos existentes globalmente, manteniendo la estética cyberpunk de inmediato.
    2.  **CSS por Componente (Opcional, para futuro)**: A medida que migremos, si un componente necesita estilos muy específicos, podemos usar **CSS Modules**. Crearemos un archivo `Componente.module.css` y lo importaremos solo en ese componente. Esto evita conflictos de nombres de clases a largo plazo.

---

## Fase 2: Construcción del Esqueleto

1.  **Iniciar el Proyecto**: Crear el nuevo proyecto con `npm create vite@latest -- --template react`.
2.  **Estructura de Carpetas**: Crear la estructura `src/components/`, `src/assets/` (para imágenes, etc.).
3.  **Copiar Activos**: Mover todos los archivos de `assets/` (CSS, JS, img) del proyecto actual al nuevo.
4.  **Crear Componentes Vacíos**: Crear un archivo `.jsx` por cada componente identificado en la Fase 1 (ej. `Hero.jsx`, `ProjectCard.jsx`, etc.) con una estructura básica.
5.  **Ensamblar `App.jsx`**: Importar y organizar todos los componentes principales dentro de `App.jsx` siguiendo la jerarquía definida.

---

## Fase 3: Migración Paulatina de Contenido

Esta es la fase donde movemos el HTML del `index.html` original a los componentes `.jsx` correspondientes.

1.  **Componente por Componente**: Empezar por los más simples y sin lógica (ej. `Footer.jsx`).
2.  **Copiar y Pegar HTML**: Copiar el bloque de HTML correspondiente del `index.html` y pegarlo en el `return()` del componente JSX.
3.  **Adaptar a JSX**: Realizar los cambios necesarios para que el HTML sea JSX válido:
    -   `class` se convierte en `className`.
    -   `for` en las etiquetas `<label>` se convierte en `htmlFor`.
    -   Los comentarios `<!-- -->` se convierten en `{/* */}`.
    -   Las imágenes y otros recursos se importan y usan como variables.
4.  **Integrar Lógica JS**: Mover la lógica de `javascript.js` (ej. el toggle de la barra de skills) al componente correspondiente usando hooks de React (`useState`, `useEffect`). La lógica de `ScrollReveal` se puede reimplementar con `IntersectionObserver` para un enfoque más moderno.

---