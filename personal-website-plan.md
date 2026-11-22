# Personal Website Blueprint — Niroj Pyakurel

Status: finalized plan. No project files have been created yet.

## 1. Project Summary

Build a fast, static personal website that acts as a single hub for Niroj Pyakurel and generates freelance inquiries, positioned as a freelance generalist.

- **Owner:** Niroj Pyakurel
- **Location:** Kathmandu, Nepal
- **Email:** nirojpyakurel7@gmail.com
- **GitHub:** niroj-pyakurel
- **Primary positioning:** Freelance generalist — design, web and security (swappable later)
- **Lead service (v1):** Design & digital media
- **Security visibility:** Secondary, but explicit across the portfolio — toolbox strip, `security` tag, and per-case-study security notes
- **Publishing model:** Occasional notes only — no content cadence
- **Backend:** None. Static files only.
- **Hosting:** GitHub Pages via GitHub Actions
- **Live URL target:** https://niroj-pyakurel.github.io

### Goals, in priority order

1. Convert visitors into freelance inquiries.
2. Serve as a single hub for work, experience, notes and contact details.
3. Remain fast, accessible and almost free of maintenance.

### Explicit non-goals

- No consistent publishing schedule or content pressure.
- No CMS, backend, database or server-side form handler.
- No heavy frontend framework, animation library or utility CSS framework.

## 2. Key Architectural Decision: Swappable Positioning

Because the focus may change later, positioning is **data-driven, not hard-coded in components**. Hero copy, availability status and the ordered service list live in `src/data/site.js`. Changing direction later means editing that one file, with no markup changes.

```js
// src/data/site.js
export const site = {
  name: 'Niroj Pyakurel',
  email: 'nirojpyakurel7@gmail.com',
  location: 'Kathmandu, Nepal',
  github: 'niroj-pyakurel',
  linkedin: 'https://www.linkedin.com/in/niroj-pyakurel7/',
  phone: '9843391800', // stored, but not rendered by default
  availability: 'Available for freelance work',

  // Reorder or rewrite these to change focus later
  services: [
    {
      title: 'Design & digital media',
      description: 'Brand graphics, social and web visuals from real work in travel media and live television.'
    },
    {
      title: 'Web security reviews',
      description: 'Practical vulnerability checks with Nmap, Burp Suite and Wireshark — findings prioritized in plain language.'
    },
    {
      title: 'Web development',
      description: 'Clean HTML, CSS and Python foundations, built with security in mind from the start.'
    }
  ],

  hero: {
    eyebrow: 'FREELANCE · KATHMANDU, NP',
    headline: 'I design, build and secure web things.',
    lede: "I'm Niroj Pyakurel — a freelance designer and Computer Science student in Kathmandu. I help small teams with the things they don't have in-house: clean design, solid web work, and practical security checks."
  },

  // Secondary thread shown across the portfolio
  security: {
    label: 'Security lens',
    tools: ['Nessus', 'Nmap', 'Wireshark', 'Burp Suite'],
    certifications: ['Cybersecurity for Businesses — EC-Council', 'Ethical Hacking — Cisco NetAcad'],
    note: 'Every web project gets a basic security pass before launch.'
  }
};
```

## 3. Content (derived from `D:\Project\CV.txt`)

### Hero

- **Eyebrow:** `FREELANCE · KATHMANDU, NP`
- **Headline:** "I design, build and secure web things."
- **Lede:** As in `site.js` above.
- **Status:** `● Available for freelance work`
- **Primary CTA:** `Start a project →` (mailto)
- **Secondary CTA:** `See my work ↓`

### About

Lead with the freelance identity and the blend of skills: design/media work alongside the CS/security background. Include CS degree (Bachelor in Computer Science, Honors Cybersecurity and Networking — Lincoln University College, Malaysia / Kathmandu, 05/2024–Present), certifications (Cybersecurity for Businesses — EC-Council, 11/2025; Ethical Hacking — Cisco NetAcad, 03/2026), and tools (Nessus, Nmap, Wireshark, Burp Suite). Follow with the creative differentiator: graphic design at Yalla Himalayas Travel and Tours and live NPL coverage at Himalaya Television. Close on clarity, consistency and teamwork.

### Services (Home page)

Three cards rendered from `site.services`, in order. First card = current lead offer (design & digital media); reorder in `site.js` to change focus.

### Security in the portfolio

Security is secondary in the pitch but visible in four places:

1. **Home** — a compact `SecurityStrip` directly under the service cards, rendered from `site.security`: the four tools, both certifications, and the one-line "security lens" statement.
2. **Projects index** — a `security` tag/filter alongside `design` and `web`, so visitors can find security-relevant work.
3. **Case studies** — every project includes a short "Security notes" subsection describing what was checked or considered. Written honestly from real work; no invented client engagements.
4. **Blog** — a `security` tag on posts, with the first sample post about practical security tooling.

