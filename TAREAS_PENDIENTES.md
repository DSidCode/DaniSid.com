# Tareas Pendientes y Hoja de Ruta

Este documento es el backlog activo y la hoja de ruta estratégica para `danisid.com` y todo su ecosistema de subproyectos.

---

## 1. Tareas de Infraestructura y Estrategia Core

### 1.1. [EN CURSO] Refactorización Completa del Portafolio a React
- **Objetivo**: Migrar `danisid.com` de HTML/CSS/JS puro a una arquitectura más robusta, escalable y profesional para facilitar el mantenimiento y la implementación de nuevas funcionalidades.
- **Acciones**:
    - [ ] **Decidir el Framework**: Evaluar y seleccionar la tecnología principal. Las opciones más recomendables son:
        - **React (con Vite)**: Es la opción más demandada en la industria, con un ecosistema enorme (librerías, hooks, frameworks como Next.js). Ideal para SPAs complejas y demuestra una habilidad muy valorada. Es una apuesta segura y profesional.
        - **Vue.js**: Conocido por su curva de aprendizaje más suave y excelente documentación. Es muy potente y una gran alternativa a React si se busca simplicidad y rendimiento.
        - **Svelte**: Un enfoque innovador que compila el código a JavaScript vainilla muy optimizado en tiempo de construcción, resultando en aplicaciones muy rápidas. Gana popularidad por su simplicidad y rendimiento.
    - [ ] **Planificar la Migración**: Desglosar la web actual en componentes reutilizables (`Navbar`, `Hero`, `ProjectCard`, `ContactForm`, etc.).
    - [ ] **Iniciar el Proyecto Base**: Configurar el nuevo proyecto con la herramienta de build seleccionada (ej. `npm create vite@latest`).
    - **Plan de Acción**: Seguir las fases definidas en `PLAN_MIGRACION_REACT.md`.
    - **Próximos Pasos Inmediatos**:
        - [ ] **Iniciar el Proyecto Base (Fase 2)**: Crear el nuevo proyecto con `npm create vite@latest -- --template react`.
        - [ ] **Construir el Esqueleto (Fase 2)**: Crear la estructura de carpetas (`src/components`, `src/assets`) y los archivos de componentes vacíos (`Hero.jsx`, `Nav.jsx`, etc.).
        - [ ] **Comenzar Migración de Contenido (Fase 3)**: Empezar a mover el HTML del `index.html` original a los componentes `.jsx`, comenzando por los más simples como `Footer.jsx`.
    - [ ] **Migrar Componentes**: Empezar a migrar sección por sección, comenzando por las más simples.

### 1.2. Recopilar Contexto Estratégico
- **Objetivo**: Documentar el feedback clave para la evolución profesional del proyecto.
- **Acciones**:
    - [ ] **Completar Contexto "Wili y Guille"**: Rellenar el archivo `CONSEJOS_WILI_GUILLE.md` con los consejos y la visión aportada para la refactorización y el enfoque profesional del proyecto.
    - [ ] **[PRIORIDAD] Completar Contexto "Wili y Guille"**: Rellenar el archivo `CONSEJOS_WILI_GUILLE.md` con los consejos y la visión aportada. **Este es el paso más importante antes de empezar a escribir código de la nueva versión.**

---

## 2. Desarrollo de Nuevos Proyectos

### 2.1. Proyecto BlueCore
- **Objetivo**: Lanzar y visibilizar el proyecto BlueCore.
- **Acciones**:
    - [ ] **Configurar Infraestructura**:
        - [ ] Crear el subdominio `BlueCore-ai.danisid.com` en Netlify.
    - [ ] **Desarrollar Contenido**:
        - [ ] Crear el repositorio Git `BlueCore` en GitHub.
        - [ ] Diseñar y desarrollar la landing page o plataforma web para BlueCore.
        - [ ] Mantener actualizado el `README.md` y `CHANGELOG.md` del proyecto.
    - [ ] **Integrar en Portafolio**:
        - [ ] Diseñar y añadir la tarjeta de proyecto "BlueCore" en la sección de proyectos de `danisid.com`.

