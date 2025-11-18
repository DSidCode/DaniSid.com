# Informe de Avance del Proyecto Web

---

## 37. Profesionalización del Ecosistema y Expansión de Proyectos

- **Objetivo**: Dar un salto cualitativo en la estructura del proyecto, estableciendo las bases para un ecosistema de aplicaciones web profesionales y documentadas.

- **Acciones Realizadas**:
    - **Creación de Hoja de Ruta Central (`TAREAS_PENDIENTES.md`)**: Se ha creado un documento maestro para centralizar todas las tareas, ideas y la dirección estratégica de `danisid.com` y sus subproyectos.
    - **Inicio Formal de Nuevos Proyectos**:
        - Se han creado las carpetas y los archivos iniciales (`README.md`, `CHANGELOG.md`) para los nuevos proyectos estratégicos: `BlueCore`, `QuimeraAlchemist` y `guitarApp`. Esto establece una base de documentación profesional desde el inicio.
    - **Planificación de Infraestructura de Subdominios**:
        - Se ha creado una guía técnica (`GUIA_SUBDOMINIOS.md`) que detalla el proceso paso a paso para desplegar cada nuevo proyecto en su propio subdominio (ej. `bluecore-ai.danisid.com`) utilizando Netlify y Cloudflare.
    - **Actualización del Estado de Proyectos en Migración**:
        - Se ha documentado formalmente que el proyecto `Antologia` ya ha sido migrado a React y está operativo.
        - Se ha registrado que el proyecto `Aventuras` está en proceso de migración a React.

- **Resultado**: El proyecto ha evolucionado de un portafolio único a un ecosistema planificado. Se han sentado las bases documentales y estratégicas para la construcción y despliegue sistemático de múltiples aplicaciones interconectadas, reflejando un enfoque de ingeniería de software más maduro y profesional.

---

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
- **Resultado**: La configuración del workflow se ha estabilizado para usar el método de autenticación correcto (SFTP con clave SSH) y los parámetros necesarios. El siguiente paso es resolver el error de autenticación a nivel de servidor.

---

## 11. Depuración de Autenticación SSH y Configuración del Servidor

- **Diagnóstico**: Los logs detallados obtenidos con `debug: true` mostraron un error claro: `ssh: handshake failed: ssh: unable to authenticate`. Esto confirma que el servidor de IONOS está rechazando la clave SSH que GitHub Actions le presenta.
- **Acciones y Soluciones**:
    - **Ajuste del Directorio de Destino**: Se cambió proactivamente el parámetro `target` de `/` a `/htdocs` en el archivo `deploy.yml`, ya que es el directorio web raíz estándar en los hostings de IONOS.
    - **Enfoque en el Servidor**: Se determinó que el problema reside en la configuración del servidor o en la gestión de las claves. El foco se ha desplazado a la conexión directa con el servidor (vía terminal en Kali Linux) para:
        1.  Verificar que la clave pública (`id_rsa.pub`) está correctamente añadida al archivo `~/.ssh/authorized_keys`.
        2.  Corregir los permisos de los archivos y directorios con los comandos `chmod 700 ~/.ssh` y `chmod 600 ~/.ssh/authorized_keys`, un requisito de seguridad indispensable para SSH.
- **Estado Actual**: El workflow permanece en modo de depuración, a la espera de que se completen las verificaciones y correcciones en el servidor para solucionar el fallo de autenticación.

---

## 21. Optimización y Refactorización (Fase 2)

- **Objetivo**: Mejorar la visibilidad en redes, el rendimiento, la estructura de los sub-proyectos y la consistencia de la marca.

- **Metadatos para Redes Sociales**:
    - Se añadieron metadatos de **Open Graph (Facebook, WhatsApp)** y **Twitter Cards** a la página principal (`index.html`) y a la sección `human-design-reports/index.html`.
    - Esto asegura que al compartir los enlaces, se muestre una previsualización rica con título, descripción e imagen, mejorando drásticamente el impacto visual.

- **Optimización de Rendimiento y UX**:
    - Se eliminó el atributo `loading="lazy"` de las primeras imágenes de proyectos en `index.html` para solucionar un problema de carga lenta durante el scroll, mejorando la fluidez de la experiencia de usuario.

- **Mejoras en Sub-Proyectos**:
    - **Antología**:
        - Se añadió un enlace de retorno al portafolio principal en el pie de página.
        - Se reemplazó el formulario de contacto no funcional por botones de acción directa a **WhatsApp, Instagram y correo electrónico**, ofreciendo una solución más efectiva.
    - **Human Design Reports**:
        - Se añadió un pie de página consistente con la firma "Creado por DaniSid" y un enlace al portafolio en los informes de Ángela y Eva.

- **Refactorización del Proyecto `Cyberpunk`**:
    - **Estructura de Archivos**: Se refactorizó completamente el proyecto para usar una estructura de carpetas profesional (`assets/css`, `assets/js`, `assets/img`), mejorando la organización y mantenibilidad.
    - **Limpieza de Archivos**: Se eliminaron todos los archivos de configuración obsoletos de Firebase (`.firebaserc`, `firebase.json`, `404.html`), ya que el proyecto no utiliza esta plataforma.
    - **Expansión de Contenido**:
        - Se amplió la sección "Ciberherramientas" para incluir nuevos logos de habilidades: Kali Linux, VS Code, WordPress, y herramientas de IA (Gemini, Grok, OpenAI, Deepseek).
        - Se añadieron logos de software de diseño de código abierto (Kdenlive, Inkscape, GIMP, Krita).
    - **Depuración de CSS (Aciertos y Desaciertos)**:
        - Se intentó aplicar un efecto de `hover` (brillo y color) a los nuevos iconos de IA para que coincidiera con el resto.
        - **Desacierto**: Los intentos iniciales de refactorización del CSS rompieron el efecto de escalado y no lograron el resultado deseado debido a conflictos en las reglas de `filter`.
        - **Acierto (Solución Pragmática)**: Se revirtieron los cambios en el CSS al estado original y se tomó la decisión de mover los iconos de IA a la cuadrícula principal de herramientas para mantener la consistencia visual y funcional sin necesidad de CSS complejo.

