// Central, swappable source of truth for positioning and CV-derived content.
// To change focus later, edit `services`, `hero` and `availability` here — no markup changes.
export const site = {
  name: 'Niroj Pyakurel',
  email: 'nirojpyakurel7@gmail.com',
  phone: '9843391800', // Stored from the CV; intentionally not rendered on the site.
  location: 'Kathmandu, Nepal',
  github: 'niroj-pyakurel',
  linkedin: 'https://www.linkedin.com/in/niroj-pyakurel7/',
  availability: 'Available for freelance work',

  // Reorder or rewrite these to change the lead offer.
  services: [
    {
      title: 'Design & digital media',
      description:
        'Brand graphics, social and web visuals from real work in travel media and live television.',
    },
    {
      title: 'Web security reviews',
      description:
        'Practical vulnerability checks with Nmap, Burp Suite and Wireshark — findings prioritized in plain language.',
    },
    {
      title: 'Web development',
      description:
        'Clean HTML, CSS and Python foundations, built with security in mind from the start.',
    },
  ],

  hero: {
    eyebrow: 'FREELANCE · KATHMANDU, NP',
    headline: 'I design, build and secure web things.',
    lede:
      "I'm Niroj Pyakurel — a freelance designer and Computer Science student in Kathmandu. I help small teams with the things they don't have in-house: clean design, solid web work, and practical security checks.",
  },

  about: {
    lead:
      'I work at the intersection of design and technology: graphic design and digital media on one side, Computer Science and security on the other.',
    paragraphs: [
      "I'm a Computer Science student specializing in Cybersecurity and Networking at Lincoln University College, Malaysia — Kathmandu, Nepal. My hands-on work spans Python, networking and vulnerability assessment with Nessus, Nmap, Wireshark and Burp Suite.",
      'Alongside the technical work, I create graphics for social media, websites, brochures and print, and I have worked on live television coverage of the Nepal Premier League. That mix lets me combine technical knowledge, creativity and teamwork to deliver effective solutions.',
    ],
    closing:
      'I care about clarity, consistency and dependable communication — whether I am coordinating a live broadcast or documenting a security finding.',
  },

  skills: [
    { label: 'Languages', items: ['Python', 'HTML', 'CSS', 'C'] },
    { label: 'Systems', items: ['Windows Administration', 'Linux'] },
    { label: 'Security tools', items: ['Nessus', 'Nmap', 'Wireshark', 'Burp Suite'] },
    { label: 'Networking', items: ['DNS & DHCP', 'Routing and Switching', 'VPN'] },
    { label: 'Soft skills', items: ['Problem Solving', 'Time Management', 'Leadership'] },
  ],

  // Secondary thread, shown as a compact strip on the home page and reinforced elsewhere.
  security: {
    label: 'Security lens',
    tools: ['Nessus', 'Nmap', 'Wireshark', 'Burp Suite'],
    certifications: [
      'Cybersecurity for Businesses — EC-Council',
      'Ethical Hacking — Netcad',
    ],
    note: 'Every web project gets a basic security pass before launch.',
  },

  education: [
    {
      degree: 'Bachelor in Computer Science (Honors Cybersecurity and Networking)',
      school: 'Lincoln University College, Malaysia — Kathmandu, Nepal',
      period: 'May 2024 – Present',
    },
    {
      degree: 'Higher Secondary Examination',
      school: 'Uniglobe Higher Secondary School — Kathmandu, Nepal',
      period: 'Jul 2021 – Apr 2023',
    },
  ],

  certifications: [
    { title: 'Cybersecurity for Businesses', issuer: 'EC-Council', date: 'Nov 2025' },
    { title: 'Ethical Hacking', issuer: 'Netcad', date: 'Mar 2026' },
  ],

  // Migrated to a Markdown content collection in Phase 2.
  projects: [
    {
      title: 'Invoice Generator',
      slug: 'invoice-generator',
      summary:
        'A Python and Tkinter application that turns manual billing into one-click, professional invoices.',
      tags: ['security'],
      highlights: [
        'Automated subtotal, tax and total calculations.',
        'Generated professional invoices in Word (.docx) format with docxtpl.',
        'Designed a user-friendly interface for quick data entry.',
        'Enabled one-click invoice creation for efficiency and ease of use.',
      ],
      securityNotes:
        'Local-first by design — the generator runs on the user’s machine with no network calls or remote storage, so billing data never leaves the device.',
    },
  ],
};
