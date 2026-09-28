// Eventos de Google Analytics 4. Si GA no está cargado (p. ej. en local), no hace nada.
export function track(event, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', event, params);
  }
}
