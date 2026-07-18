# Design Recommendations — Lynn Honn | Restorative Sound

> **Brand / practice name:** Lynn Honn | Restorative Sound · **Facilitator:** Abigail Honn

> **Implementation status:** This system is built and live. Implemented: the palette (as CSS
> variables in `src/styles/global.css` — section backgrounds are now CMS-editable, defaulting
> to this palette), the type pairing (**Cormorant Garamond** + **Mulish**, self-hosted), and
> the full single-page layout, section by section. The wordmark is the reworked
> **"Lynn honn · Restorative Sound"** logo (wide + stacked lockups) in the header, hero, and
> footer, rendered via CSS mask so it recolors per location; all photos and logos are
> CMS-managed. The brand name is now officially **Lynn Honn | Restorative Sound**, matching
> the logo. See [README](../README.md).

Derived from the existing logo wordmark and the WebReady photography. The whole visual
system already exists *in the images* — warm, earthy, quiet, natural. The site's job is to
get out of the way and let that atmosphere breathe: generous white space, slow scrolling,
large soft imagery, restrained type.

**Design principles**

1. **Space is the feature.** Lots of margin and air. Nothing crowded. The layout itself should feel like a deep breath.
2. **Warm & natural, never clinical.** Sepia/sand/cream, matte textures, linen and stone.
3. **Photography leads.** Full-bleed, soft imagery carries the mood; type stays quiet.
4. **Calm motion only.** Gentle fade-ins on scroll; nothing bouncy or fast.
5. **One clear, low-pressure action.** "Inquire" / "Book a session" — soft, repeated, never pushy.

---

## Color palette

Sampled from the logo and photos. (Hex values are close approximations — refine against final assets.)

| Role | Name | Hex | Use |
|------|------|-----|-----|
| Primary dark | Espresso | `#3E2C22` | Logo backdrop, footer, headings on light |
| Secondary dark | Warm charcoal | `#2B2723` | Body text, B&W imagery grounding |
| Accent | Clay / terracotta | `#A9764F` | Buttons, links, small highlights |
| Accent soft | Muted sand | `#C9B79C` | Dividers, card backgrounds, hovers |
| Neutral light | Linen | `#EDE4D5` | Section backgrounds |
| Neutral lightest | Bone / cream | `#F6F1E8` | Page background, text on dark |
| Optional | Sage | `#6F7460` | Sparse botanical accent (from foliage in photos) |

**Guidance:** Backgrounds alternate between Bone and Linen for gentle rhythm. Espresso for
the footer and occasional full-bleed "rest" sections. Clay is the *only* saturated color —
reserve it for calls to action so they read clearly against the neutrals.

---

## Typography

The logo is an elegant calligraphic italic serif. Echo that in an accessible web pairing:

- **Display / headings:** a refined high-contrast serif — **Cormorant Garamond** (free,
  Google Fonts; beautiful italics that harmonize with the logo) or **Canela** (premium).
  Use the *italic* for the largest hero lines to nod to the wordmark.
- **Body / UI:** a quiet, warm humanist sans — **Mulish**, **Nunito Sans**, or **Figtree**
  (all free). Sets long-form copy comfortably and keeps the serif feeling special.

**Type scale (suggested):** hero `clamp(2.75rem, 6vw, 5rem)` serif italic · section headings
`~2rem` serif · body `1.0625–1.125rem` sans, line-height `~1.7` · generous paragraph spacing.
Letter-spacing slightly loose on small caps / labels for an editorial feel.

---

## Imagery usage

- Lead the **hero** with `IMG_0753` (client + bowls, session in action) or `IMG_3792`
  (bowls on linen) as a full-bleed, softly darkened background behind the wordmark + tagline.
- **Wordmark:** resolved — the "Lynn honn" mark was reworked into the
  **"Lynn honn · Restorative Sound"** logo (wide + stacked transparent PNG lockups,
  recolored per location via CSS mask), and the brand name was aligned to it.
  "Abigail Honn" remains the facilitator name in copy/About.
