# Changelog V2 - Resumen de Sesión (Refinamiento Portfolio & Digital Alchemy)

Este documento resume los cambios, decisiones y evoluciones realizadas durante la sesión de trabajo del 21 de Noviembre de 2025.

## [Sesión Actual] - 2025-11-21

### 🎨 Diseño e Identidad Visual
- **Nuevo Concepto: "Digital Alchemy"**
  - Se definió una nueva dirección artística que refleja la transición de Diseñador Visual a Ingeniero de Soluciones.
  - **Filosofía:** "Transforming Design into Code".
  - **Paleta Cromática Implementada:**
    - `Deep Space Navy` (#0A0E1F): Fondo principal (Laboratorio).
    - `Electric Cyan` (#06D6A0): Código y Tech (Color primario).
    - `Violet Purple` (#6366F1): Creatividad y Diseño (Acento).
    - `Warm Amber` (#F59E0B): Humanidad y Pedagogía (Detalles cálidos).
    - `Cool Gray` (#94A3B8): Textos y legibilidad.

### 🚀 Nuevas Características (Added)
- **Proyecto ZafiroCore**:
  - Se integró **ZafiroCore** (anteriormente BlueCore) como proyecto destacado en la sección de "Últimos Proyectos".
  - **Recurso Gráfico**: Creación de `zafirocore.webp` optimizado a partir de captura de pantalla del dashboard.
  - **Datos del Proyecto**: Actualización de `Projects.jsx` con descripción, tecnologías (React, Vite, Gemini API) y estado.
- **Navegación Mejorada**:
  - Implementación de `IntersectionObserver` en `App.jsx` para resaltar la sección activa en el menú de navegación.
  - Control dinámico de la visibilidad del botón `ScrollUp`.

### 🛠️ Cambios Técnicos (Changed)
- **Refactorización de CSS (`style.css`)**:
  - Eliminación de gradientes excesivos ("holographic-border", "text-gradient") para limpiar la interfaz.
  - Implementación de variables CSS para la paleta "Digital Alchemy".
  - Rediseño de `.projects_card`:
    - Cambio de bordes brillantes a un estilo más sobrio y profesional.
    - Nuevo efecto hover con elevación y sombra sutil (`box-shadow`).
    - Overlay de imagen con color sólido (`rgba`) y `backdrop-filter: blur`.
  - Corrección manual de errores de sintaxis CSS (bloques mal cerrados) que surgieron durante la migración de estilos.

### 🐛 Correcciones (Fixed)
- **Sintaxis CSS**: Se abordaron errores de compilación en Vite causados por estructuras CSS rotas (`expected {`).
- **Rutas de Imágenes**: Ajuste de imports en `Projects.jsx` para incluir la nueva imagen de ZafiroCore.

### 🤖 Discusiones sobre IA (Planned/Discussed)
- **Integración de Modelos de IA**:
  - Análisis de opciones para integrar IA en el portafolio y en el flujo de trabajo (Antigravity).
  - **Opciones Gratuitas**: Recomendación de usar **Ollama** (local) o **OpenAI GPT-3.5** (trial) para funcionalidades de chat sin coste.
  - **Opciones de Pago**: Evaluación de **Gemini Pro** para tareas complejas de refactorización de código y análisis de errores.
  - **Arquitectura Propuesta**: Creación de un wrapper `run_ai_model` para comunicar el frontend (o el agente) con el modelo de IA.

### 📄 Documentación Generada
- `digital_alchemy_concept.md`: Definición conceptual de la nueva marca personal.
- `frontend_pro_palette_implementation.md`: Guía de implementación de la paleta anterior (transición).
- `changelog-v2.md`: Este archivo de registro.

## [Sesión Actual] - 2025-11-23

### 🐛 Correcciones Críticas (Hotfixes)
- **Scroll Bloqueado (Fixed)**:
  - Se identificó y corrigió un bug en `ProjectModal.jsx` donde el estilo `overflow: hidden` se aplicaba al `body` pero no se limpiaba correctamente al cerrar el modal en todos los casos.
  - **Solución**: Cambio de `document.body.style.overflow = 'unset'` a `document.body.style.overflow = ''` para garantizar compatibilidad y limpieza.
- **Error de Ejecución (Fixed)**:
  - Se solucionó un crash en la aplicación causado por una importación faltante en `Projects.jsx`.
  - **Detalle**: El icono `geminiIcon` se usaba en los datos de *ZafiroCore* pero no estaba importado. Se añadió `import geminiIcon from '../assets/img/Google-gemini-icon.svg';`.

### 🔍 Verificación y Estabilidad
- **Auditoría de CSS**: Se revisó `style.css` en busca de propiedades `overflow` maliciosas que pudieran afectar el scroll.
- **Validación de Componentes**: Se verificó que `Hero.jsx`, `FutureProjects.jsx` y `Lab.jsx` no introdujeran bloqueos de scroll adicionales.

## [Sesión Actual] - 2026-04-11

### 🚀 Refactorización Mayor a Arquitectura Moderna (React + Tailwind)
- **Eliminación Total de `useScrollReveal`**: Se erradicó el hook *legacy* de todos los componentes (`Experience`, `Services`, `Manifesto`, `FutureProjects`, `Contact`) para limpiar la base de código y permitir animaciones más fluidas con *Framer Motion*.
- **Inyección de Sistema de Diseño Premium ("Ruta Madrid" Pattern)**:
  - Migración a **Tailwind CSS v4** mediante directivas en `style.css`.
  - Configuración de la tipografía `Outfit` como pilar estético general en `index.html`.
  - Depuración de errores críticos de sintaxis en `style.css` (llaves huérfanas) generados por el parseo estricto de PostCSS/Tailwind.

### ✨ Rediseño Orientado a Conversión (UX/CRO)
- **Nuevo `TerminalHero.jsx` (Hero de Alta Conversión)**:
  - Sustitución de la clásica *terminal interactiva* por una estructura *Glassmorphism* optimizada para lectura rápida y demostración del valor (CRO).
  - Implementación de pilares visibles: **UX/UI Premium**, **WebOps & React**, e **Integración de Inteligencia Artificial**.
  - Inclusión de distintivo dinámico de disponibilidad ("Proyectos Remote") y CTAs claros.
