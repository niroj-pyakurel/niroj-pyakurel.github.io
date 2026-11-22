import { site } from './site.js';

export const socials = [
  {
    label: 'Email',
    href: `mailto:${site.email}`,
    handle: site.email,
  },
  {
    label: 'LinkedIn',
    href: site.linkedin,
    handle: 'in/niroj-pyakurel7',
  },
  {
    label: 'GitHub',
    href: `https://github.com/${site.github}`,
    handle: `@${site.github}`,
  },
];
