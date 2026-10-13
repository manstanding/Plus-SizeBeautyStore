// PLUS SIZE BEAUTY: small enhancements for a static informational site.
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });

if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('/service-worker.js').catch(() => {}); }); }
