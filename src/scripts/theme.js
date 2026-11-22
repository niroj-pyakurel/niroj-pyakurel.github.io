const STORAGE_KEY = 'theme';

export function initThemeToggle() {
  const button = document.querySelector('[data-theme-toggle]');
  if (!button) return;

  const currentTheme = () =>
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

  const syncButton = () => {
    const theme = currentTheme();
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    const label = `Switch to ${nextTheme} theme`;
    button.setAttribute('aria-pressed', String(theme === 'light'));
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  };

  syncButton();

  button.addEventListener('click', () => {
    const nextTheme = currentTheme() === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch (error) {
      // Storage may be unavailable in private browsing; the toggle still works.
    }
    syncButton();
  });

  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) return;
    if (event.storageArea === localStorage && (event.newValue === 'light' || event.newValue === 'dark')) {
      document.documentElement.setAttribute('data-theme', event.newValue);
      syncButton();
    }
  });
}
