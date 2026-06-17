
(function () {
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  const links = window.SITE_LINKS || {};
  document.querySelectorAll('[data-link-key]').forEach(function (el) {
    const key = el.getAttribute('data-link-key');
    const url = links[key];
    if (url && typeof url === 'string' && url.trim().length > 0) {
      el.setAttribute('href', url.trim());
      if (!url.startsWith('mailto:')) {
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
      }
      el.classList.remove('js-config-link');
    } else {
      el.remove();
    }
  });

  document.querySelectorAll('.link-list').forEach(function (list) {
    if (list.children.length === 0) list.remove();
  });
})();
