// GitHub Pages has no server-side geolocation. Use the browser locale as a signal.
// Explicit language URLs and manual selection always take precedence.
(() => {
  if (location.pathname !== '/' && location.pathname !== '/index.html') return;
  const explicit = new URLSearchParams(location.search).get('lang');
  let saved;
  try { saved = localStorage.getItem('brainbloq-language'); } catch {}
  if (explicit === 'en' || explicit === 'es') {
    saved = explicit;
    try { localStorage.setItem('brainbloq-language', explicit); } catch {}
  }
  const locale = navigator.language || 'en';
  const preferred = saved || (/^es(?:-|$)/i.test(locale) ? 'es' : 'en');
  if (preferred === 'es') location.replace('/es/' + location.hash);
})();
