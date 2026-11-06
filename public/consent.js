/*
 * Consentimiento de cookies + carga de Google Analytics 4.
 * - GA4 NO se carga hasta que el visitante pulsa "Aceptar".
 * - La elección se guarda en localStorage ('danisid-consent': 'granted' | 'denied').
 * - Solo mide en danisid.com; en local el banner se ve, pero no se carga GA.
 * - Texto en español o inglés según <html lang>.
 * - Para reabrir el banner: window.daniSidConsent.reset() (enlace "Cookies" del pie).
 */
(function () {
  var GA_ID = 'G-MHT141WKZZ';
  var KEY = 'danisid-consent';
  var isProd = /(^|\.)danisid\.com$/.test(location.hostname);
  var en = (document.documentElement.lang || 'es').indexOf('en') === 0;

  var T = en
    ? { text: 'I use Google Analytics to understand which pages work. It only loads if you accept.', ok: 'Accept', no: 'Reject', more: 'Privacy' }
    : { text: 'Uso Google Analytics para saber qué páginas funcionan. Solo se carga si aceptas.', ok: 'Aceptar', no: 'Rechazar', more: 'Privacidad' };

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadGA() {
    if (!isProd || window.__gaLoaded) return;
    window.__gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  function closeBanner() {
    var b = document.getElementById('ds-consent');
    if (b && b.parentNode) b.parentNode.removeChild(b);
  }

  function showBanner() {
    if (document.getElementById('ds-consent')) return;
    var css = document.createElement('style');
    css.textContent =
      '#ds-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;' +
      'background:#0F0E0D;border:1px solid rgba(212,175,55,.35);padding:16px 18px;color:#F4F0EB;' +
      'font:14px/1.5 "Outfit",system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.6)}' +
      '#ds-consent p{margin:0 0 12px;color:#C9C0B0}#ds-consent a{color:#D4AF37}' +
      '#ds-consent .row{display:flex;gap:10px;flex-wrap:wrap}' +
      '#ds-consent button{cursor:pointer;padding:10px 18px;font:700 12px "JetBrains Mono",monospace;' +
      'letter-spacing:.12em;text-transform:uppercase;border:1px solid #D4AF37;background:transparent;color:#D4AF37}' +
      '#ds-consent button.ok{background:#D4AF37;color:#0A0A0A}' +
      '#ds-consent button:focus-visible{outline:2px solid #F4F0EB;outline-offset:2px}';
    document.head.appendChild(css);

    var b = document.createElement('div');
    b.id = 'ds-consent';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Cookies');
    b.innerHTML =
      '<p>' + T.text + ' <a href="/privacidad.html#cookies">' + T.more + '</a></p>' +
      '<div class="row"><button type="button" class="ok">' + T.ok + '</button>' +
      '<button type="button" class="no">' + T.no + '</button></div>';
    b.querySelector('.ok').onclick = function () { write('granted'); closeBanner(); loadGA(); };
    b.querySelector('.no').onclick = function () { write('denied'); closeBanner(); };
    document.body.appendChild(b);
  }

  window.daniSidConsent = {
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} showBanner(); },
    get: read
  };

  function init() {
    var c = read();
    if (c === 'granted') loadGA();
    else if (c !== 'denied') showBanner();
  }
  if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);
})();
