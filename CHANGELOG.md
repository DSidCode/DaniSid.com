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