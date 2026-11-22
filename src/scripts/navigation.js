const MOBILE_QUERY = '(max-width: 760px)';

export function initMobileNav() {
  const header = document.querySelector('[data-site-header]');
  const button = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('#primary-nav');

  if (!header || !button || !nav) return;

  const mobile = window.matchMedia(MOBILE_QUERY);

  const setMenu = (open) => {
    header.dataset.menuOpen = String(open);
    button.setAttribute('aria-expanded', String(open));
    const label = open ? 'Close navigation menu' : 'Open navigation menu';
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
    nav.inert = mobile.matches && !open;
  };

  const closeMenu = ({ returnFocus = false } = {}) => {
    if (header.dataset.menuOpen !== 'true') return;
    setMenu(false);
    if (returnFocus) button.focus();
  };

  button.addEventListener('click', () => {
    setMenu(header.dataset.menuOpen !== 'true');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu({ returnFocus: true });
  });

  const handleViewportChange = () => {
    if (!mobile.matches) {
      closeMenu();
      nav.inert = false;
    } else {
      nav.inert = header.dataset.menuOpen !== 'true';
    }
  };

  if (typeof mobile.addEventListener === 'function') {
    mobile.addEventListener('change', handleViewportChange);
  } else {
    mobile.addListener(handleViewportChange);
  }

  setMenu(false);
}
