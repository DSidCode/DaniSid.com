import es from './es';
import en from './en';

/* Idioma de la página. Cada URL fija el suyo en <html lang>:
   index.html (lang="es") para danisid.com/ y en/index.html (lang="en") para /en/.
   Cambiar de idioma es cambiar de página, así que no hace falta contexto ni estado. */
export const LANG = document.documentElement.lang === 'en' ? 'en' : 'es';
export const T = LANG === 'en' ? en : es;
export const LANG_URLS = { es: '/', en: '/en/' };