## 12. Resolución Final del Despliegue Automático y Limpieza

- **Diagnóstico Final**: La ejecución del comando `ls -l` en el servidor de IONOS reveló la causa raíz del problema de autenticación:
    1.  **Error Tipográfico**: El archivo de claves se llamaba `autho**tiz**ed_keys` en lugar del nombre correcto `autho**riz**ed_keys`.
    2.  **Permisos Incorrectos**: El archivo tenía permisos `755` (`-rwxr-xr-x`), lo cual es inseguro y provoca que SSH ignore el archivo.
- **Solución Aplicada**:
    - Se renombró el archivo al nombre correcto con `mv authotized_keys authorized_keys`.
    - Se corrigieron los permisos a `600` (`-rw-------`) con `chmod 600 authorized_keys`.
- **Limpieza del Workflow**: Se eliminó la línea `debug: true` del archivo `.github/workflows/deploy.yml`.
- **Resultado Técnico**: Se logró que el pipeline de GitHub Actions se conectara y autenticara correctamente con el servidor de IONOS vía SFTP.
- **Conclusión Estratégica**: A pesar del éxito técnico, se concluyó que el despliegue automatizado en un hosting tradicional como IONOS no es una solución profesional ni escalable a largo plazo.

---

## 13. Anexo: Guía Detallada de la Solución de Autenticación SSH

Esta sección documenta en detalle el diagnóstico y la solución del error de autenticación `ssh: handshake failed`, que impedía el despliegue automático.

### Diagnóstico del Error

El error completo era: `ssh: handshake failed: ssh: unable to authenticate, attempted methods [none publickey], no supported methods remain`.

- **Significado**: El servidor de despliegue (IONOS) y el runner de GitHub Actions se comunicaban, pero el servidor rechazaba la conexión porque no podía autenticar la identidad del runner usando la clave SSH proporcionada.

### Pasos para la Solución

La solución se centró en verificar y corregir la configuración de las claves SSH entre GitHub y el servidor.

1.  **Verificación de los Secretos de GitHub**:
    *   `FTP_SERVER`: Confirmar que el nombre de host era el correcto para la conexión SFTP.
    *   `FTP_USERNAME`: Asegurarse de que el nombre de usuario correspondía con el del servidor.
    *   `SSH_PRIVATE_KEY`: Verificar que la clave privada estuviera correctamente configurada en los secretos del repositorio.

2.  **Formato Correcto de la Clave Privada**:
    *   La clave `SSH_PRIVATE_KEY` debe estar en formato PEM, comenzando con `-----BEGIN OPENSSH PRIVATE KEY-----` (o similar).
    *   Es crucial que no contenga espacios extra ni saltos de línea al principio o al final al ser copiada en los secretos de GitHub.

3.  **Configuración del Servidor (Causa Raíz del Problema)**:
    *   **Generación de Claves**: Si no existían, se debía generar un nuevo par de claves SSH con `ssh-keygen -t rsa -b 4096 -C "tu_email@ejemplo.com"`.
    *   **Autorización de la Clave Pública**: El contenido de la clave pública (`~/.ssh/id_rsa.pub`) debe ser añadido al archivo `~/.ssh/authorized_keys` en el servidor.
    *   **Errores Encontrados y Corregidos**:
        *   **Nombre de archivo incorrecto**: El archivo se llamaba `authotized_keys` en lugar de `authorized_keys`.
        *   **Permisos incorrectos**: El archivo tenía permisos `755`. Se corrigieron a `600` (`chmod 600 ~/.ssh/authorized_keys`) y la carpeta contenedora a `700` (`chmod 700 ~/.ssh`) para cumplir con los estrictos requisitos de seguridad de SSH.

Una vez que los secretos en GitHub estuvieron correctos y, fundamentalmente, el archivo `authorized_keys` en el servidor tuvo el nombre y los permisos adecuados, el despliegue automático comenzó a funcionar correctamente.

---

## 14. Bitácora de Conversación: Hacking y Migración Web

Esta sección resume una conversación clave sobre la conexión con el hosting, la naturaleza de los archivos de configuración SSH y las recomendaciones para el despliegue de sitios estáticos.

### Conexión con Hosting (Ionos)

-   **Problema**: No se pudo establecer la conexión con SSH. Error: `Connection closed by...`
-   **Diagnóstico**: El hosting de Ionos solo permite conexiones SFTP para transferencia de archivos, no SSH puro.
-   **Solución**: Usar el comando `sftp` en lugar de `ssh` con el formato `sftp usuario@servidor`.
-   **Comandos útiles de SFTP**:
    -   `ls`: Listar archivos en el servidor remoto.
    -   `ls -a`: Listar todos los archivos, incluidos los ocultos.
    -   `put [archivo]`: Subir un archivo al servidor.

### Archivos de Configuración de SSH

-   **Archivos**: `id_rsa` (clave privada) y `authorized_keys` (clave pública en el servidor).
-   **Función**: Son archivos de seguridad para autenticarte con un servidor de forma segura, sin necesidad de contraseñas. No requieren interacción manual, a menos que necesites depurar o añadir una nueva clave.

