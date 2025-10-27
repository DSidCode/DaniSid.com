# **📦 Registro de Cambios del Proyecto danisid.com: Migración y Optimización**

Este *Changelog* documenta el proceso completo de migración de la infraestructura del dominio danisid.com desde IONOS hacia una arquitectura moderna, sin coste de hosting y con gestión de DNS/Registro de Dominio optimizada.

**Objetivo Central:** Reducir el coste operativo a lo esencial (registro de dominio) y consolidar el sitio web en una plataforma de despliegue continuo (Netlify).

## **\[1.0.0\] \- Migración de Infraestructura (Oct 2025\)**

### **🚀 Cambio de Arquitectura y Plataforma**

Se eliminó la dependencia del proveedor de hosting anterior (IONOS) para el sitio web y el correo electrónico, moviendo la gestión a Cloudflare y Netlify.

#### **Tareas Completadas:**

* **Hosting Web (Netlify):**  
  * Verificación de la correcta configuración de los registros **A** y **CNAME** para que el sitio web apuntara a Netlify.  
  * Confirmación de que el sitio sigue activo y funcionando correctamente después del cambio de DNS.  
* **Gestión de DNS (Cloudflare):**  
  * Migración de los **Nameservers** de IONOS a Cloudflare.  
  * Activación del servicio **CDN/Caché** y **SSL/TLS** (Certificado Universal) en Cloudflare.  
  * Verificación del estado "Activo" en el panel de Cloudflare.

### **📧 Migración del Servicio de Correo Electrónico**

Se aseguró la continuidad del correo profesional danielgarcia@danisid.com antes de cancelar el servicio de buzón de IONOS.

#### **Tareas Completadas:**

* **Configuración de Reenvío:**  
  * Activación y configuración del servicio **Email Routing** (Enrutamiento de Correo) gratuito de Cloudflare.  
  * Creación de la regla de reenvío: danielgarcia@danisid.com \-\> danisidcode@gmail.com.  
  * Verificación de la activación del reenvío y reemplazo de los registros **MX** de IONOS por los de Cloudflare.

### **🛡️ Transferencia de Propiedad y Cancelación de Contrato**

Se inició y se programó el fin de la relación contractual y de facturación con el proveedor anterior (IONOS/1&1 Internet SE).

#### **Tareas Completadas:**

* **Transferencia de Dominio (Cloudflare):**  
  * Obtención del código de autorización (Auth Code) del registrador anterior.  
  * Inicio de la transferencia de la propiedad legal del dominio danisid.com a **Cloudflare Registrar** (registrador a precio de coste).  
  * **Proceso Pendiente:** Espera de la confirmación final de la transferencia (5-7 días).  
* **Cancelación de Contrato (IONOS):**  
  * Navegación por el flujo de cancelación del contrato **IONOS Hosting Plus (103364996)**.  
  * Confirmación de la cancelación por teléfono con el Servicio de Atención al Cliente de IONOS.  
  * **Estado Final de Contrato:** Programado para cancelación definitiva el próximo lunes (tras la validación de la transferencia).

### **✅ Conclusión y Próximos Pasos**

La migración de la infraestructura está completa. La arquitectura es ahora: **Netlify (Hosting) \+ Cloudflare (DNS, CDN, Registro, Correo).**

#### **Acciones Pendientes de Verificación:**

1. Confirmación del éxito de la **Transferencia de Propiedad de Dominio** a Cloudflare (mediante correo electrónico de Cloudflare).  
2. Recepción del correo electrónico de **Cancelación Definitiva del Contrato** por parte de IONOS.  
3. Verificación de la aplicación de un posible **reembolso proporcional** por los servicios no utilizados (hasta 07/10/2026).