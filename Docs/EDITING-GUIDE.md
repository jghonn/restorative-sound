# Editing Guide — for Abigail

This site has a built-in **content manager** so you can update text and testimonials
yourself, with no code. You make a change, click publish, and the live site updates on its
own within a minute or two.

> **Note:** the live editor turns on only after the site is deployed (domain + Netlify).
> Until then, changes can be previewed locally (see the end of this guide).

---

## How to log in

1. Go to **`https://restorativesound.org/admin/`** (your real address + `/admin/`).
2. Log in with your **email and password**. (At launch you'll get a one-time email
   invitation — click the link in it to set your password.)
3. You'll see the content manager with sections down the left side.

> Forgot your password? Use the "forgot password" link on the login screen — a reset
> email arrives within a minute.

## What you can edit

| Section | What's inside |
|---------|---------------|
| **Site Settings & Copy → General & Contact** | Tagline, email, phone, Instagram link |
| **Site Settings & Copy → Home Page Copy** | Intro paragraphs, the Restorative Response text, benefit chips, Offerings heading |
| **Site Settings & Copy → About** | Your profile photo, About heading, opening line, and story paragraphs |
| **Site Settings & Copy → Contact** | The Contact section's heading and main paragraph |
| **Site Settings & Copy → Section Backgrounds** | The background color of each page band — the brand palette hexes are listed right in each field. Dark colors switch that band to light text automatically. |
| **Offerings** | The three offering cards — title, description, meta line, and which photo |
| **FAQ** | Questions & answers — add, edit, reorder, or hide any |
| **Testimonials** | Add real testimonials and turn them on |

## Common tasks

**Add a testimonial** (you're collecting these!)
1. Click **Testimonials → New Testimonial**.
2. Fill in **Name**, an optional **Context** (e.g. "Postpartum"), and the **Quote**.
3. Turn **"Show on site (published)"** ON.
4. Click **Publish**.
> The grey "Testimonial coming soon" placeholders disappear automatically as soon as one
> real testimonial is published.

**Edit an FAQ answer**
1. Click **FAQ**, choose a question, edit the **Answer**, then **Publish**.
2. To temporarily remove one, turn **"Hide this question (draft)"** ON instead of deleting it.

**Reorder items** — change the **Order** number (lower numbers show first).

**Update your phone or email** — **Site Settings & Copy → General & Contact**.

## Good to know

- **Every change is saved safely.** Nothing is ever lost — the site keeps a full history and
  any change can be undone.
- **Photos:** the **hero (top banner) photo**, your **About profile photo**, and each
  **offering's photo** are all editable — each has a photo field where you upload a new
  image or pick one already in the library. Large originals are fine; the site
  automatically optimizes them at publish. Please update the photo description
  (accessibility) field whenever you change a photo.
- **Two FAQ answers were drafted for you** ("What can I expect…" and "How does sound
  interact…") because the original notes left them blank — please read and tweak them to
  sound like you.

---

## For developers / setup notes

**Content lives in the repo** (so the CMS just edits files, and the site rebuilds on change):
- Singletons: `src/data/general.json`, `src/data/home.json`, `src/data/about.json`
- Collections: `src/content/offerings/*.json`, `src/content/faq/*.json`, `src/content/testimonials/*.json`
- Schemas: `src/content.config.ts` · CMS config: `public/admin/config.yml`

**Preview the admin locally (before deploy):**
```bash
npm run dev          # terminal 1  → http://localhost:4321
npx decap-server     # terminal 2  (local backend; no login needed)
# then open http://localhost:4321/admin/index.html  and click "Login"
```
`local_backend: true` in `config.yml` routes the admin to the local files while testing.
Stop either service with **Ctrl+C** in its terminal.

Gotchas confirmed during setup:
- **Use the full `/admin/index.html` path in dev.** The Astro dev server returns 404 for the
  bare `/admin/` folder path; the built/deployed site serves `/admin/` normally.
- **A git repo is required** — `decap-server` runs in git mode. (Already initialized.)
- Load the admin via **`localhost`**, not `127.0.0.1` (local backend only trusts `localhost`).

**Live admin auth: DecapBridge** (decided 2026-07; Netlify Identity/Git Gateway are
deprecated and were ruled out). [DecapBridge](https://decapbridge.com) is a free hosted
login + git-gateway service built for Decap CMS — editors sign in with email + password,
no GitHub account needed.

Setup (done 2026-07-13, in the DecapBridge dashboard):
1. DecapBridge account created (Jason's); site added, linking `jghonn/restorative-sound`
   with a GitHub **fine-grained access token** (read/write on *Contents*; login URL
   `https://restorativesound.org/admin/index.html`).
2. The site ID is wired into `public/admin/config.yml` (`identity_url`).
3. Remaining: invite Abigail's email under **Manage collaborators** once the site is live.

> If the GitHub token ever expires or is revoked, CMS publishing stops working (login
> still succeeds) — generate a new fine-grained token and update it in the DecapBridge
> dashboard.

See README → Deployment.

**CMS photo uploads:** `media_folder` is `src/assets/uploads` (not `public/`), so every
upload goes through Astro's image pipeline. Components resolve the stored path
(`/src/assets/uploads/...`) via `import.meta.glob` — see the hero photo in
`src/components/Hero.astro` for the pattern. Wired up for the hero background, the About
portrait, and offering photos (Offerings.astro also maps the legacy select values
postpartum/christian/private); to make another image editable, switch its field to
`widget: image` and resolve the same way.
