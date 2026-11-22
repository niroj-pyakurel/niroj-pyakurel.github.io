# Niroj Pyakurel — personal website

A fast, static personal site built with Astro. No backend, no CMS, no form handler. Deployed to GitHub Pages at https://niroj-pyakurel.github.io.

## Local setup

Requires **Node 22+** (Astro 7 requirement).

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # preview the built site
```

## Where things live

| What you want to change | File |
| --- | --- |
| Hero copy, availability, service order, contact details, skills, bio, security thread | `src/data/site.js` |
| Navigation links | `src/data/navigation.js` |
| Email / LinkedIn / GitHub links | `src/data/socials.js` |
| Work experience (feeds `/contact` and `/resume`) | `src/data/experience.js` |
| Case studies | `src/content/projects/*.md` |
| Notes | `src/content/writing/*.md` |
| Theme colors, typography, spacing | `src/styles/tokens.css` |
| Global layout styles | `src/styles/global.css` |

Positioning is deliberately data-driven: reorder `site.services` and edit `site.hero` / `site.availability` in `site.js` to change the site's focus without touching markup.

## Adding a project

Create `src/content/projects/your-slug.md`:

```markdown
---
title: Project name
description: One-sentence summary shown on cards.
date: 2026-04-01
tags:
  - web
stack:
  - Python
securityNotes: What was checked or considered, in plain language.
---

## The problem
...
```

Tags available: `design`, `web`, `security`. Every project should include `securityNotes`.

## Adding a note

Create `src/content/writing/your-slug.md` with `title`, `description`, `date` and optional `tags` in frontmatter, then write the note in Markdown. The feed at `/rss.xml` updates automatically.

## Resume PDF

`public/niroj-pyakurel-resume.pdf` is generated from the `/resume` page. To refresh it after editing resume data, print `/resume` to PDF from a browser with background graphics enabled, and replace the file.

## Deployment

Push to `main`. `.github/workflows/deploy.yml` builds with Node 22 and deploys to GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions**. The repository must be named `niroj-pyakurel.github.io` (a user site, so no `base` path is configured).
