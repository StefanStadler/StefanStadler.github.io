const mobileNav = document.getElementById('mobileNav');
const content = document.getElementById('content');

function setMobileMenu(open) {
  mobileNav.classList.toggle('hidden', !open);
  content.classList.toggle('blur', open);
}

document.addEventListener('click', (event) => {
  if (event.target.closest('[data-toggle-menu]')) {
    setMobileMenu(mobileNav.classList.contains('hidden'));
    return;
  }
  const nav = event.target.closest('[data-nav]');
  if (nav) {
    document.getElementById(nav.dataset.nav)?.scrollIntoView();
    if (nav.hasAttribute('data-close-menu')) setMobileMenu(false);
  }
});
