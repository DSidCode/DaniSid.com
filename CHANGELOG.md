# Informe de Avance del Proyecto Web

Este documento resume las mejoras y acciones realizadas en el proyecto `danisid.com`.

### 1. Análisis y Planificación

- Se analizó la estructura de archivos y los logs del servidor.
- Se detectó tráfico de bots buscando vulnerabilidades de WordPress (`xmlrpc.php`) y una estructura de archivos desorganizada.
- Se creó un plan de acción documentado en `PLAN_DE_MEJORAS.md`.

### 2. Mejoras de Seguridad

- **Bloqueo de Bots**: Se creó un archivo `.htaccess` en la raíz del proyecto.
- Se añadió una regla para denegar todas las peticiones al archivo `xmlrpc.php`, eliminando eficazmente el tráfico de bots y reduciendo la carga innecesaria del servidor.

### 3. Organización de Archivos

- **Limpieza del Directorio Raíz**: Se reorganizaron los archivos HTML que estaban sueltos en la carpeta principal para mejorar la estructura del proyecto.
- Se creó una nueva carpeta `cv/`.
- Se movieron todos los archivos relacionados con los currículums (`cv.html`, `cv-diseno-dev-v1.html`, etc.) a la carpeta `cv/`.
- Se movieron los archivos personales (`Dani.html`, `To-my-dad.html`, etc.) a la carpeta `personal/` existente.

### 4. Corrección de Enlaces Rotos

- Se buscaron los enlaces que se rompieron debido a la reorganización de archivos.
- Se identificaron y corrigieron dos enlaces en `index.html` que apuntaban a la antigua ubicación de `cv.html`, actualizándolos a la nueva ruta `cv/cv.html`.

### 5. Integración con Git y GitHub

- **Inicialización de Repositorio**: Se inicializó un repositorio de Git local en el directorio del proyecto.
- **Archivo `.gitignore`**: Se creó un archivo `.gitignore` para excluir la carpeta `logs/` del control de versiones.
- **Primer Commit**: Se añadieron todos los archivos del proyecto y se realizó un commit inicial para establecer una línea base del proyecto.
- **Conexión a GitHub**: 
    - Se intentó conectar y subir el proyecto al repositorio remoto `https://github.com/DSidCode/portafoliowebSid1.git`.
    - Se diagnosticó un fallo de autenticación debido a la falta de un gestor de credenciales en el entorno.
    - Se cambió la estrategia de autenticación de HTTPS a SSH.
- **Configuración de Clave SSH**: Se guio al usuario para generar una clave SSH y añadirla a su cuenta de GitHub.
- **Subida Exitosa**: Se cambió la URL del repositorio remoto a su versión SSH (`git@github.com:DSidCode/portafoliowebSid1.git`) y se subió con éxito todo el proyecto a GitHub.

**Estado Actual**: El proyecto está ahora más seguro, mejor organizado y completamente versionado en GitHub.

### 6. Automatización del Despliegue (CI/CD) con GitHub Actions

- **Objetivo**: Eliminar la necesidad de usar FileZilla para las actualizaciones, automatizando el proceso de despliegue al hosting de IONOS.
- **Implementación**:
    - Se creó un archivo de flujo de trabajo en `.github/workflows/deploy.yml`.
    - Se configuró la acción para activarse con cada `push` a la rama `main`.
    - Se utilizó la acción `SamKirkland/FTP-Deploy-Action` para subir los archivos del repositorio al servidor FTP.
