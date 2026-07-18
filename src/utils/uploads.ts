import type { ImageMetadata } from 'astro';

// Media-library uploads (admin → any image field) land in src/assets/uploads.
// Resolving them through this glob keeps them in Astro's image pipeline.
const uploads = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/uploads/*',
  { eager: true }
);

/** Resolve a CMS-stored upload path, falling back to a bundled image. */
export function resolveUpload(
  path: string | undefined,
  fallback: ImageMetadata
): ImageMetadata {
  return (path && uploads[path]?.default) || fallback;
}
