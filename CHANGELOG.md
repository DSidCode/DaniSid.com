# CHANGELOG - DaniSid Personal

Todos los cambios notables de este proyecto serán documentados en este archivo.

## [1.1.0] - 2026-07-05 - Mejora de Accesibilidad y Filosofía B2B

### Added (Añadido)
- **Sección de Contacto (Canal de Comunicación):** Nueva sección dedicada antes del footer con tarjetas interactivas (Glassmorphism B2B) para Email, WhatsApp y LinkedIn.
- **Iconografía Dedicada:** Integración del icono `MessageCircle` (Lucide-React) para la interacción directa por WhatsApp.

### Changed (Modificado)
- **Actualización de Enlaces:** Migración global (Navbar, Contacto, Footer) de los enlaces de LinkedIn a la nueva URL corporativa (`/in/danisidcode/`).
- **Navegación Dinámica:** Añadido el enlace ancla `#contacto` en el menú principal para facilitar el embudo de comunicación.

## [1.0.0] - 2026-06-19 - The B2B Luxury Update

### Added (Añadido)
- **Narrativa de Marca:** Se implementó `BRAND_NARRATIVE.md` como manifiesto central del proyecto.
- **Sección de Identidad de Marca:** Nueva tarjeta interactiva en el Footer para exhibir la paleta cromática (Mente, Alma, Lujo).
- **Trinidad Cromática:** Introducción de las nuevas variables CSS: `Cian Láser`, `Oro Puro` y `Rojo Escarlata`.
- **Degradado Cyber:** Nuevo utility class `.text-gradient-cyber` para contrastes violentos y elegantes.
- **Enlaces a Producción:** Botones de enlace real para `El Rincón de Tetuán` y `Proyecto Antología`.
- **Tipografía de Impacto:** Implementación de Google Font `Outfit` en pesos máximos (hasta 900) para autoridad visual.

### Changed (Modificado)
- **Refactorización del Hero:** Se pasó de estética Hacker a estética "Quiet Luxury" y Arquitectura B2B.
- **Copywriting Corporativo:** Textos de nivel CTO que reflejan "El Protocolo de la Excelencia", destacando la fusión de ingeniería y pasión.
- **Laboratorio I+D:** Renombre y re-enfoque de los proyectos experimentales (Motor Quimera IA, Eddy Soundscapes) para demostrar liderazgo técnico y visión Data Engineering.
- **Botones Call To Action:** Modificados para apuntar al Atelier de Maison Quintessence.
- **Corrección de Dominio:** Actualizados los enlaces internos para apuntar a la URL correcta en producción (`maison-quintessence.netlify.app`).

### Removed (Eliminado)
- **Estética Hacker Limitante:** Se eliminaron las fuentes Serif delgadas que restaban peso corporativo a favor de una tipografía geométrica contundente.
- **Código Antiguo:** La rama `main` ahora contiene exclusivamente la arquitectura en React/Vite. El código Legacy Matrix se conserva en la rama `master`.
