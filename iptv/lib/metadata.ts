/**
 * Central SEO constants for the IPTV Premium UK project.
 * All page-level metadata imports from here to ensure consistency.
 */

export const SITE_URL = "https://iptv-premium-uk.tv";
export const SITE_NAME = "IPTV Premium UK";

export const PRIMARY_KEYWORD = "iptv premium uk";

export const KEYWORDS = [
  "iptv premium uk",
  "buy iptv subscription",
  "cheap iptv",
  "fast iptv",
  "iptv providers uk",
  "iptv subscription uk 4k",
  "buy iptv uk",
  "british iptv 4k",
  "best iptv uk subscription",
  "iptv uk 4k",
  "iptv uk",
  "iptv subscription",
  "premium iptv",
  "iptv service uk",
  "best iptv uk",
];

export const OG_IMAGE = "/iptv-premium-uk-og-image.webp";
export const LOGO_URL = "/iptv-premium-uk-logo.webp";
export const LOGO_ABSOLUTE = `${SITE_URL}/iptv-premium-uk-logo.webp`;

/** Shared OpenGraph defaults — merged into per-page metadata */
export const OG_DEFAULTS = {
  locale: "en_GB" as const,
  siteName: SITE_NAME,
  images: [{ url: OG_IMAGE }],
};
