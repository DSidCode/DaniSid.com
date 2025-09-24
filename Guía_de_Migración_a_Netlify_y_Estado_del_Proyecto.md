# **Guía de Migración a Netlify y Estado del Proyecto**

Este documento detalla los pasos para migrar el proyecto danisid.com a Netlify y resume el progreso actual.

### **Paso 1: Prepara tu Repositorio de GitHub**

1. Asegúrate de que la versión más reciente y funcional de tu sitio web esté subida a tu repositorio de GitHub.  
2. Verifica que el archivo index.html esté en la raíz del repositorio, ya que Netlify lo detectará automáticamente como tu página principal.

### **Paso 2: Crea una Cuenta en Netlify y Conecta GitHub**

1. Ve a [netlify.com](https://www.netlify.com).  
2. Haz clic en el botón **"Sign up"** y elige la opción de "GitHub" para registrarte con tu cuenta.  
3. Autoriza a Netlify para que acceda a tus repositorios. Esto es un requisito para que pueda leer tu código y desplegarlo.

### **Paso 3: Crea un Nuevo Sitio Web en Netlify**

1. Una vez en tu panel de control de Netlify, haz clic en **"Add new site"** y luego en **"Import from Git"**.  
2. Selecciona tu cuenta de GitHub y busca el repositorio danisid.com.  
3. Netlify analizará el repositorio y te preguntará la configuración del despliegue:  
   * **Branch to deploy:** Elige main (o la rama principal de tu proyecto).  
   * **Build command:** Deja este campo en blanco, ya que tu sitio es estático y no necesita ser compilado.  
   * **Publish directory:** Deja este campo en blanco (o usa .). Netlify buscará los archivos HTML y los publicará desde la raíz.  
4. Haz clic en **"Deploy site"**. Netlify tomará unos segundos para clonar el repositorio y desplegar tu sitio.

### **Paso 4: Ver y Administrar tu Sitio**

1. Después de unos momentos, tu sitio estará activo. Netlify le asignará un nombre de dominio aleatorio (por ejemplo: calm-wombat-12345.netlify.app). Puedes cambiar este nombre en la configuración.  
2. Cada vez que subas un cambio a tu rama main en GitHub (ej. un git push), Netlify detectará el cambio y automáticamente creará un nuevo despliegue.

### **Paso 5: Migra tu Dominio (¡Completado\!)**

1. En tu panel de Netlify, ve a **Domain management**.  
2. Añadiste tu dominio (danisid.com).  
3. Netlify te guió para que cambiaras los **DNS (Domain Name Servers)** en tu cuenta de Ionos. Has iniciado sesión en tu panel de control y reemplazaste los servidores DNS de Ionos por los de Netlify, confirmando la delegación de control.  
4. También has añadido los registros MX y TXT de Ionos en Netlify para mantener tu servicio de correo profesional.

### **Estado de la Migración**

* **Dominio en Ionos:** El cambio de Nameservers se ha completado.  
* **Propagación de DNS:** El proceso está actualmente en curso. Esto puede tardar hasta 48 horas en completarse, aunque a menudo ocurre en unas pocas horas.  
* **Código en GitHub:** Sigue siendo la fuente principal del sitio.  
* **Sitio en Netlify:** Es ahora el host principal del proyecto. Despliegue automático configurado y activo.