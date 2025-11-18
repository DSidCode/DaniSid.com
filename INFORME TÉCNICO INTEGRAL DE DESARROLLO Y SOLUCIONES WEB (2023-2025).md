# **INFORME TÉCNICO INTEGRAL DE DESARROLLO Y SOLUCIONES WEB (2023-2025)**

Daniel García (DaniSidCode)  
Período Cubierto: Enero 2023 — Septiembre 2025

## **RESUMEN EJECUTIVO**

Este informe documenta la evolución y consolidación del perfil de Daniel García (DaniSidCode) como **Ingeniero de Soluciones Web Multidisciplinar**. Durante el período 2023-2025, el enfoque migró del diseño visual puro a la ingeniería integral, destacando en la implementación de arquitecturas escalables, flujos de Integración y Despliegue Continuo (CI/CD) con GitHub Actions, y la refactorización de entornos profesionales (WordPress en Docker). Los logros demuestran un dominio equilibrado entre **código, infraestructura y sensibilidad artística**, posicionando al autor para el desarrollo de sistemas inteligentes y automatizados.

## **1\. INTRODUCCIÓN Y OBJETIVO**

El propósito de este documento es exponer, de forma exhaustiva y reflexiva, los avances técnicos, la gestión de proyectos y los aprendizajes fundamentales adquiridos en el desarrollo de soluciones informáticas. Se incluyen proyectos de infraestructura, desarrollo web (React, Vanilla JS, PHP), automatización y creación de contenido digital.

La trayectoria documentada refleja la transición técnica de un diseñador visual a un arquitecto de soluciones, integrando la visión estética con la robustez y eficiencia del código y la infraestructura.

## **2\. PROYECTO CORE Y ECOSISTEMA DIGITAL: DANISID.COM**

### **2.1 Descripción General**

**danisid.com** funciona como el portafolio profesional y el **laboratorio principal** de DaniSidCode. El proyecto es la prueba de concepto del dominio en desarrollo full-stack, automatización y UX/UI, habiendo evolucionado desde un *portafolio estático* a un **ecosistema de experimentación dinámico** con CI/CD profesional.

### **2.2 Objetivos Estratégicos**

* Consolidar una identidad profesional y técnica bajo la marca DaniSidCode.  
* Establecer un flujo de trabajo de despliegue continuo (CI/CD).  
* Crear una estructura escalable para la integración de subproyectos y experimentos (IA, diseño).

### **2.3 Stack Tecnológico**

| Categoría | Tecnologías Clave |
| :---- | :---- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla), React/Vite (en módulos experimentales) |
| **Infraestructura** | Netlify (Hosting, Forms, Deploy), Cloudflare (DNS, CDN, SSL, Email Routing) |
| **DevOps** | Git, GitHub, GitHub Actions (CI/CD) |
| **Diseño** | UX/UI responsive con enfoque visual Cyberpunk |

### **2.4 Logros Técnicos Destacados**

* **Implementación de CI/CD:** Configuración robusta de GitHub Actions, permitiendo despliegues automáticos (Netlify) y optimización de *builds* post-commit.  
* **Migración de Infraestructura:** Transición exitosa de IONOS a una arquitectura moderna Netlify \+ Cloudflare, garantizando alta disponibilidad y certificados SSL profesionales.  
* **Optimización de Recursos:** Implementación de optimización automática de activos (CSS modular, WebP, scripts asíncronos), mejorando significativamente el *time-to-content*.  
* **Estructura y Escalabilidad:** Refactorización a una estructura modular que permite la integración fluida de los siguientes subproyectos:  
  * Antología (Literatura digital)  
  * Aventuras de Adrián (Pedagógico)  
  * Human Design Reports (Aplicación de diseño humano)  
  * Cyberpunk UI (Exploración visual)

## **3\. PROYECTO PROFESIONAL: EL MANICOMIO TATTOO**

### **3.1 Descripción del Desafío**

**elmanicomiotattoo.es** fue un proyecto de refactorización crítica, migrando un sitio WordPress legacy y dependiente de temas prefabricados a una arquitectura moderna, estable y en contenedores (Docker).

### **3.2 Objetivos de la Refactorización**

* Eliminación de la dependencia de temas de terceros (Bridge, Astra), mediante el desarrollo de un tema propio **ManicomioTheme** (100% a medida).  
* Aislamiento y estandarización del entorno de desarrollo mediante **Docker Compose**.  
* Optimización de rendimiento y compatibilidad con estándares actuales (PHP 8.4+).

### **3.3 Arquitectura y Herramientas**

| Categoría | Especificación Técnica |
| :---- | :---- |
| **CMS** | WordPress 6.6+ |
| **Entorno** | Docker / Docker Compose (Apache, MariaDB) |
| **Backend** | PHP 8.2–8.4, WP-CLI, Composer |
| **Desarrollo** | Nobara Linux 42 (Entorno local principal) |