### 2.2. Proyecto QuimeraAlchemist
- **Objetivo**: Iniciar y visibilizar el proyecto QuimeraAlchemist, conectándolo con el interés en Blockchain.
- **Acciones**:
    - [ ] **Configurar Infraestructura**: Crear el subdominio `quimeraalchemist.danisid.com`.
    - [ ] **Desarrollar Contenido**:
        - [ ] Crear el repositorio Git `QuimeraAlchemist` en GitHub.
        - [ ] Mantener actualizado el `README.md` y `CHANGELOG.md`.
    - [ ] **Integrar en Portafolio**:
        - [ ] Diseñar y añadir la tarjeta de proyecto "QuimeraAlchemist" en `danisid.com`.
    - [ ] **Planificar Desarrollo**:
        - [ ] Empezar el diseño conceptual de la plataforma web o aplicación.

### 2.3. Actualización del CV
- **Objetivo**: Mantener el currículum actualizado con las últimas habilidades y proyectos.
- **Acciones**:
    - [ ] Revisar y actualizar el contenido del CV (`cv/cv.html` y `cv/cv-en.html`) para reflejar los nuevos proyectos (BlueCore, QuimeraAlchemist, guitarApp) y el enfoque en IA, Ciberseguridad y automatización.

### 2.4. Proyecto guitarApp
- **Objetivo**: Desarrollar una herramienta interactiva para el aprendizaje de acordes y escalas de guitarra.
- **Acciones**:
    - [ ] **Configurar Infraestructura**: Crear el subdominio `guitarapp.danisid.com`.
    - [ ] **Desarrollar Contenido**:
        - [ ] Crear el repositorio Git `guitarApp` en GitHub.
        - [ ] Mantener actualizado el `README.md` y `CHANGELOG.md`.
    - [ ] **Integrar en Portafolio**:
        - [ ] Diseñar y añadir la tarjeta de proyecto "guitarApp" en `danisid.com`.
    - [ ] **Planificar Desarrollo**:
        - [ ] Prototipar la integración de Web Audio API y gráficos SVG para el fretboard interactivo.
        - [ ] Investigar la integración de IA para la generación de ejercicios.

---

## 3. Mantenimiento de Proyectos Existentes

### 3.1. Proyecto `Antologia` (React)
- **Estado**: Migrado a React y desplegado en `antologia.danisid.com`.
- **Acciones Pendientes**:
    - [ ] **Contenido**: Redactar y añadir el contenido de la "Autobiografía".
    - [ ] **Funcionalidad**: Programar los botones de "Compartir" en redes sociales.
    - [ ] **Funcionalidad**: Investigar e implementar los botones de "Donación" (PayPal.Me, etc.).

### 3.2. Proyecto `Aventuras de Adrián`
- **Estado**: En proceso de migración a React. La carpeta del proyecto ya está separada.
- **Acciones Pendientes**:
    - [ ] **Migración a React**: Completar la migración del proyecto a una arquitectura React + Vite para mejorar la interactividad y mantenibilidad.
    - [ ] **Configurar Infraestructura**: Crear el subdominio `aventuras.danisid.com` una vez migrado.

### 3.3. Proceso de Despliegue y Versionado
- **Objetivo**: Implementar un flujo de trabajo más profesional y seguro.
- **Acciones**:
    - [ ] **Establecer Rutina de Commits**: Adoptar la costumbre de hacer commits pequeños y descriptivos para cada cambio.
    - [ ] **Verificación Pre-Push**: Crear un checklist mental o físico para verificar visualmente que todo funciona correctamente en local antes de ejecutar `git push`.
    - [ ] **Implementar Versionado Semántico**:
        - [ ] Añadir un indicador de versión en el pie de página de la web (ej. `v1.2.0`).
        - [ ] Investigar y adoptar el versionado semántico (Major.Minor.Patch) para gestionar los cambios del proyecto.

### 3.4. Tareas Generales Pendientes (Fase 2)
- **Objetivo**: Completar las tareas definidas previamente que aún están pendientes.
- **Acciones**:
    - [ ] **Estrategia y Diseño**:
        - [ ] Realizar una evolución sutil del diseño visual (tipografía, espaciado, colores).
        - [ ] Generar un mapa del sitio y un diagrama de flujo de usuario para optimizar la navegación.
    - [ ] **SEO y Branding**:
        - [ ] Realizar auditoría de Google Analytics.
        - [ ] Implementar una estrategia de palabras clave.
        - [ ] Optimizar metaetiquetas.
        - [ ] Actualizar la imagen de portada de LinkedIn.
    - [ ] **Proyecto `IA Assistant`**:
        - [ ] Definir el alcance y funcionalidades.
        - [ ] Diseñar la UI/UX.
        - [ ] Investigar APIs (OpenAI/Gemini).

---