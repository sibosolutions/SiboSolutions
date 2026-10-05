/*
  Mobile hamburger menu toggle — shared across all pages.
  Expects a <button class="nav-toggle" aria-controls="nav-links"> inside
  each <nav>, and a <ul class="nav-links" id="nav-links"> sibling.
*/
(function () {
  document.querySelectorAll('.nav-toggle').forEach((toggle) => {
    const nav = toggle.closest('nav');
    const links = nav ? nav.querySelector('.nav-links') : null;
    if (!links) return;

    function closeMenu() {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
      links.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', () => {
      if (links.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  });
})();