### Proveedor de Hosting y Despliegue (CI/CD)

-   **Problema**: Ionos cobra por el servicio de despliegue (deploy) automático, un proceso que se puede automatizar con programación.
-   **Diagnóstico**: Ionos es un hosting tradicional; tu proyecto es un sitio estático.
-   **Recomendación**: Migrar a plataformas como Netlify o Vercel.
-   **Beneficios de Netlify/Vercel**:
    -   Despliegue automático gratuito: Se actualiza al subir cambios a GitHub.
    -   Economía: Planes gratuitos muy generosos.
    -   Velocidad: Uso de CDN globales para una carga ultrarrápida.
    -   Simplicidad: Interfaz de usuario intuitiva.
    -   Profesionalismo: Son las plataformas estándar para proyectos estáticos.

---

## 15. Decisión Estratégica: Abandono de IONOS y Migración a Plataformas Modernas

- **Diagnóstico Final del Despliegue**: Aunque se resolvieron los problemas técnicos de autenticación SSH, se ha determinado que el despliegue automatizado en IONOS no es una solución viable. La plataforma parece estar diseñada para desincentivar o cobrar como un servicio extra este tipo de automatización, lo cual va en contra de las prácticas de desarrollo modernas.

- **Nueva Dirección Estratégica**: En línea con el objetivo de ser un profesional en automatización y desarrollo, se ha tomado la decisión de **migrar el proyecto `danisid.com` a una plataforma de hosting moderna** como **Netlify** o **Vercel**.

- **Justificación**:
    - **Profesionalismo y Eficiencia**: Estas plataformas ofrecen integración nativa y gratuita con GitHub, permitiendo un flujo de CI/CD real, profesional y sin fricciones. Esto facilita la resolución de bugs y la implementación de nuevas funcionalidades.
    - **Alineación con Metas**: Utilizar las herramientas estándar de la industria es fundamental para el crecimiento profesional y para reflejar las capacidades de automatización que se buscan dominar.
    - **Visión del Proyecto**: `danisid.com` es más que un sitio web; es "el alma digital", una ventana al potencial como creativo, desarrollador y ser humano. Su infraestructura debe reflejar esta visión de futuro, modernidad y excelencia técnica.

- **Próximo Paso**: Iniciar el proceso de despliegue en una de las nuevas plataformas y reconfigurar el dominio.

---

## 16. Migración de Hosting: Despliegue Exitoso en Netlify y Migración de Dominio

- **Hito Alcanzado**: El proyecto `danisid.com` ha sido desplegado con éxito en **Netlify**.
- **Resultado**: El sitio ahora está en vivo y funcionando en una infraestructura moderna, con despliegues automáticos directamente desde la rama `main` del repositorio de GitHub. El antiguo flujo de trabajo de despliegue a IONOS (`deploy.yml`) ha sido desactivado.
- **Migración de Dominio Completada**: Se han cambiado los "Servidores de Nombres" (Nameservers) en el panel de control de IONOS para que apunten a los proporcionados por Netlify. El dominio `danisid.com` ahora es gestionado por Netlify.
- **Limpieza de Secretos**: Se han eliminado los secretos obsoletos (`FTP_SERVER`, `FTP_USERNAME`, `SSH_PRIVATE_KEY`, etc.) del repositorio de GitHub, ya que no son necesarios para el despliegue en Netlify, mejorando la seguridad y limpieza del proyecto.

---

## 17. Sincronización del Repositorio y Resolución de Conflictos Git

Esta sección documenta el proceso de sincronización del repositorio local con los cambios realizados en remoto (desde otro dispositivo), superando varios desafíos comunes de Git.

- **Objetivo**: Actualizar el repositorio local con los cambios del repositorio remoto en GitHub usando `git pull`.

- **Proceso y Soluciones**:
    1.  **Dificultad 1: Rama Incorrecta.**
        -   **Problema**: El comando `git pull` falló porque la rama principal en el repositorio local se llamaba `master` en lugar de `main`.
        -   **Solución**: Se especificó la rama correcta explícitamente: `git pull origin master`.

    2.  **Dificultad 2: Conflicto de Sobrescritura de Archivos.**
        -   **Problema**: Git detectó que el archivo `deploy.yml` (eliminado en remoto) sería sobrescrito, impidiendo la fusión.
        -   **Solución**: Se descartó la versión local del archivo en conflicto para aceptar la versión del servidor con `git checkout -- .github/workflows/deploy.yml`.

    3.  **Dificultad 3: Ramas Divergentes.**
        -   **Problema**: Una vez resuelto el conflicto, Git identificó que los historiales de commits local y remoto se habían separado, requiriendo una estrategia de fusión manual.
        -   **Solución Final**: Se utilizó la opción `rebase` para crear un historial de commits limpio y lineal. El comando `git pull --rebase origin master` descargó los cambios remotos y aplicó los commits locales "encima" de ellos.

- **Resultado**: Se logró una sincronización exitosa del repositorio. Este proceso sirvió como un ejercicio práctico en la resolución de conflictos de Git, incluyendo la corrección de nombres de ramas, la gestión de archivos en conflicto y la elección de una estrategia de fusión (`rebase`) para mantener un historial limpio.

---

## 18. Consolidación en Netlify y Planificación de Nuevas Tareas

- **Hito Confirmado**: El despliegue en Netlify es completamente funcional y estable. Múltiples cambios realizados localmente se han reflejado correctamente en producción, validando el flujo de CI/CD.

