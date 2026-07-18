// Structural brand identity (fixed). Editable contact/copy lives in the JSON
// files in this folder and is managed through /admin (Decap CMS).
import general from './general.json';

export const site = {
  // Fixed identity — change intentionally in code, not via the CMS.
  brand: 'Restorative Sound Healing',
  facilitator: 'Abigail Honn',
  domain: 'restorativesound.org',
  url: 'https://restorativesound.org',

  // Editable via /admin → Site Settings → General & Contact.
  // Logo paths resolve through src/utils/uploads.ts (media library).
  logoWide: general.logoWide,
  logoStacked: general.logoStacked,
  descriptor: general.descriptor,
  tagline: general.tagline,
  email: general.email,
  phone: general.phone,
  phoneHref: general.phoneHref,
  instagram: general.instagram,
};
