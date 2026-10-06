
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
document.querySelectorAll('[data-placeholder-affiliate]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    alert('This button is ready for your approved affiliate tracking URL. Do not publish a fake tracking link. Replace the placeholder with your real affiliate URL first.');
  });
});