- **Nuevas Tareas y Decisiones Estratégicas**:
    - **Gestión de Infraestructura**: Se ha añadido la tarea de cancelar formalmente los servicios de hosting con IONOS para optimizar costes, ya que la migración a Netlify ha sido un éxito.
    - **Ampliación de Skills**: Se planea añadir más logos a la barra de habilidades secundaria para reflejar competencias en software de edición de video y diseño (After Effects, Premiere Pro, Krita, Inkscape, GIMP, Kdenlive).
    - **Actualización de Proyectos**:
        - Las imágenes de los proyectos "Antología" y "Aventuras de Adrián" serán reemplazadas por screenshots reales de las webs para dar una previsualización más fiel.
        - Se ha añadido un nuevo proyecto al portafolio: "Publicidad Web para Yedra Disco Pub", enfocado en diseño y marketing digital.
    - **Corrección de Responsividad**: Se ha solucionado un problema de alineación en la sección "hero" de la página principal para que se visualice correctamente en dispositivos de escritorio.

- **Estado Actual**: El proyecto se encuentra en una fase de crecimiento de contenido y refinamiento de la UI, con una infraestructura de despliegue robusta y automatizada.

---

## 19. Expansión de Proyectos y Funcionalidades (Fase 2)

- **Objetivo**: Profesionalizar los sub-proyectos, añadir nuevas funcionalidades y mejorar la presentación del portafolio principal.

- **Refactorización del Proyecto `Antologia`**:
    - Se movió todo el código CSS y JavaScript que estaba en línea a archivos externos (`assets/css/style.css`, `assets/js/script.js`), mejorando la mantenibilidad y el rendimiento.
    - Se implementó un formulario de contacto funcional utilizando EmailJS, reemplazando el enlace `mailto:`.

- **Creación del Proyecto `human-design-reports`**:
    - Se creó desde cero una nueva sección dedicada a los informes de Diseño Humano.
    - Se desarrolló una página `index.html` con contenido informativo y un formulario de solicitud de informes.
    - Se estructuró el proyecto con sus propios archivos CSS y JavaScript, siguiendo las mejores prácticas.
    - Se configuró EmailJS con una nueva plantilla de correo personalizada para gestionar las solicitudes de informes.

- **Mejoras en la Página Principal (`index.html`)**:
    - **Corrección de Rutas de Imágenes**: Se ajustaron las rutas de las imágenes de previsualización de los proyectos para que se mostraran correctamente.
    - **Ampliación de Habilidades por Proyecto**: Se añadieron iconos de tecnologías y herramientas específicas (VS Code, Linux, Terminal, Premiere, After Effects, GIMP, Krita, etc.) a las tarjetas de los proyectos correspondientes.
    - **Corrección de Video**: Se solucionó un problema de visualización con el video de "Motion Graphics", asegurando que se adapte correctamente al contenedor sin distorsionarse.
    - **Mejora de Accesibilidad**: Se actualizó la etiqueta `aria-label` del video para describir su contenido de forma precisa.
    - **Actualización de Enlaces**: Se corrigió el enlace en la sección "Laboratorio" para que apunte correctamente a la nueva página `human-desing-reports/index.html`.

- **Estado Actual**: El portafolio ha crecido significativamente con una nueva sección completamente funcional. Los proyectos existentes han sido mejorados en estructura y contenido, y la presentación general es más detallada y profesional.

---

## 20. Depuración y Verificación Final de Funcionalidades

- **Objetivo**: Asegurar que todas las nuevas implementaciones estén 100% operativas y libres de errores.

- **Depuración del Formulario `human-design-reports`**:
    - **Diagnóstico**: Se detectó un error `The template ID not found` al probar el formulario de solicitud de informes.
    - **Solución**: Se verificó el ID de la plantilla de EmailJS y se actualizó en el archivo `human-desing-reports/assets/js/script.js` con el valor correcto (`template_ia8ly1n`).
    - **Resultado**: El formulario ahora funciona correctamente, enviando las solicitudes al correo configurado.

- **Estado Actual**: Todas las funcionalidades implementadas en la Fase 2 han sido verificadas y están estables. El proyecto está listo para continuar con las siguientes tareas de mejora.

---

## 21. Optimización de Rendimiento del Proyecto Cyberpunk

- **Objetivo**: Mejorar el rendimiento del sub-proyecto `cyberpunk`, reduciendo el tiempo de carga inicial y el consumo de recursos de las animaciones.

- **Acciones Realizadas**:
    - **Optimización de Carga de Imágenes**:
        - **Acción**: Se aplicó el atributo `loading="lazy"` a todas las imágenes de la sección "Ciberherramientas" (`#tools`) en `projects/cyberpunk/index.html`.
        - **Beneficio**: Reduce drásticamente el tiempo de carga inicial de la página, ya que los iconos de habilidades solo se descargan cuando el usuario se desplaza hacia ellos.

    - **Optimización de Animaciones CSS**:
        - **Acción**: Se añadió la propiedad `will-change: transform;` a las clases `.hud-overlay` y `.glitch` en `projects/cyberpunk/assets/css/styles.css`.
        - **Beneficio**: Le indica al navegador que se prepare para animar estos elementos, permitiéndole optimizar el renderizado y logrando que efectos constantes como el `drone` y el `glitch` consuman menos CPU/GPU.

**Estado Actual**: El proyecto `cyberpunk` es ahora más eficiente, ofreciendo una experiencia más fluida sin sacrificar su estética visual.

---

## 22. Modernización de la Estética a Cyberpunk

