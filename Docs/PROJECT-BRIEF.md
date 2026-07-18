# Project Brief — Restorative Sound Healing

> **Brand / practice name:** Restorative Sound Healing · **Facilitator:** Abigail Honn ·
> **Live at:** [restorativesound.org](https://restorativesound.org)

> **Update:** The site is **live** (Astro + Decap CMS + DecapBridge auth, hosted on Netlify
> with continuous deploy from GitHub). The single-page structure below is implemented, and
> all copy, photos, logos, and section colors are editable via `/admin` — which Abigail uses
> herself. Real testimonials are published and the FAQ answers have been reviewed/edited by
> her. See the [README](../README.md) for the tech stack and
> [EDITING-GUIDE](EDITING-GUIDE.md) for how editing works.

## The practice

**Restorative Sound Healing** is the practice of **Abigail Honn**, offering
**trauma-informed sound facilitation** — restorative sound baths and
stillness experiences designed to support nervous-system regulation, deep rest, and
recovery. Her background: guided backpacking retreats, a degree in biology & ecology, and
mentorship/training in trauma-informed sound facilitation. The brand voice is calm,
warm, gentle, and grounded — never clinical or salesy.

## Goals of the site

1. **Introduce Abigail and the practice** in a way that feels calming and trustworthy.
2. **Explain the three offerings** clearly so a visitor can self-identify with one.
3. **Convert interest into an inquiry** — make it easy and low-pressure to reach out or book.
4. **Establish credibility** through her story, the "science" of the restorative response, and testimonials.

## Audiences

- **New & postpartum mothers** seeking rest and support in-home.
- **Faith communities / individuals** drawn to Christian contemplative practice.
- **Anyone in a season of depletion** — burnout, grief, recovery, transition.
- **Groups & organizations** — retreats, wellness spaces, private group bookings, collaborations.

## Voice & tone

Soft, embodied, unhurried. Short paragraphs. First person for Abigail's own sections.
Avoid medical claims — describe *support* and *experience*, not treatment or cure.

---

## Sitemap

A single-page scrolling site is a strong fit for the content volume; a light multi-page
structure also works. Recommended primary structure (works either way):

```
Home
├── Hero — logo, tagline, one-sentence descriptor, primary "Inquire" CTA
├── Introduction — homepage paragraph (the "true rest" copy)
├── The Restorative Response — the science / benefits
├── Offerings (3 cards → detail)
│   ├── Postpartum Restorative Sessions
│   ├── Christian Contemplative Gatherings
│   └── Private Restorative Sessions (individual + small group)
├── About — Abigail Honn
├── FAQ
├── Testimonials
└── Contact / Inquiry — phone, email, inquiry form
```

**Recommendation:** Build as **one long scrolling home page** with anchored nav sections,
with the option to split Offerings into their own pages later if each grows (pricing,
scheduling, photos). This matches the meditative, uninterrupted feel of the brand and
keeps the build simple for v1.

---

## Content status (from `WEBSITE PREP.md`)

| Section | Status | Notes |
|---------|--------|-------|
| Tagline / descriptor | ✅ Two options drafted | Pick one (see below) |
| Homepage intro paragraph | ✅ Ready | — |
| The Restorative Response | ✅ Ready | Strong, keep as-is |
| Postpartum Sessions | ⚠️ Draft + variants | Duplicate paragraphs to merge; one flagged `**change` |
| Christian Contemplative Gatherings | ⚠️ Needs additions | Author note: add length, past examples, space needed |
| Private Restorative Sessions | ⚠️ Draft + variants | "too repetitive" note — needs fresh wording |
| About / Abigail | ✅ Ready | — |
| FAQ | ⚠️ Mostly ready | "What to Expect" & "How does sound interact…" have no answers yet; some Q's have two answer variants |
| Testimonials | ❌ Not gathered | Requesting from: Merrilyn, Johanna, Jess, Cami, Micaela (pp), Victory (pp). Maria struck out. |
| Contact | ✅ Ready | Phone `208-789-7178` (confirmed by Abigail via CMS), email `abigail.l.honn@gmail.com` |

### Copy decisions to make
- **Tagline** — choose between:
  1. *"Supporting individuals through seasons of depletion, transition, and healing through restorative sound and stillness."*
  2. *"Sound and stillness experiences designed to support deep rest, nervous system regulation, and restorative meditation."*
- Merge the duplicated Postpartum/Private paragraphs into single clean versions.
- Write answers for the two empty FAQs and pick between the doubled FAQ answers.

## Content still to gather (author's to-do list)
- [ ] Photos: bowls, restorative pose, profile of Abigail, logo *(partially done — see WebReady)*
- [ ] Testimonials from the list above
- [ ] Session lengths, what's included, and pricing per offering
- [ ] Service area / travel radius (sessions are in-home)
- [ ] Verify phone number

## Compliance / trust notes
- Keep language supportive, not medical. No treatment/cure claims.
- Consider a short, gentle disclaimer near booking ("not a substitute for medical or mental-health care").
- If a real inquiry form is added, note how contact details are handled (basic privacy line).
