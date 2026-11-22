const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initTerminal(root) {
  const form = root.querySelector('[data-term-form]');
  const input = root.querySelector('[data-term-input]');
  const output = root.querySelector('[data-term-output]');

  if (!form || !input || !output) return;

  let commands = {};
  try {
    commands = JSON.parse(root.dataset.commands || '{}');
  } catch {
    commands = {};
  }

  const mailHref = root.dataset.mailHref || '#';
  let runToken = 0;
  let scrollFrame = 0;

  const scrollToBottom = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      output.scrollTop = output.scrollHeight;
    });
  };

  const appendCommand = (command) => {
    const line = document.createElement('div');
    line.className = 'term-line';

    const prompt = document.createElement('span');
    prompt.className = 'term-prompt';
    prompt.textContent = 'guest@niroj:~$';

    const value = document.createElement('span');
    value.className = 'term-text';
    value.textContent = command;

    line.append(prompt, value);
    output.append(line);
    scrollToBottom();
  };

  const appendOutput = ({ text, tone = '' }) => {
    const line = document.createElement('div');
    line.className = `term-line term-line--output${tone ? ` tone-${tone}` : ''}`;

    const value = document.createElement('span');
    value.className = 'term-text';
    value.textContent = text;

    line.append(value);
    output.append(line);
    scrollToBottom();
  };

  const render = async (rawCommand) => {
    const command = rawCommand.trim();
    const key = command.toLowerCase();

    if (key === 'clear') {
      output.replaceChildren();
      return;
    }

    if (key === 'open projects/') {
      window.location.href = '/projects/';
      return;
    }

    if (key === 'open mail') {
      window.location.href = mailHref;
      return;
    }

    if (!Object.prototype.hasOwnProperty.call(commands, key)) {
      appendOutput({ text: `command not found: ${command}. try 'help'.`, tone: 'hint' });
      return;
    }

    const lines = commands[key];
    const token = ++runToken;

    if (prefersReducedMotion()) {
      lines.forEach(appendOutput);
      return;
    }

    for (const [index, line] of lines.entries()) {
      await new Promise((resolve) => setTimeout(resolve, index === 0 ? 80 : 105));
      if (token !== runToken) return;
      appendOutput(line);
    }
  };

  const run = (command, { echo = true } = {}) => {
    const value = command.trim();
    if (!value) return;
    if (echo) appendCommand(value);
    render(value);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    run(value);
  });

  root.querySelectorAll('[data-command]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const value = chip.dataset.command || '';
      input.value = value;
      run(value);
      input.focus();
    });
  });

  run('whoami');
}

function initMagneticButtons(root) {
  if (prefersReducedMotion()) return;

  root.querySelectorAll('[data-magnetic]').forEach((button) => {
    button.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      button.style.setProperty('--mag-x', `${(x - 0.5) * 7}px`);
      button.style.setProperty('--mag-y', `${(y - 0.5) * 5}px`);
      button.style.setProperty('--btn-x', `${x * 100}%`);
      button.style.setProperty('--btn-y', `${y * 100}%`);
    });

    button.addEventListener('pointerleave', () => {
      button.style.setProperty('--mag-x', '0px');
      button.style.setProperty('--mag-y', '0px');
      button.style.setProperty('--btn-x', '50%');
      button.style.setProperty('--btn-y', '50%');
    });
  });
}

function initTilt(root) {
  if (prefersReducedMotion()) return;

  root.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty('--ry', `${x * 5}deg`);
      card.style.setProperty('--rx', `${-y * 5}deg`);
      card.style.setProperty('--tilt-x', `${(x + 0.5) * 100}%`);
      card.style.setProperty('--tilt-y', `${(y + 0.5) * 100}%`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--tilt-x', '50%');
      card.style.setProperty('--tilt-y', '50%');
    });
  });
}

function initHeroWords(root) {
  const hint = root.querySelector('[data-hero-hint]');
  const hintsNode = root.querySelector('[data-discipline-hints]');
  const words = root.querySelectorAll('[data-discipline]');

  if (!hint || words.length === 0) return;

  let hints = {};
  try {
    hints = JSON.parse(hintsNode?.textContent || '{}');
  } catch {
    hints = {};
  }

  const defaultText = hint.textContent.trim();

  words.forEach((word) => {
    const show = () => {
      hint.textContent = hints[word.dataset.discipline] || defaultText;
    };
    const reset = () => {
      hint.textContent = defaultText;
    };

    word.addEventListener('pointerenter', show);
    word.addEventListener('pointerleave', reset);
    word.addEventListener('focus', show);
    word.addEventListener('blur', reset);
  });
}

function initCursorField(root) {
  if (prefersReducedMotion()) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight * 0.25;
  let frame = 0;

  const apply = () => {
    frame = 0;
    root.style.setProperty('--cursor-x', `${x}px`);
    root.style.setProperty('--cursor-y', `${y}px`);
  };

  window.addEventListener(
    'pointermove',
    (event) => {
      if (event.pointerType === 'touch') return;
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    },
    { passive: true },
  );
}

export function initHome() {
  const root = document.querySelector('[data-home]');
  if (!root) return;

  initCursorField(root);

  const terminal = root.querySelector('[data-terminal]');
  if (terminal) initTerminal(terminal);

  initMagneticButtons(root);
  initTilt(root);
  initHeroWords(root);
}