- **Objetivo**: Renovar la identidad visual del portafolio principal (`danisid.com`) para alinearla con una estética cyberpunk más vibrante y moderna, inspirada en el sub-proyecto `cyberpunk`.

- **Acciones Realizadas**:
    - **Nueva Paleta de Colores**:
        - **Acción**: Se modificaron las variables de color en `assets/css/style.css` para introducir una paleta más "ácida" con un cian eléctrico, un magenta neón y un verde ácido como color de acento.
        - **Beneficio**: El sitio ahora tiene una apariencia más dinámica y llamativa.

    - **Efecto de Brillo Neón**:
        - **Acción**: Se implementó un `box-shadow` multicolor en el `hover` de todas las tarjetas de proyecto, servicios y experiencia, combinando el cian y el verde neón para un efecto de brillo más profundo.
        - **Beneficio**: Mejora la interactividad y refuerza la estética futurista.

    - **Animación de Título con `glitch`**:
        - **Acción**: Se aplicó una animación de `glitch` avanzada al título principal ("Daniel Sid"), utilizando `clip-path` y tres capas de color (cian, magenta, verde). Se aseguró que la capa cian principal permaneciera en primer plano con un brillo "glossy" constante.
        - **Beneficio**: El título principal ahora es un punto focal dinámico y temático.

    - **Ajustes Tipográficos y de Color**:
        - **Acción**: Se cambió la fuente principal del sitio a 'Roboto Mono' para unificar el estilo hacia una estética más técnica. Se ajustaron los colores de subtítulos y otros textos para eliminar los tonos blancos y usar la nueva paleta de neones.
        - **Beneficio**: La tipografía y los colores ahora son consistentes con el tema cyberpunk, mejorando la coherencia visual.

**Estado Actual**: El portafolio principal ahora tiene una identidad visual audaz, moderna y coherente con la marca personal del autor.

---

## 24. Modernización del Proyecto 'Aventuras de Adrián'

- **Objetivo**: Transformar el sub-proyecto "Aventuras de Adrián" de un sitio estático a una experiencia web interactiva, moderna y motivadora, aplicando una estética cyberpunk consistente con la marca principal.

- **Acciones Realizadas**:

    - **Rediseño Visual a Cyberpunk**:
        - **Acción**: Se implementó una nueva paleta de colores de modo oscuro con acentos neón (cian, magenta, verde) en todo el sub-proyecto.
        - **Beneficio**: Se unificó la estética con el portafolio principal, creando una experiencia de marca coherente y atractiva.

    - **Implementación de Sistema de Progreso Interactivo**:
        - **Acción**: Se desarrolló un sistema en JavaScript para que el usuario pueda marcar "misiones" como completadas. El progreso se guarda en `localStorage`, persistiendo entre sesiones.
        - **Recompensas Visuales**: Se añadió una animación de confeti al completar una misión y una barra de progreso flotante que muestra el avance en tiempo real.
        - **Beneficio**: Se gamificó la experiencia, aumentando la motivación y el engagement del usuario (Adrián).

    - **Mejoras de UI/UX**:
        - **Navegación por Tarjetas**: Se rediseñó la página de inicio (`index.html`) para usar tarjetas visuales en lugar de una lista de enlaces, mejorando la intuición.
        - **Acordeón de Misiones**: Se refactorizó la estructura de las misiones para usar un sistema de acordeón (`<details>`), permitiendo al usuario enfocarse en una tarea a la vez.
        - **Botones Flotantes Inteligentes**:
            - Se añadió un botón flotante para el canal de YouTube y se posicionó el widget de progreso.
            - Se implementó un `IntersectionObserver` para que los elementos flotantes se oculten suavemente al llegar al pie de página, evitando obstruir el contenido.
            - En la página de inicio, el botón de YouTube se integra de forma elegante en el pie de página al final del scroll.

- **Estado Actual**: El proyecto "Aventuras de Adrián" ha sido completamente modernizado, ofreciendo una experiencia de usuario rica, interactiva y visualmente impactante, alineada con los estándares profesionales del portafolio principal.

## 23. Refinamiento y UX del CV Profesional (`cv.html`)

- **Objetivo**: Mejorar la funcionalidad y la experiencia de usuario del CV profesional, especialmente en dispositivos móviles, y refactorizar su estructura técnica.

- **Acciones Realizadas**:
    - **Corrección de Botones Flotantes**:
        - **Problema**: El botón "Imprimir / PDF" se superponía con el título en la versión móvil y presentaba problemas de tamaño.
        - **Solución 1 (Iterativa)**: Se refactorizó el código para aislar el botón del header, solucionando los conflictos de estilo y creando un botón flotante estable.
        - **Solución 2 (UX Mejorada)**: Se añadió un botón flotante de WhatsApp. Para evitar que ambos botones taparan el pie de página, se implementó un `IntersectionObserver` en JavaScript. Ahora, los botones flotantes se ocultan suavemente al llegar al footer y, en su lugar, aparecen versiones estáticas de los mismos como iconos en el pie de página.
        - **Refinamiento**: Se ajustaron las transiciones CSS para que la animación de ocultar/mostrar sea más lenta y armoniosa.

    - **Refactorización Técnica del CV**:
        - **Acción**: Se movió todo el código CSS y JavaScript que estaba en línea en `cv.html` a archivos externos dedicados (`assets/css/cv-style.css` y `assets/js/cv-script.js`).
        - **Beneficio**: El código del CV ahora es más limpio, modular y fácil de mantener, siguiendo las mejores prácticas de desarrollo web.

**Estado Actual**: El CV profesional es ahora completamente responsivo, funcional y ofrece una experiencia de usuario inteligente y sin fricciones. Su base de código ha sido profesionalizada para facilitar futuras actualizaciones.

