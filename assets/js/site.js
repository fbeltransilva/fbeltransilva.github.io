(function () {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (button && nav) {
    button.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const links = window.siteLinks || {};
  document.querySelectorAll('[data-link-key]').forEach(function (element) {
    const key = element.getAttribute('data-link-key');
    const url = links[key];
    if (url) {
      element.setAttribute('href', url);
      element.hidden = false;
    } else if (!element.getAttribute('href')) {
      element.hidden = true;
    }
  });
})();