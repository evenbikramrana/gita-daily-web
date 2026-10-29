// Maps a verse ("chapter.verse") to the guide slugs that cite or bear on it.
// Drives the "Related guides" block on verse pages — internal links that pass
// authority from the 701 verse pages out to the guides. Keep each list to the
// few genuinely relevant guides (max ~4) so the block stays high-signal.
//
// Only verses with a meaningful guide connection appear here; most verses have
// none and simply show no block.

export const verseGuides: Record<string, string[]> = {
  '18.64': ['bhagavad-gita-on-loneliness'],
  '10.20': ['bhagavad-gita-on-loneliness'],
  '9.18': ['bhagavad-gita-on-loneliness'],
  '6.30': ['bhagavad-gita-on-loneliness'],
  '3.5': ['bhagavad-gita-on-procrastination'],
  '3.8': ['bhagavad-gita-on-procrastination', 'bhagavad-gita-on-career-confusion'],
  '18.63': ['bhagavad-gita-on-career-confusion'],
  '2.41': ['bhagavad-gita-on-career-confusion'],
  '2.7': ['bhagavad-gita-on-career-confusion'],
  '18.37': ['bhagavad-gita-on-heartbreak'],
  '6.17': ['bhagavad-gita-on-exam-stress'],
  '4.22': ['bhagavad-gita-on-comparison'],
  // Chapter 2 — the "Gita in miniature": the densest cluster of cited verses.
  '2.13': ['bhagavad-gita-on-death-and-grief'],
  '2.14': ['bhagavad-gita-on-depression', 'bhagavad-gita-on-heartbreak'],
  '2.20': ['bhagavad-gita-on-death-and-grief'],
  '2.22': ['bhagavad-gita-on-death-and-grief'],
  '2.23': ['bhagavad-gita-on-death-and-grief'],
  '2.27': ['bhagavad-gita-on-death-and-grief'],
  '2.40': ['bhagavad-gita-on-fear', 'bhagavad-gita-on-exam-stress', 'bhagavad-gita-on-procrastination'],
  '2.47': ['bhagavad-gita-on-anxiety', 'bhagavad-gita-on-work-and-stress', 'bhagavad-gita-on-fear', 'bhagavad-gita-for-beginners'],
  '2.48': ['bhagavad-gita-on-work-and-stress', 'bhagavad-gita-on-exam-stress'],
  '2.50': ['bhagavad-gita-on-work-and-stress'],
  '2.56': ['bhagavad-gita-on-anxiety', 'bhagavad-gita-on-fear', 'bhagavad-gita-on-anger'],
  '2.62': ['bhagavad-gita-on-anger', 'bhagavad-gita-on-forgiveness', 'bhagavad-gita-on-love'],
  '2.63': ['bhagavad-gita-on-anger', 'bhagavad-gita-on-forgiveness', 'bhagavad-gita-on-love'],
  '2.67': ['bhagavad-gita-on-overthinking'],
  '2.70': ['bhagavad-gita-on-overthinking', 'bhagavad-gita-on-love'],

  // Chapter 3 — karma yoga.
  '3.19': ['bhagavad-gita-on-work-and-stress', 'bhagavad-gita-on-procrastination'],
  '3.35': ['bhagavad-gita-on-work-and-stress', 'bhagavad-gita-on-comparison', 'bhagavad-gita-on-career-confusion'],

  // Chapter 5 — equal vision.
  '5.18': ['bhagavad-gita-on-love'],

  // Chapter 6 — meditation and the mind.
  '6.1': ['bhagavad-gita-on-work-and-stress'],
  '6.5': ['bhagavad-gita-on-depression', 'bhagavad-gita-on-overthinking', 'bhagavad-gita-on-loneliness', 'bhagavad-gita-on-comparison'],
  '6.6': ['bhagavad-gita-on-overthinking'],
  '6.9': ['bhagavad-gita-on-love'],
  '6.26': ['bhagavad-gita-on-overthinking', 'bhagavad-gita-on-heartbreak'],
  '6.29': ['bhagavad-gita-on-love'],
  '6.34': ['bhagavad-gita-on-overthinking'],
  '6.35': ['bhagavad-gita-on-anxiety', 'bhagavad-gita-on-overthinking'],

  // Chapter 11 — the universal form.
  '11.44': ['bhagavad-gita-on-forgiveness'],

  // Chapter 12 — devotion; the beloved devotee.
  '12.13': ['bhagavad-gita-on-forgiveness', 'bhagavad-gita-on-love'],
  '12.14': ['bhagavad-gita-on-forgiveness', 'bhagavad-gita-on-love'],

  // Chapter 16 — divine and base qualities.
  '16.1': ['bhagavad-gita-on-fear'],
  '16.3': ['bhagavad-gita-on-forgiveness'],
  '16.21': ['bhagavad-gita-on-anger'],

  // Chapter 18 — conclusion.
  '18.47': ['bhagavad-gita-on-work-and-stress'],
  '18.66': ['bhagavad-gita-on-anxiety', 'bhagavad-gita-on-depression'],
};
