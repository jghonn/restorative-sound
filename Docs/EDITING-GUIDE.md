# Editing Guide — for Abigail

This site has a built-in **content manager** so you can update text and testimonials
yourself, with no code. You make a change, click publish, and the live site updates on its
own within a minute or two.

> **Note:** the live editor turns on only after the site is deployed (domain + Netlify).
> Until then, changes can be previewed locally (see the end of this guide).

---

## How to log in

1. Go to **`https://restorativesoundhealing.com/admin/`** (your real address + `/admin/`).
2. Log in when prompted (a one-time invite/login is set up at launch).
3. You'll see the content manager with sections down the left side.

## What you can edit

| Section | What's inside |
|---------|---------------|
| **Site Settings & Copy → General & Contact** | Tagline, email, phone, Instagram link |
| **Site Settings & Copy → Home Page Copy** | Intro paragraphs, the Restorative Response text, benefit chips, Offerings heading |
| **Site Settings & Copy → About** | Your About heading, opening line, and story paragraphs |
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
- **Photos:** the three offering photos can be switched between the existing images. Adding
  brand-new photos is a small setup we can turn on later (see the note for developers below).
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
# then open http://localhost:4321/admin/
```
`local_backend: true` in `config.yml` routes the admin to the local files while testing.

**Turn on the live admin at deploy (needs the GitHub repo):** two options —
1. **Netlify Identity + Git Gateway** (current `backend: git-gateway`): enable Identity on the
   Netlify site, enable Git Gateway, and invite Abigail's email. Simplest for a non-technical user.
2. **GitHub backend + OAuth:** set `backend: { name: github, repo: OWNER/REPO, branch: main }`
   and configure an OAuth app (or a hosted OAuth relay). Avoids Netlify Identity.

Decide at deploy time; both are free. See README → Deployment.

**Enabling new-photo uploads (future):** point offering/testimonial image fields at the
`media_folder` (`public/uploads`) and render those paths directly. Kept off for v1 so the
curated, optimized photography stays consistent.