`/about` and `/resume` already carry the degree, certifications and tools, reinforcing the same thread.

### Experience

| Role | Organization | Dates |
|---|---|---|
| Jr. Producer | Himalaya Television | Oct 2026 – Nov 2026 |
| Graphic Designer | Yalla Himalayas Travel and Tours | May 2025 – Mar 2026 |
| President | Leo Club of Kathmandu Imperial | Jun 2026 – Present |

Bullet content comes from the CV: Red Bull Cricket Live coverage of the Nepal Premier League, on-air coordination, live statistics and graphics, social/web/print design, brand consistency, photo editing and team communication.

A single `src/data/experience.js` file feeds both the compact block on `/contact` and the full timeline on `/resume`.

### Projects

- **Invoice Generator** — Python + Tkinter + `docxtpl`. Case study: manual billing problem → automated subtotal/tax/total calculation → one-click professional `.docx` invoices with a simple GUI.
- Two reserved slots; projects can be added later by dropping one Markdown file into `src/content/projects/`.

### Skills

- **Languages:** Python, HTML, CSS, C
- **Systems:** Windows Administration, Linux
- **Security tools:** Nessus, Nmap, Wireshark, Burp Suite
- **Networking:** DNS & DHCP, Routing and Switching, VPN
- **Soft skills:** Problem Solving, Time Management, Leadership

### Education & certifications

- Bachelor in Computer Science (Honors Cybersecurity and Networking), Lincoln University College, Malaysia — Kathmandu, Nepal, 05/2024–Present
- Higher Secondary Examination, Uniglobe Higher Secondary School, Kathmandu, 07/2021–04/2023
- Cybersecurity for Businesses — EC-Council, 11/2025
- Ethical Hacking — Cisco NetAcad, 03/2026

### Contact

Email `nirojpyakurel7@gmail.com`, LinkedIn `https://www.linkedin.com/in/niroj-pyakurel7/`, Kathmandu / remote-friendly. Phone number is stored in `site.js` but not rendered by default.

### Resume PDF

Copy the FlowCV PDF into `public/niroj-pyakurel-resume.pdf` and link it from `/resume`.

### CV corrections applied on the site

- `Brup Suite` → **Burp Suite**
- `Higher Secondary Examinaton` → **Higher Secondary Examination**
- `Leo Club of Karhmandu Imperial` → **Leo Club of Kathmandu Imperial**

## 4. Information Architecture

```txt
/                     Home — hero, availability, services, security lens, selected work, latest post, CTA
/about                About — background, roles timeline, tools, principles, CTA
/projects             Projects index — tag filters including `security`
/projects/[slug]      Case study (Invoice Generator first) with Security notes section
/blog                 Blog — tag filters including `security`, occasional posts only
/blog/[slug]          Post detail — prose layout, reading time, prev/next
/resume               Full timeline, skills, education, certifications, PDF link
/contact              Email + LinkedIn + quick brief and details
/404                  Friendly not-found page
/rss.xml              Feed
/sitemap-index.xml    Sitemap
```

## 5. Tech Stack

| Layer | Choice |
|---|---|
| Generator | Astro — `.astro` files are HTML-like; output is static HTML |
| Styling | Plain CSS with custom properties; scoped component styles |
| Content | Markdown + frontmatter |
| Interactivity | Vanilla JS: theme toggle (~20 lines), tag filter (~25 lines) |
| Dependencies | `astro`, `@astrojs/sitemap` |
| SEO | `@astrojs/sitemap`, custom `SEOHead.astro`, RSS endpoint |
| Deployment | GitHub Pages via GitHub Actions |
| Contact | `mailto:` and social links — no form, no backend |

**Excluded:** Tailwind, TypeScript, React, Vue, Svelte, MDX, CMS, animation libraries, form services, any server-side code.

## 6. Folder Structure

```txt
/
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.svg                  # "NP" text monogram
│   ├── robots.txt
│   ├── niroj-pyakurel-resume.pdf
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SEOHead.astro
│   │   ├── ThemeToggle.astro
│   │   ├── ServiceCard.astro
│   │   ├── SecurityStrip.astro
│   │   ├── SectionHeading.astro
│   │   ├── ProjectCard.astro
│   │   ├── NoteCard.astro
│   │   └── Tag.astro
│   ├── content/
│   │   ├── projects/                # *.md + frontmatter
│   │   └── blog/                    # *.md + frontmatter
│   ├── data/
│   │   ├── site.js                  # positioning and details — the swap file
│   │   ├── navigation.js
│   │   ├── socials.js
│   │   └── experience.js            # single source for About + Resume
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects/index.astro
│   │   ├── projects/[slug].astro
│   │   ├── blog/index.astro
│   │   ├── blog/[slug].astro
│   │   ├── resume.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   └── rss.xml.js
│   ├── scripts/
│   │   ├── theme.js
│   │   └── filters.js
│   └── styles/
│       ├── tokens.css
│       ├── global.css
│       └── prose.css
├── astro.config.mjs
└── package.json
```