---

## 25. Funcionalidad del Formulario y Mejoras de UX

- **Objetivo**: Implementar una solución robusta para el formulario de contacto principal y refinar la experiencia de usuario en base a las últimas implementaciones.
- **Acciones Realizadas**:
    - **Migración a Netlify Forms**:
        - **Acción**: Se configuró el formulario de contacto principal para usar Netlify Forms, eliminando la dependencia de Firebase.
        - **Implementación AJAX**: Se desarrolló una lógica de envío asíncrona con JavaScript (`fetch`) para una experiencia de usuario fluida, mostrando mensajes de éxito/error sin recargar la página.
        - **Depuración y Solución**: Se resolvió un problema persistente de envío de formularios a Netlify. La solución final implicó ajustar el atributo del formulario a `data-netlify="true"`, añadir un campo `netlify-honeypot` y refactorizar el script de envío para codificar manualmente los datos y asegurar el `Content-Type` correcto, garantizando la recepción por parte de Netlify.
    - **Mejoras de Usabilidad**:
        - Se añadió un cuadro de diálogo de confirmación al botón "Reiniciar Progreso" en el proyecto "Aventuras" para prevenir la pérdida accidental de datos.
        - Se corrigió un problema de superposición de los botones flotantes en la versión de escritorio del proyecto "Aventuras", logrando un diseño equilibrado.
        - Se optimizó la velocidad de las animaciones de carga en la página principal para una experiencia más ágil.
- **Estado Actual**: El portafolio es ahora más funcional y robusto, con un formulario de contacto 100% operativo y una experiencia de usuario mejorada en todos sus componentes.

- **Objetivo**: Mejorar la funcionalidad y la experiencia de usuario del CV profesional, especialmente en dispositivos móviles, y refactorizar su estructura técnica.

- **Acciones Realizadas**:
    - **Corrección de Botones Flotantes**:
        - **Problema**: El botón "Imprimir / PDF" se superponía con el título en la versión móvil y presentaba problemas de tamaño.
        - **Solución 1 (Iterativa)**: Se refactorizó el código para aislar el botón del header, solucionando los conflictos de estilo y creando un botón flotante estable.
        - **Solución 2 (UX Mejorada)**: Se añadió un botón flotante de WhatsApp. Para evitar que ambos botones taparan el pie de página, se implementó un `IntersectionObserver` en JavaScript. Ahora, los botones flotantes se ocultan suavemente al llegar al footer y, en su lugar, aparecen versiones estáticas de los mismos como iconos en el pie de página.
        - **Refinamiento**: Se ajustaron las transiciones CSS para que la animación de ocultar/mostrar sea más lenta y armoniosa.

    - **Refactorización Técnica del CV**:
        - **Acción**: Se movió todo el código CSS y JavaScript que estaba en línea en `cv.html` a archivos externos dedicados (`assets/css/cv-style.css` y `assets/js/cv-script.js`).
        - **Beneficio**: El código del CV ahora es más limpio, modular y fácil de mantener, siguiendo las mejores prácticas de desarrollo web.

**Estado Actual**: El CV profesional es ahora completamente responsivo, funcional y ofrece una experiencia de usuario inteligente y sin fricciones. Su base de código ha sido profesionalizada para facilitar futuras actualizaciones.


---

## 26. Estabilización y Refactorización Completa de 'Antología'

- **Objetivo**: Transformar el proyecto "Antología" en una experiencia de lectura digital más inmersiva y profesional, mejorando la navegación y la estética.

- **Acciones Realizadas**:
    - **Resolución de Bug Crítico**: Se solucionó el error principal que impedía mostrar el contenido del libro después de hacer clic en la portada. La refactorización se centró en unificar la lógica de visibilidad mediante una clase `book-is-open` en el `<body>`.
    - **Mejora de Navegación y UX**:
        - Se implementó la navegación con los botones de "atrás" y "adelante" del navegador usando `history.pushState`.
        - Se añadió la navegación entre poemas mediante las flechas del teclado.
    - **Optimización de Animaciones**: Se reemplazaron las animaciones 3D (que causaban inestabilidad) por una transición de fundido y deslizamiento (`fade and slide`), más robusta y elegante.
    - **Refactorización del Layout**:
        - Se añadió un contenedor `.page-content` con `overflow-y: auto` y `min-height: 0` para asegurar que el scroll funcione correctamente en poemas largos en todos los dispositivos.
        - Se ajustó el layout para que la "hoja" del libro tenga una proporción vertical (similar a un folio A4) y esté siempre centrada, mejorando la estética.
    - **Unificación de Estilos**: Se aplicó el diseño de menús con botones flotantes y fondo transparente a todas las versiones (móvil y escritorio) para una experiencia coherente.
    - **Revisión Completa del Diseño Responsivo**:
        - **Vista de Escritorio y Tableta**: Se mantiene una experiencia de libro con menús flotantes fijos y una "hoja" central.
        - **Vista Móvil**: Se transformó el layout para que funcione como una página web con scroll natural. Los menús de navegación del libro se integran en el flujo del contenido (arriba y abajo del poema) y el pie de página principal es visible al final, eliminando por completo los problemas de superposición.

- **Estado Actual**: El proyecto "Antología" es ahora estable, completamente funcional y ofrece una experiencia de usuario pulida y coherente en todos los dispositivos. La base de código es limpia, robusta y fácil de mantener.

---

## 27. Inicio de la Migración a React: Profesionalización del Proyecto 'Antología'

