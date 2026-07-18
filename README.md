# Restorative Sound Healing (Website Project)

A marketing website for **Restorative Sound Healing** — the practice of **Abigail Honn**, a
trauma-informed sound facilitator offering restorative sound-bath and stillness experiences.
The site introduces her practice, describes her offerings, and provides a way for prospective
clients to inquire and book.

- **Brand / practice name:** Restorative Sound Healing
- **Facilitator name (used in copy, About, contact):** Abigail Honn
- **Live site:** **[restorativesound.org](https://restorativesound.org)**
- **Repo:** `github.com/jghonn/restorative-sound` · **Hosting:** Netlify (continuous deploy from `main`)

> **Status: LIVE.** The site is deployed and the content manager at
> [`/admin/`](https://restorativesound.org/admin/) is in active use — Abigail edits copy,
> photos, testimonials, and FAQs herself (each publish becomes a git commit and triggers a
> Netlify rebuild). See [Open questions](#open-questions) for the small remaining items.

---

## Tech stack

- **[Astro](https://astro.build) 5** — static site generator (zero JS by default, built-in image optimization)
- **[Decap CMS](https://decapcms.org)** — free, git-based content manager at `/admin` (see [Docs/EDITING-GUIDE.md](Docs/EDITING-GUIDE.md))
- **[DecapBridge](https://decapbridge.com)** — hosted auth + git-gateway for the CMS: Abigail
  logs in with email + password; her edits are committed to GitHub via a fine-grained PAT
  registered in the DecapBridge dashboard (Jason's account). Chosen because Netlify
  Identity/Git Gateway are deprecated.
- **Self-hosted fonts** — Cormorant Garamond (display) + Mulish (body) via `@fontsource`
- **Netlify** — hosting (continuous deploy from `main`) + free built-in Forms for the inquiry form (see `netlify.toml`)
- **GitHub** — `jghonn/restorative-sound`; every CMS publish lands here as a commit
  ("… via DecapBridge" author attribution)

## Content model (editable via `/admin`)

All page copy, photos, logos, and section colors live in data files, not in the components:

- **Singletons:** `src/data/general.json` (logos, contact, tagline), `home.json` (hero photo +
  section copy), `about.json` (portrait + story), `contact.json`, `footer.json`,
  `theme.json` (per-section background colors; dark colors auto-switch to light text)
- **Collections:** `src/content/{offerings,faq,testimonials}/*.json` (schemas in `src/content.config.ts`)
- **Media library:** uploads land in `src/assets/uploads/` so they pass through Astro's
  image pipeline; components resolve stored paths via `src/utils/uploads.ts`
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
│   └── favicon.svg
├── src/
│   ├── data/                      ← editable singletons: site.ts, general/home/about/
│   │                                contact/footer/theme .json
│   ├── content/                   ← editable collections: offerings/, faq/, testimonials/ (*.json)
│   ├── content.config.ts          ← collection schemas
│   ├── styles/global.css          ← palette + type system (CSS variables)
│   ├── layouts/Layout.astro       ← HTML shell, SEO meta, font imports
│   ├── components/                ← Header, Hero, Intro, RestorativeResponse,
│   │                                Offerings, About, Faq, Testimonials, Contact, Footer
│   ├── pages/index.astro          ← single-page scroll composition
│   ├── utils/                     ← uploads.ts (media resolver), theme.ts (section colors)
│   └── assets/
│       ├── images/                ← bundled images (fallbacks, textures)
│       └── uploads/               ← CMS media library (Astro optimizes → WebP)
└── Images/
    ├── Source/                    ← full-resolution originals (JPG / HEIC)
    └── WebReady/                  ← web-optimized exports (source for src/assets/images)
```

## Deployment (live)

The pipeline is fully automated — there are no manual deploy steps:

1. **Push to `main`** (or publish in the CMS, which commits to `main`) → Netlify builds
   (`npm run build`, publish `dist`; settings in `netlify.toml`) → live at
   [restorativesound.org](https://restorativesound.org) in ~a minute.
2. **Inquiry form** submissions appear under **Forms** in the Netlify dashboard.
3. **CMS auth** is managed in the [DecapBridge](https://decapbridge.com) dashboard
   (Jason's account): invite/remove editors under **Manage collaborators**. The GitHub
   fine-grained PAT registered there is what lets the CMS commit — if it expires or is
   revoked, CMS logins still work but publishing fails; regenerate the token (repo Contents
   read/write) and update it in DecapBridge.

## Documentation

| Document | Purpose |
|----------|---------|
| [Docs/EDITING-GUIDE.md](Docs/EDITING-GUIDE.md) | **For Abigail** — how to edit the site through the `/admin` content manager. |
| [Docs/PROJECT-BRIEF.md](Docs/PROJECT-BRIEF.md) | What the site is, who it's for, the page map, and what content still needs to be gathered. |
| [Docs/DESIGN-RECOMMENDATIONS.md](Docs/DESIGN-RECOMMENDATIONS.md) | Proposed brand system — colors, typography, imagery, and a layout for every page. |
| [Docs/WEBSITE PREP.md](Docs/WEBSITE%20PREP.md) | Abigail's original content draft and working notes (source of truth for copy). |

## Image inventory (`Images/WebReady/`)

| File | What it shows | Where it's used |
|------|---------------|-----------------|
| `lynn-honn-logo.png` | "Lynn honn · Restorative Sound" mark, wide lockup | Header (via CMS logo slot) |
| `LynnHonnLogo-Centered.PNG` | Same mark, stacked/centered lockup | Hero + footer (via CMS logo slots) |
| `IndividualRestorativeSoundSession.jpg` | Client resting, bowl being played beside them | Hero background (via CMS) |
| `IMG_0991.jpg` | Original "Lynn honn" wordmark scan, cream on sepia | Style reference (superseded by the logo PNGs) |
| `IMG_0753_VSCO.jpg` | Client reclining with eye mask, bowls in foreground | Bundled fallback for the hero photo |
| `IMG_3792.jpg` | Array of frosted crystal singing bowls on linen | Offerings (in media library as `crystal-singing-bowls`) |
| `IMG_0918_VSCO.jpg` | Hands playing a singing bowl over a client | Offerings (in media library as `hands-playing-bowl`) |
| `IMG_0966.jpg` | B&W mother-and-child stone sculpture | Offerings (in media library as `postpartum-mother-child-sculpture`) |
| `IMG_0978.jpg` | Portrait of Abigail | About (in media library as `abigail-portrait`) |
| `FullSizeRender_VSCO.jpg` | Hand touching a hanging seed-chime by a window | The Restorative Response |

## Decisions locked

- **Brand / practice name:** **Restorative Sound Healing** (evocative, keeps the "sound"
  differentiator, uses her own vocabulary).
- **Facilitator name:** **Abigail Honn** — used in copy, About, and contact.
- **Logo:** the reworked **"Lynn honn · Restorative Sound"** mark (wide + stacked lockups) is
  used in the header, hero, and footer — CMS-swappable via three logo slots in General &
  Contact. Rendered via CSS mask (single-color, transparent PNGs), so the site recolors it
  per location.
- **Domain:** **`restorativesound.org`** — **purchased.** (Earlier working candidate was
  `restorativesoundhealing.com`; the shorter `.org` was chosen and registered instead.)
- **CMS auth: DecapBridge** — free hosted email+password login for `/admin`, no GitHub
  account needed for Abigail. Chosen over Netlify Identity + Git Gateway (deprecated by
  Netlify) and the GitHub OAuth backend (would require Abigail to manage a GitHub account).

## Open questions

1. **Brand naming split** — the logo reads "Lynn honn · Restorative Sound" while the site's
   text (page title, meta, copyright, copy) says "Restorative Sound Healing." Decide the
   official name and align `site.ts` + copy if needed.
2. **Session lengths / pricing / service area** — still not published; add when Abigail is ready.

## Launch checklist (done)

- [x] Confirm brand name and domain — **Restorative Sound Healing** / `restorativesound.org`
- [x] Confirm tech stack — **Astro + Netlify** (free)
- [x] Scaffold the site and build all pages per the design recommendations
- [x] Add a content manager (`/admin`) so Abigail can edit text & testimonials
- [x] Register the domain and connect it — **`restorativesound.org`** live with HTTPS
- [x] Deploy to Netlify with continuous deployment from GitHub
- [x] CMS auth via DecapBridge; Abigail invited and actively editing
- [x] Logo — the reworked "Lynn honn · Restorative Sound" mark in header, hero, and footer
- [x] FAQ answers reviewed and edited by Abigail (via CMS)
- [x] Real testimonials added by Abigail; placeholders removed
- [x] Phone number confirmed/corrected by Abigail via CMS (`208-789-7178`)
- [x] All photos, logos, section copy, and section background colors editable via CMS