## 7. GitHub Pages Configuration

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://niroj-pyakurel.github.io',
  integrations: [sitemap()],
});
```

Create the repository with the exact name **`niroj-pyakurel.github.io`** (a user site, so no `base` path is required). In repository settings, set Pages source to **GitHub Actions**.

Workflow requirements for `.github/workflows/deploy.yml`:

- Trigger: `push` to `main`, plus `workflow_dispatch`
- Permissions: `contents: read`, `pages: write`, `id-token: write`
- Concurrency group `pages`, `cancel-in-progress: true`
- Build job on `ubuntu-latest`: `actions/checkout@v4` → `actions/setup-node@v4` (Node 20, npm cache) → `npm ci` → `npm run build` → `actions/configure-pages@v5` → `actions/upload-pages-artifact@v3` with `path: dist`
- Deploy job: needs build, environment `github-pages`, `actions/deploy-pages@v4`

## 8. Design System

- **Grid:** Swiss 12-column, max-width ~1120px, generous whitespace.
- **Type:** system UI stack, tight-tracked bold headings, monospace eyebrow labels. No font downloads in v1.
- **Theme:** dark default (`#111111` background / `#F5F5F3` text), light toggle. CSS variables on `:root` and `[data-theme="light"]`, persisted in `localStorage`, respects `prefers-color-scheme`, inline head script prevents flash of wrong theme.
- **Accent:** electric lime `#C6F24E`, used sparingly for links, active filters and small marks.
- **Motion:** CSS transitions only, 150–250ms, `prefers-reduced-motion` honored. No animation library.
- **Brand:** text wordmark "Niroj Pyakurel" in the header; "NP" monogram SVG favicon. `public/images/logo.svg` is a reserved slot for a real logo later.
- **Accessibility:** semantic landmarks, heading order, visible focus states, keyboard-operable toggle and filters, sufficient contrast in both themes.

## 9. Implementation Roadmap

### Phase 1 — Foundation & layout

- Scaffold Astro project with the two dependencies.
- Create `astro.config.mjs`, `tokens.css`, `global.css`, `prose.css`.
- Build `BaseLayout`, `Header`, `Footer`, `SEOHead`, `ThemeToggle`.
- Build homepage skeleton using the real hero copy and status.
- Store all positioning in `site.js`.

**Verify:** `npm run build` passes; theme persists on reload; keyboard focus visible; mobile header works; no console errors.

### Phase 2 — Content & pages

- Define Markdown content collections for projects and blog posts.
- Add the Invoice Generator case study and one sample note.
- Build all routes in the IA, including `ArticleLayout` and `404`.
- Build `ServiceCard`, `SecurityStrip`, `ProjectCard`, `NoteCard`, `Tag`.
- Add the `security` tag to projects and notes, plus a "Security notes" block in `ArticleLayout`.
- Wire `experience.js` into `/contact` and `/resume`; copy the resume PDF into `public/`.

**Verify:** every route renders; frontmatter drives cards and tag filters; experience data appears in both places without duplication; PDF link works.

### Phase 3 — SEO & polish

- Full SEO metadata: title, description, canonical, Open Graph, Twitter cards.
- RSS feed, sitemap, robots.txt.
- Tag filtering on project and note indexes.
- Image Optimization with Astro assets.
- Reduced-motion support, contrast check, final typography refinement.

**Verify:** Lighthouse check; RSS validates; filters work; keyboard navigation works; no console errors.

### Phase 4 — Deploy & handoff

- Add `.github/workflows/deploy.yml`; create `niroj-pyakurel.github.io` repo; set Pages source to Actions.
- Optional custom domain / CNAME if acquired.
- Write README: local setup, how to add a project or note, where to edit positioning in `site.js`, where to edit experience.

**Verify:** live https://niroj-pyakurel.github.io loads; a test edit appears after push to `main`.

## 10. Open Items and Defaults

| Item | Default applied |
|---|---|
| Primary positioning | Freelance generalist; design first, security secondary but visible across portfolio; swappable via `site.js` |
| Projects | Invoice Generator now; more added later |
| Phone number | Not rendered on the site |
| Resume PDF | Copied to `public/` and linked |
| Custom domain | None; use `niroj-pyakurel.github.io` |
| Notes | Occasional; no cadence |

No blocking questions remain.