### **3.4 Procesos de Ingeniería Clave**

* **Contenerización Profesional:** Implementación de un entorno Docker funcional con inicialización automática de la base de datos (docker-entrypoint-initdb.d). El entorno local fue configurado en **Nobara Linux** con hardware optimizado (Intel i7-13700HX, RTX 5060, 32GB RAM).  
* **Desarrollo de Tema Custom:** Creación de **ManicomioTheme** con panel de opciones mediante la API Settings de WordPress para un control de marca total.  
* **Hardening y Limpieza de Código:** Diagnóstico y resolución de errores de compatibilidad de plugins de terceros con PHP 8+. Limpieza radical y estandarización del código con **PHPCompatibilityWP**.  
* **Optimización Multimedia:** Procesos de conversión masiva (JPG/PNG → WebP; MP4/MOV → MP4 optimizado \+ WebM) para garantizar la velocidad de carga.  
* **Garantía de Continuidad:** Automatización de copias de seguridad y sincronización del entorno local con GitHub.

## **4\. PROYECTOS EXPERIMENTALES Y EDUCATIVOS**

### **4.1 Antología (Literatura Digital)**

* **Objetivo:** Preservación y migración de textos poéticos a un formato web interactivo y visualmente inmersivo.  
* **Avance:** Migración de HTML a **React \+ Vite**. Estructura de componentes y navegación estables, con planificación para la integración futura de un buscador semántico basado en IA.

### **4.2 Aventuras de Adrián (Pedagogía Waldorf)**

* **Objetivo:** Aplicación web pedagógica inspirada en la metodología Waldorf, promoviendo la autonomía y la creatividad infantil.  
* **Tecnologías:** HTML, CSS y JavaScript puro. Estructura modular con persistencia mediante **localStorage** y diseño ilustrativo vectorial **SVG**.

### **4.3 Guitarra.app (Herramienta de Práctica Musical)**

* **Objetivo:** Desarrollar una herramienta interactiva para el aprendizaje de acordes y escalas.  
* **Avance:** Diseño del *fretboard* interactivo y prototipo para la integración de **Web Audio API** y gráficos SVG. Se proyecta la integración de IA para la generación de ejercicios personalizados.

## **5\. INFRAESTRUCTURA Y AUTOMATIZACIÓN (DEVOPS)**

La gestión de la infraestructura se centró en la seguridad, la estabilidad y la eficiencia del flujo de trabajo:

* **Migración de Sistemas Operativos:** Transición de Kali Linux a **Nobara Linux** como entorno principal de desarrollo.  
* **Gestión de Credenciales:** Creación de plantillas .env y reconfiguración de wp-config.php para la gestión segura de credenciales.  
* **Auditoría de Rendimiento:** Implementación rutinaria de auditorías Lighthouse y optimización de código para asegurar puntuaciones de rendimiento óptimas.  
* **CI/CD con GitHub Actions:** Estandarización del *pipeline* de *build* y *deploy* automatizado para el ecosistema danisid.com.

## **6\. HABILIDADES TÉCNICAS Y PROYECCIONES**

### **6.1 Compendio de Habilidades Técnicas**

| Área | Skills Específicos |
| :---- | :---- |
| **Desarrollo Frontend** | HTML5, CSS3, JavaScript (ES6+), React, Vite, WPO, WebP, VP9, Lighthouse |
| **Backend & CMS** | PHP (8+), WordPress (Temas Custom, API Settings, WP-CLI), MariaDB |
| **Infraestructura & DevOps** | Docker, Docker Compose, Netlify, Cloudflare, GitHub Actions (CI/CD), Git |
| **Diseño & UX/UI** | Figma, Inkscape, Photoshop, Illustrator, Design Systems, Responsive Design |
| **Automatización & Scripting** | Bash/CLI (Administración Linux), Composer, Flujos de Respaldo Automatizado |

### **6.2 Visión de Futuro Profesional**

Daniel García (DaniSidCode) ha demostrado una capacidad excepcional para fusionar la ingeniería de código con una fuerte sensibilidad por el diseño y la experiencia de usuario. La visión futura se centra en:

* **Desarrollo de Soluciones Inteligentes:** Integración activa de modelos de Inteligencia Artificial (IA) en proyectos web (buscadores semánticos, generadores de contenido personalizado).  
* **Arquitectura de Sistemas:** Diseño de infraestructuras *headless* y *serverless* para maximizar la escalabilidad y reducir la latencia.  
* **Multidisciplinariedad:** Consolidar el rol como puente entre el arte, la tecnología y las soluciones de automatización.

## **7\. CONTACTO**

Autor: Daniel García (DaniSidCode)  
Ubicación: Madrid, España  
Web: danisid.com  
Correo: danisidcode@gmail.com  
GitHub: github.com/DSidCode  
LinkedIn: https://www.linkedin.com/in/danisidcode/