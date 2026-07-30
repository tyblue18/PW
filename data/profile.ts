/**
 * Single source of truth for the headline copy shown across every hero variant.
 *
 * There are ten heroes (the default plus nine themes) and they used to each carry
 * their own hardcoded copy, which drifted apart. Edit here and every theme follows.
 */
export const PROFILE = {
  name: "Tanishq Somani",

  /** Typed out character-by-character in the animated heroes. Keep the pipes — they set the rhythm. */
  tagline: "Full-Stack Engineer | AI Systems | Forward Deployed Engineer",

  /** Compact title for heroes that show a single role line instead of the typed tagline. */
  role: "Full-Stack & Forward Deployed Engineer",

  /** One-sentence positioning statement shown under the title. */
  summary:
    "I design, ship, and operate real products end to end — from the database schema to the deployed app people actually use.",

  /** Short keyword chips. Recruiters scan these first, so keep them title-shaped and skimmable. */
  pillars: ["Full-Stack", "AI Systems", "Forward Deployed"],
} as const;