- Map imagery to sections: sculpture `IMG_0966` → Postpartum; `IMG_0918` → Private/process;
  `IMG_0978` → About; `FullSizeRender` (hand + chime) → The Restorative Response or as texture.
- Treatment: keep the natural VSCO grade, apply subtle warm overlays for text legibility,
  favor large rounded-corner or full-bleed frames, soft shadows only.
- **Accessibility:** ensure text over photos meets contrast (add a scrim/gradient); write
  descriptive `alt` text; don't rely on color alone for meaning.

---

## Layout — page by page (single-page scroll)

### 1. Header / Nav
Minimal, transparent over the hero, condensing to a solid Bone bar on scroll. Wordmark left;
anchor links right (Offerings · About · FAQ · Contact) + a small Clay "Inquire" button.
Collapses to a hamburger on mobile.

### 2. Hero
Full-viewport photo, warm scrim. Centered: wordmark, then the one-sentence descriptor in
serif italic, then a single Clay CTA. A subtle scroll cue at the bottom.

### 3. Introduction
Bone background, narrow centered column (~60ch). The "true rest" paragraph, large and airy.
A small accent image or divider rule.

### 4. The Restorative Response
Linen background. Two-column on desktop: copy left, the hand/chime image right (or reversed).
Optionally 3 quiet icon+label benefits (Nervous-system regulation · Emotional grounding ·
Full-body rest). Keep it evocative, not chart-y.

### 5. Offerings
Section intro line, then **three cards** (stack on mobile). Each: image, title, 1–2 sentence
summary, "Learn more" → expands or links to detail. Cards on Bone with soft shadow.
- Postpartum Restorative Sessions — `IMG_0966`
- Christian Contemplative Gatherings — a gathering/scripture-toned image (to source)
- Private Restorative Sessions — `IMG_0918`

### 6. About — Abigail
Espresso or Linen "rest" band. Portrait `IMG_0978` one side, first-person story the other.
Warm, personal, generous line spacing.

### 7. FAQ
Bone background, centered narrow column. Accordion list (one open at a time). Calm, no borders-heavy look.

### 8. Testimonials
Linen background. Slow, quiet carousel or a simple 2–3 column quote grid. Serif italic quotes,
attribution in small caps. (Placeholder until gathered.)

### 9. Contact / Inquiry
Espresso footer-adjacent band. Warm invitation line, phone, email, and an inquiry form
(name, email, which offering, message) or a "Book / Email" button for v1. Reassure it's low-pressure.

### 10. Footer
Espresso. Wordmark, nav repeat, contact, small copyright. Optional Instagram link if she has one.

---

## Responsive & performance
- Mobile-first; most sections are single-column stacks with the same rhythm.
- Serve `WebReady` images; add `srcset`/`sizes` and `loading="lazy"` below the fold.
- Convert to **WebP/AVIF** at build for smaller payloads; the `Source` originals are large.
- Respect `prefers-reduced-motion` — disable scroll animations when set.
- Target fast, lightweight pages; this content doesn't need heavy JS.

---

## Recommended tech stack

For a small, content-driven, design-forward site that's cheap to host and easy to maintain:

- **Astro** — static output, great image optimization, minimal JS, easy to hand-edit content.
  Ideal for a mostly-static brochure site. *(Top recommendation.)*
- **Alternatives:** plain **HTML/CSS** (simplest, but less reusable); **Eleventy** (lean SSG);
  a **Squarespace/Showit** template if Abigail wants to self-edit without code.
- **Hosting:** Netlify or Cloudflare Pages (free tier, forms available, custom domain).
- **Fonts:** self-host the chosen Google Fonts for speed/privacy.
- **Contact form:** Netlify Forms or Formspree for v1 (no backend to maintain).

Decide the stack and domain (see README Open Questions) before scaffolding.
