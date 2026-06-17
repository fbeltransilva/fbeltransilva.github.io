(function () {
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navMenu = document.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-open', isOpen);
    });

    navMenu.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    });
  }

  var yearTargets = document.querySelectorAll('[data-current-year]');
  yearTargets.forEach(function (target) {
    target.textContent = new Date().getFullYear();
  });

  var searchInput = document.querySelector('[data-search-input]');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var query = searchInput.value.trim().toLowerCase();
      var items = document.querySelectorAll('[data-search-item]');
      items.forEach(function (item) {
        var matches = item.textContent.toLowerCase().includes(query);
        item.hidden = query.length > 0 && !matches;
      });
    });
  }

  var copyButton = document.querySelector('[data-copy-email]');
  var copyStatus = document.querySelector('[data-copy-status]');
  if (copyButton && navigator.clipboard) {
    copyButton.addEventListener('click', function () {
      var email = copyButton.getAttribute('data-copy-email');
      navigator.clipboard.writeText(email).then(function () {
        if (copyStatus) copyStatus.textContent = 'Email copied to clipboard.';
      }).catch(function () {
        if (copyStatus) copyStatus.textContent = 'Copy failed. Please select and copy the email manually.';
      });
    });
  }
}());
