export function initTagFilters() {
  document.querySelectorAll('[data-tag-filter]').forEach((group) => {
    const selector = group.getAttribute('data-tag-filter');
    const cards = document.querySelectorAll(selector);
    const buttons = group.querySelectorAll('button[data-filter]');

    const apply = (tag) => {
      cards.forEach((card) => {
        const tags = (card.dataset.tags || '').split(' ').filter(Boolean);
        card.hidden = tag !== 'all' && !tags.includes(tag);
      });
      buttons.forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.filter === tag));
      });
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => apply(button.dataset.filter));
    });

    apply('all');
  });
}
