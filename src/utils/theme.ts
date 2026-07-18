// Section background colors are CMS-managed (admin → Site Settings →
// Section Backgrounds) as free hex values. A section whose background is
// dark automatically gets the `section--dark` treatment (light text) so an
// editor can't make a band unreadable.

function relativeLuminance(hex: string): number {
  const h = hex.replace('#', '').trim();
  const full = h.length === 3 ? [...h].map((c) => c + c).join('') : h;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return 1; // invalid → treat as light
  const [r, g, b] = [0, 2, 4]
    .map((i) => parseInt(full.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function isDark(hex: string): boolean {
  return relativeLuminance(hex) < 0.4;
}

/** Class + inline style for a section band with a CMS-managed background. */
export function sectionProps(color: string | undefined, fallback: string) {
  const c = color || fallback;
  return {
    class: `section${isDark(c) ? ' section--dark' : ''}`,
    style: `background:${c}`,
  };
}
