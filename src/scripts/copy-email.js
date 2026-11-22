function legacyCopy(text) {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.append(area);
  area.select();
  document.execCommand('copy');
  area.remove();
}

export function initCopyEmail(root) {
  const buttons = [...root.querySelectorAll('[data-copy-email]')];
  const toast = root.querySelector('[data-toast]');
  const labels = [...root.querySelectorAll('[data-copy-label]')];

  if (buttons.length === 0 || !toast) return;

  let timer;

  const announce = (message, success) => {
    toast.textContent = message;
    toast.classList.add('is-visible');
    labels.forEach((label) => {
      label.textContent = success ? 'Copied!' : 'Copy failed';
    });

    clearTimeout(timer);
    timer = setTimeout(() => {
      toast.classList.remove('is-visible');
      labels.forEach((label) => {
        label.textContent = 'Copy Email';
      });
    }, 2000);
  };

  buttons.forEach((button) => {
    button.addEventListener('click', async () => {
      const email = button.dataset.email || '';
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          legacyCopy(email);
        }
        announce('Copied!', true);
      } catch {
        announce('Copy failed', false);
      }
    });
  });
}