- **Objetivo**: Reconstruir el proyecto "Antología" utilizando React para crear una aplicación más robusta, mantenible y escalable, eliminando de raíz los bugs de estado y visibilidad.

- **Acciones Realizadas**:
    - **Decisión Estratégica**: Se determinó que la arquitectura de un único archivo HTML con manipulación del DOM mediante JavaScript era propensa a errores. Se decidió migrar a una arquitectura de componentes moderna con React.
    - **Configuración del Entorno Profesional**:
        - Se creó un nuevo proyecto React utilizando Vite, la herramienta estándar de la industria.
        - Se resolvió un error crítico de permisos del sistema de archivos (`EPERM: operation not permitted, symlink`) al mover el entorno de desarrollo a un directorio nativo de Linux (`~/Projects`), una práctica profesional esencial.
    - **Inicio de la Migración**:
        - Se movieron los activos existentes (CSS, imágenes) al nuevo proyecto React (`antologia-react`).
        - Se refactorizó el componente principal `App.jsx` para replicar la lógica inicial de la Antología.
        - Se implementó el hook `useState` para gestionar el estado de la aplicación (libro abierto/cerrado), reemplazando la manipulación directa del DOM y sentando las bases para una aplicación sin bugs de estado.

- **Estado Actual**: El esqueleto de la aplicación React está configurado y funcionando en un servidor de desarrollo local. La portada se renderiza correctamente y el botón "Leer Antología" cambia el estado de la aplicación para mostrar un placeholder del contenido del libro, validando el flujo de estado inicial.

---

## 30. Overhaul del CV y Documentos Profesionales

- **Objetivo**: Mejorar los materiales de presentación profesional añadiendo una carta de presentación, habilitando el soporte bilingüe (español/inglés) y mejorando el diseño y la funcionalidad general.

- **Acciones Realizadas**:
    - **Creación de Carta de Presentación Reutilizable**:
        - Se añadió una nueva carta de presentación (`carta-presentacion.html`) con un diseño profesional y placeholders editables para facilitar su adaptación a diferentes ofertas de empleo.
        - Se centralizaron sus estilos en una hoja dedicada (`cv/assets/css/carta-style.css`) para una mejor mantenibilidad y se actualizó la ubicación a Madrid.
    - **Internacionalización (EN/ES)**:
        - Se crearon traducciones completas al inglés tanto para el CV (`cv-en.html`) como para la carta de presentación (`carta-presentacion-en.html`).
        - Se implementaron botones flotantes para cambiar de idioma en los cuatro documentos, permitiendo una navegación fluida entre las versiones en español e inglés.
    - **Mejoras de UI/UX**:
        - Se añadió un nuevo botón flotante en los CVs para dar acceso directo a la carta de presentación correspondiente.
        - Se estilizaron todos los botones nuevos para que fueran coherentes con el diseño moderno existente del CV.
        - Se aseguró la consistencia de la marca añadiendo el favicon del sitio a las páginas de la carta de presentación.

- **Estado Actual**: El CV y sus documentos de apoyo son ahora una herramienta de presentación bilingüe, funcional y profesional, lista para ser utilizada en procesos de selección tanto nacionales como internacionales.

---

## 31. Internacionalización de la Página Principal

- **Objetivo**: Ampliar el alcance del portafolio principal (`danisid.com`) a una audiencia global mediante la creación de una versión en inglés.

- **Acciones Realizadas**:
    - **Creación de Versión en Inglés**: Se ha creado un nuevo archivo `index-en.html` que contiene una traducción completa de la página principal, incluyendo textos, metadatos SEO y atributos de accesibilidad.
    - **Implementación de Cambio de Idioma**: Se han añadido botones de cambio de idioma (`ES`/`EN`) en la barra de navegación de `index.html` y `index-en.html`, permitiendo una transición fluida entre ambas versiones.
    - **Actualización de Enlaces**: El enlace al CV en `index-en.html` ahora dirige a la versión en inglés del currículum (`cv/cv-en.html`).

- **Estado Actual**: El sitio principal del portafolio es ahora completamente bilingüe, mejorando su accesibilidad y alcance profesional a nivel internacional.

---

## 32. Actualización de la Documentación Principal (README.md)

- **Objetivo**: Reflejar el estado actual y el nuevo enfoque profesional del proyecto en el `README.md`.
- **Acciones Realizadas**:
    - Se reescribió la introducción para alinearla con el perfil de **Ingeniero de Soluciones Web**.
    - Se actualizó la lista de "Características Principales" para incluir el soporte bilingüe (ES/EN) y la integración con Netlify Forms.
    - Se limpió y actualizó la descripción general del proyecto para que coincida con su evolución técnica y conceptual.
- **Estado Actual**: El `README.md` ahora sirve como una carta de presentación precisa y potente del proyecto y su autor.

---

## 33. Optimización SEO de la Página Principal

- **Objetivo**: Mejorar el posicionamiento en buscadores y la visibilidad en redes sociales del portafolio principal.
- **Acciones Realizadas**:
    - **Actualización de Metadatos Clave**: Se actualizaron las etiquetas `<title>` y `<meta name="description">` en `index.html` y `index-en.html` para reflejar el nuevo perfil de **Ingeniero de Soluciones Web**.
    - **Optimización para Redes Sociales**: Se reescribieron los metadatos de Open Graph (Facebook/WhatsApp) y Twitter Cards para que las previsualizaciones de los enlaces sean más atractivas y descriptivas.
    - **Implementación de SEO Internacional (`hreflang`)**: Se añadieron las etiquetas `<link rel="alternate" hreflang="...">` en ambas versiones de la página principal para indicar a Google la relación entre las páginas en español e inglés, mejorando el SEO para audiencias multilingües y evitando penalizaciones por contenido duplicado.