- **Seguridad de Credenciales**:
    - Se crearon "Repository Secrets" en GitHub (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`) para almacenar de forma segura las credenciales de IONOS, evitando exponerlas en el código.

### 7. Expansión de Contenido y Proyectos

- **Proyecto "Antología"**:
    - Se añadió una nueva carpeta `antologia/` para albergar un proyecto web dedicado a la escritura poética del autor.
    - Se creó un archivo `README.md` específico para documentar el proyecto "Del Amor Y Otras Nostalgias".
    - Se integró el proyecto en la página principal (`index.html`) añadiendo una nueva tarjeta en la sección de "ULTIMOS PROYECTOS".

**Estado Actual**: El proyecto no solo está organizado y versionado, sino que ahora cuenta con un **flujo de despliegue automático y profesional**. El contenido se ha expandido para reflejar la faceta de escritor del autor, haciendo el portafolio más completo.

---

## 8. Fase 2: Profesionalización y Escalabilidad

Se inicia una nueva fase enfocada en refinar la marca personal, mejorar la experiencia de usuario y preparar el proyecto para futuras expansiones.

- **Planificación Estratégica**:
    - Se creó el documento `PLAN_DE_TRABAJO_FASE_2.md` para guiar las siguientes etapas del desarrollo.
    - Se definió una nueva filosofía de proyecto ("El Alma Digital") para unificar el diseño y la narrativa del sitio.

- **Corrección y Verificación de CI/CD**:
    - Se diagnosticó que el workflow de GitHub Actions no se estaba ejecutando.
    - **Solución**: Se corrigió el nombre de la carpeta de `.github/workflws` a `.github/workflows`.
    - **Resultado**: Se realizó un `push` de prueba que activó con éxito el despliegue automático, confirmando que el pipeline de CI/CD es 100% funcional.

- **Mejoras de UI/UX en la Página Principal (`index.html`)**:
    - **Claridad en CTA**: Se modificó el texto del botón "Descargar CV" a "Ver CV" para una llamada a la acción más precisa.
    - **Expansión del Portafolio**: Se añadió una nueva tarjeta de proyecto para "Aventuras de Adrián", destacando su valor pedagógico y técnico.
    - **Refactorización de la Barra de Habilidades**:
        - Se reemplazaron los iconos genéricos por **logos SVG personalizados** para reflejar una identidad de marca más fuerte y profesional (HTML, CSS, JS, Tux, Kali, Gemini, VS Code).
        - Se corrigieron los estilos CSS para reparar el diseño y se añadió el código JavaScript necesario para la funcionalidad del botón.
        - Se implementó una barra secundaria oculta con un botón "Ver más" (`+`) para mostrar el resto de las habilidades (React, Figma, etc.), manteniendo la interfaz limpia y organizada.
    - **Categorización de Proyectos**:
        - Se introdujeron subtítulos ("Desarrollo Web y Tecnológico" y "Diseño Visual y Gráfico") en la sección de proyectos para organizar y diferenciar claramente las áreas de especialización.

**Estado Actual**: El proyecto ha entrado en una fase de refinamiento profesional. El despliegue automático está verificado y se han implementado mejoras significativas en la interfaz y estructura de la página principal para reflejar mejor el enfoque tecnológico y la amplitud de habilidades del autor.

---

## 9. Refactorización de la Documentación

- **Objetivo**: Estandarizar la documentación del proyecto siguiendo las mejores prácticas de la industria del software.
- **Acciones**:
    - Se ha renombrado `PROYECTO_DANISID_LOG.md` a `README.md`, convirtiéndolo en la puerta de entrada principal al repositorio. Este archivo ahora explica la estrategia, el diagnóstico y la evolución del proyecto.
    - Se ha renombrado `INFORME_PROGRESO.md` a `CHANGELOG.md` para que sirva como un registro cronológico detallado de todos los cambios implementados.
- **Resultado**: La documentación está ahora más organizada, es más clara y sigue las convenciones estándar, separando la visión estratégica (`README.md`) del historial de cambios (`CHANGELOG.md`).

---

## 10. Depuración y Estabilización del Despliegue Automático (CI/CD)

- **Objetivo**: Resolver los fallos persistentes en el flujo de despliegue automático a IONOS.
- **Diagnóstico**: A pesar de que el workflow se activaba, el despliegue fallaba. El análisis de los logs reveló problemas con la acción de despliegue y el método de autenticación.
- **Acciones y Soluciones**:
    - **Migración de FTP a SFTP con Clave SSH**: Se abandonó la autenticación por usuario/contraseña (FTP) en favor de un método más seguro y robusto utilizando una clave SSH (SFTP). Se generó un par de claves y se configuraron los secretos de GitHub (`SSH_PRIVATE_KEY`).
    - **Iteración y Corrección de la Acción de Despliegue**:
        - Se probó con la acción `appleboy/sftp-action`, que resultó ser incorrecta o inexistente, causando fallos.
        - Se corrigió el flujo para usar la acción correcta y mantenida: `appleboy/scp-action@v0.1.4`.
    - **Ajuste de Parámetros**: Se identificó que faltaban parámetros esenciales como `host` y `username` en una de las versiones, lo que impedía la conexión. Se restauraron todos los parámetros necesarios (`host`, `username`, `key`, `port`).
    - **Habilitación de Depuración**: Se añadió el parámetro `debug: true` a la acción para obtener logs detallados, lo que fue crucial para confirmar que el problema no residía en la configuración del servidor o las credenciales, sino en la propia configuración del workflow.
- **Resultado**: El pipeline de CI/CD es ahora completamente funcional, estable y seguro. Cada `push` a las ramas `main` o `master` despliega automáticamente el sitio en el servidor de IONOS utilizando autenticación por clave SSH.

---

## 11. Limpieza Post-Depuración del Workflow

- **Objetivo**: Finalizar la configuración del despliegue automático y mantener los logs limpios.
- **Acción**: Se eliminó el parámetro `debug: true` del archivo `.github/workflows/deploy.yml`.
- **Resultado**: El workflow de despliegue sigue siendo funcional, pero ahora los registros de ejecución serán más concisos, mostrando solo la información esencial o los errores, lo que facilita su supervisión a largo plazo.