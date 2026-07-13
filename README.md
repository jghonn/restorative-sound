# Restorative Sound Healing (Website Project)

A marketing website for **Restorative Sound Healing** — the practice of **Abigail Honn**, a
trauma-informed sound facilitator offering restorative sound-bath and stillness experiences.
The site introduces her practice, describes her offerings, and provides a way for prospective
clients to inquire and book.

- **Brand / practice name:** Restorative Sound Healing
- **Facilitator name (used in copy, About, contact):** Abigail Honn
- **Domain:** `restorativesound.org` *(purchased — ready to connect at deploy)*

> **Status:** v1 built and running locally. Astro site with all sections, real copy, optimized
> images, a Netlify-ready inquiry form, and a **content manager (Decap CMS) at `/admin`** so
> Abigail can edit text and testimonials herself. **Git repo initialized** (initial commit made).
> The content manager has been verified locally. Not yet pushed to GitHub or deployed. The
> domain `restorativesound.org` is purchased — deploy is unblocked. See [Open Questions](#open-questions).

---

## Tech stack

- **[Astro](https://astro.build) 5** — static site generator (zero JS by default, built-in image optimization)
- **[Decap CMS](https://decapcms.org)** — free, git-based content manager at `/admin` (see [Docs/EDITING-GUIDE.md](Docs/EDITING-GUIDE.md))
- **Self-hosted fonts** — Cormorant Garamond (display) + Mulish (body) via `@fontsource`
- **Netlify** — hosting + free built-in Forms for the inquiry form (see `netlify.toml`)

## Content model (editable via `/admin`)

All page copy lives in data files, not in the components:

- **Singletons:** `src/data/general.json` (contact/tagline), `src/data/home.json` (section copy), `src/data/about.json`
- **Collections:** `src/content/{offerings,faq,testimonials}/*.json` (schemas in `src/content.config.ts`)
- **CMS config:** `public/admin/config.yml`

Fixed brand identity (name, domain) stays in `src/data/site.ts`.

## Local development

```bash
npm install      # once
npm run dev      # dev server at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
```

### Editing content locally (content manager)

```bash
npm run dev          # terminal 1
npx decap-server     # terminal 2 (local backend; no login needed)
```
Then open **`http://localhost:4321/admin/index.html`** and click **Login**.

- Use the full **`/admin/index.html`** path in dev — the Astro dev server 404s on the bare
  `/admin/` folder path. On the deployed site, **`/admin/`** works normally.
- Requires a **git repo** (already initialized) — `decap-server` runs in git mode.
- Stop either service with **Ctrl+C** in its terminal.

## Repository structure

```
AbigailHonn/
├── README.md                      ← you are here (project hub)
├── package.json / astro.config.mjs / tsconfig.json / netlify.toml
├── Docs/
│   ├── WEBSITE PREP.md            ← original source copy + author's working notes
│   ├── PROJECT-BRIEF.md           ← audience, goals, sitemap, content status
│   ├── DESIGN-RECOMMENDATIONS.md  ← brand, palette, type, page-by-page layout
│   └── EDITING-GUIDE.md           ← for Abigail: how to use the /admin content manager
├── public/
│   ├── admin/                     ← Decap CMS (content manager UI + config.yml)
│   ├── uploads/                   ← CMS media folder
│   └── favicon.svg
├── src/
│   ├── data/                      ← editable copy: site.ts, general.json, home.json, about.json
│   ├── content/                   ← editable collections: offerings/, faq/, testimonials/ (*.json)
│   ├── content.config.ts          ← collection schemas
│   ├── styles/global.css          ← palette + type system (CSS variables)
│   ├── layouts/Layout.astro       ← HTML shell, SEO meta, font imports
│   ├── components/                ← Header, Hero, Intro, RestorativeResponse,
│   │                                Offerings, About, Faq, Testimonials, Contact, Footer
│   ├── pages/index.astro          ← single-page scroll composition
│   └── assets/images/             ← WebReady images (Astro optimizes → WebP)
└── Images/
    ├── Source/                    ← full-resolution originals (JPG / HEIC)
    └── WebReady/                  ← web-optimized exports (source for src/assets/images)
```

## Deployment (Netlify)

1. The git repo is already initialized locally (initial commit made). Create an empty GitHub
   repo, then add it as a remote and push:
   ```bash
   git remote add origin https://github.com/<owner>/<repo>.git
   git push -u origin main
   ```
2. In Netlify: **New site from Git** → pick the repo. Build settings auto-detect from `netlify.toml`
   (`npm run build`, publish `dist`).
3. Add the custom domain `restorativesound.org` and enable HTTPS.
4. Inquiry submissions appear under **Forms** in the Netlify dashboard (add a notification email).
5. **Turn on the content manager:** the [DecapBridge](https://decapbridge.com) site is
   created and wired into `public/admin/config.yml` — just invite Abigail's email from the
   DecapBridge dashboard (**Manage collaborators**). (Netlify Identity/Git Gateway are
   deprecated — not used.) See [Docs/EDITING-GUIDE.md](Docs/EDITING-GUIDE.md).

## Documentation

| Document | Purpose |
|----------|---------|
| [Docs/EDITING-GUIDE.md](Docs/EDITING-GUIDE.md) | **For Abigail** — how to edit the site through the `/admin` content manager. |
| [Docs/PROJECT-BRIEF.md](Docs/PROJECT-BRIEF.md) | What the site is, who it's for, the page map, and what content still needs to be gathered. |
| [Docs/DESIGN-RECOMMENDATIONS.md](Docs/DESIGN-RECOMMENDATIONS.md) | Proposed brand system — colors, typography, imagery, and a layout for every page. |
| [Docs/WEBSITE PREP.md](Docs/WEBSITE%20PREP.md) | Abigail's original content draft and working notes (source of truth for copy). |

## Image inventory (`Images/WebReady/`)

| File | What it shows | Suggested use |
|------|---------------|---------------|
| `IMG_0991.jpg` | "Lynn honn" wordmark, cream italic serif on sepia | Old wordmark — style reference for a new "Restorative Sound Healing" mark |
| `IMG_0753_VSCO.jpg` | Client reclining with eye mask, bowls in foreground | Home hero / Offerings |
| `IMG_3792.jpg` | Array of frosted crystal singing bowls on linen | Hero background / section header |
| `IMG_0918_VSCO.jpg` | Hands playing a singing bowl over a client | Private Sessions / process |
| `IMG_0966.jpg` | B&W mother-and-child stone sculpture | Postpartum Sessions |
| `IMG_0978.jpg` | Portrait of a woman | About Me |
| `FullSizeRender_VSCO.jpg` | Hand touching a hanging seed-chime by a window | Texture / accent / The Restorative Response |

## Decisions locked

- **Brand / practice name:** **Restorative Sound Healing** (evocative, keeps the "sound"
  differentiator, uses her own vocabulary).
- **Facilitator name:** **Abigail Honn** — used in copy, About, and contact. (The existing
  "Lynn honn" wordmark can be retired or reworked to the new brand; see design docs.)
- **Domain:** **`restorativesound.org`** — **purchased.** (Earlier working candidate was
  `restorativesoundhealing.com`; the shorter `.org` was chosen and registered instead.)
- **CMS auth: DecapBridge** — free hosted email+password login for `/admin`, no GitHub
  account needed for Abigail. Chosen over Netlify Identity + Git Gateway (deprecated by
  Netlify) and the GitHub OAuth backend (would require Abigail to manage a GitHub account).

## Open questions

1. **Wordmark** — the current "Lynn honn" mark doesn't match the new brand name; recreate a "Restorative Sound Healing" wordmark (see design docs).

## Next steps

- [x] Confirm brand name and domain — **Restorative Sound Healing** / `restorativesound.org`
- [x] Confirm tech stack — **Astro + Netlify** (free)
- [x] Scaffold the site and build all pages per the design recommendations
- [x] Add a content manager (`/admin`) so Abigail can edit text & testimonials
- [x] Register the domain — **`restorativesound.org`** purchased
- [ ] Deploy to Netlify + turn on the content manager (see [Deployment](#deployment-netlify))
- [ ] Create a new "Restorative Sound Healing" wordmark (style ref: `IMG_0991.jpg`) — currently a serif text placeholder
- [ ] Review the two drafted FAQ answers (were blank in the source)
- [ ] Gather outstanding content: **real testimonials** (placeholders in place), session lengths/pricing, service area
- [ ] Confirm phone number (source shows an 11-digit number; using `208-789-7118`)