- **Estado Actual**: El sitio principal está ahora técnicamente optimizado para un mejor rendimiento en búsquedas orgánicas y al ser compartido en plataformas sociales.

---

## 34. Revisión de Accesibilidad y Reversión Parcial

- **Objetivo**: Mejorar la accesibilidad (a11y) y la semántica de la página principal.
- **Acciones Realizadas**:
    - Se intentó refactorizar la jerarquía de encabezados en la sección "Experiencia" para una estructura semántica más correcta.
    - Se añadieron estilos para deshabilitar visualmente los enlaces sin destino (`href="#"`).
    - Se mejoró el contraste del texto del copyright en el footer.
- **Problema y Reversión**: El cambio en la estructura de la sección "Experiencia" rompió el layout visual en la vista de escritorio. Se decidió revertir los cambios en el HTML y CSS de dicha sección para restaurar el diseño funcional, manteniendo las otras mejoras de accesibilidad que no generaban conflicto.
- **Estado Actual**: El diseño visual está restaurado. Se ha identificado la necesidad de una refactorización más profunda (posiblemente a un framework como React) para implementar mejoras estructurales sin romper el diseño.

---

## 35. Refactorización Pedagógica de 'Misiones Rítmicas'

- **Objetivo**: Profundizar el valor pedagógico del proyecto "Aventuras", integrando conceptos de la pedagogía Waldorf y la antroposofía.

- **Acciones Realizadas**:
    - **Refactorización de `Misiones-ritmicas.html`**:
        - Se ha reestructurado la narrativa para conectar las misiones con las estaciones del año (Invierno, Otoño, Primavera).
        - Se ha introducido el concepto de los "Elementales" (Gnomos, Ondinas, Silfos, Salamandras) como guías espirituales de la naturaleza, asociándolos a cada estación.
        - Se ha añadido una nueva sección educativa desplegable que explica qué son los Elementales y su rol, sentando las bases para futuras misiones.
        - El lenguaje se ha refinado para ser más poético y evocador, alineándose con la sensibilidad Waldorf sin perder el enfoque de "misión" y "liderazgo".

- **Estado Actual**: La sección "Misiones Rítmicas" ha evolucionado de una lista de actividades a una experiencia narrativa más rica y profunda, que conecta la creatividad de Adrián con los ritmos de la naturaleza.

---

## 36. Refinamiento Narrativo y Visión a Futuro de 'Aventuras'

- **Objetivo**: Infundir el proyecto con una voz más personal y poética, y planificar su evolución técnica.

- **Acciones Realizadas**:
    - **Refactorización Poética**: Se ha reescrito la sección "Los Secretos de los Elementales" en `Misiones-ritmicas.html`. El texto ahora adopta un tono narrativo más íntimo y mágico, eliminando el indicativo "(Contado por Papá)" para que la voz del autor se sienta de manera implícita y natural.
    - **Conexión Geográfica y Estacional**: Se ha añadido un bloque que conecta la experiencia de las estaciones en Madrid (Otoño) y Manizales (temporada de lluvias), creando un puente emocional entre padre e hijo a través de las misiones.

- **Decisión Estratégica a Futuro**:
    - Se ha identificado que el proyecto "Aventuras" está superando las limitaciones de una estructura de HTML/CSS/JS.
    - **Visión**: Evolucionar el proyecto hacia una aplicación interactiva o un "mapa visual de la vida", una experiencia digital más compleja y rica.
    - **Próximo Paso Técnico (Planificación)**: Se considera la migración a una tecnología más robusta como **React** para soportar el crecimiento futuro, la interactividad avanzada y la escalabilidad del proyecto.

---



## 28. Mejoras en UI y Build del Proyecto 'Antología' (React)

- **Objetivo**: Avanzar en el desarrollo de la nueva versión de 'Antología' en React, mejorando la interfaz de usuario y la configuración de compilación.

- **Acciones Realizadas**:
    - **Mejoras de UI**:
        - Se implementó un efecto de "brillo neón" en los botones de redes sociales y donaciones para mejorar la retroalimentación visual.
        - Se refactorizaron los estilos `:hover` de los botones para combinar una transición de color de fondo con el nuevo efecto de brillo.
    - **Corrección de Build (Vite)**:
        - Se solucionó un error de compilación que impedía resolver importaciones con alias (ej. `@/components/...`).
        - Se configuró `vite.config.js` para mapear el alias `@` al directorio `src`, garantizando rutas de importación consistentes.
    - **Actualización en Portafolio Principal**:
        - Se actualizó el enlace del proyecto 'Antología' en `index.html` para apuntar al nuevo subdominio `antologia.danisid.com`.
        - Se cambió la imagen de previsualización a `antologia-v4.webp` para reflejar la versión más reciente.

---

## 29. Limpieza de Repositorio: Eliminación de Proyecto Obsoleto

- **Objetivo**: Consolidar la arquitectura del proyecto y eliminar código obsoleto tras la migración exitosa de 'Antología' a React en su propio subdominio.
- **Acciones Realizadas**:
    - Se ha eliminado por completo la carpeta `Antologia/` del repositorio principal (`danisid.com`). Esta carpeta contenía la versión antigua del proyecto, desarrollada con HTML, CSS y JavaScript puro.
- **Resultado**: El repositorio principal está ahora más limpio y ligero. El proyecto 'Antología' vive de forma independiente en su propio entorno y es referenciado desde el portafolio a través del subdominio, siguiendo las mejores prácticas de desarrollo.