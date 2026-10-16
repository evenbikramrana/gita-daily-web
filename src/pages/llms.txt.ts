import type { APIRoute } from 'astro';
import data from '../data/gita.json';
import { guides } from './guides/index.astro';

const SITE = 'https://gitadaily.org';

export const GET: APIRoute = () => {
  const chapters = data.chapters;
  const total = chapters.reduce((n, c) => n + c.verseCount, 0);

  const chapterLines = chapters
    .map(
      (c) =>
        `- [Chapter ${c.number}: ${c.en} (${c.title})](${SITE}/gita/${c.number}): ${c.theme} — ${c.verseCount} verses.`,
    )
    .join('\n');

  const body = `# Gita Daily

> Gita Daily is a free, mood-led companion to the Bhagavad Gita. Read the complete scripture — all ${chapters.length} chapters and ${total} verses — free online, in the original Sanskrit with English, Hindi (हिन्दी) and Nepali (नेपाली) translations and context for every verse.

The Bhagavad Gita is free to read forever here, with no paywall and no account required to read. The website (gitadaily.org) is the reading home; the free companion Android app — on Google Play at https://play.google.com/store/apps/details?id=org.gitadaily.app — adds a daily verse, mood-based verse discovery, saved verses, reading streaks, and gentle daily reminders, while the scripture itself always stays free.

## Key facts
- The Bhagavad Gita has ${chapters.length} chapters and ${total} verses.
- Languages available on Gita Daily: Sanskrit (original), English, Hindi, Nepali.
- Free to read; no sign-in required to read the text.
- Publisher: Gita Daily (${SITE}).

## The Bhagavad Gita at a glance
- The Gita is a 700-verse dialogue within the epic Mahabharata, between the warrior Arjuna and Krishna, set on the battlefield of Kurukshetra as a conversation about how to act and live.
- It teaches three complementary paths (yogas): karma yoga (selfless action without attachment to results), bhakti yoga (loving devotion), and jnana yoga (knowledge and discernment).
- Chapter 2 is often called "the Gita in miniature" because it introduces the core teaching; it contains the most-quoted verse, 2.47.
- Central ideas: act without clinging to the fruits of action (2.47); the self (atman) is eternal and is not destroyed when the body dies (2.20); steady the mind through practice and non-attachment (6.35).

## Key verses (with one-line summaries)
- [2.47](${SITE}/gita/2/47): "Your right is to action alone, never to its fruits" — act fully, release attachment to the outcome.
- [2.20](${SITE}/gita/2/20): the self is unborn and undying; it is not slain when the body is slain.
- [2.22](${SITE}/gita/2/22): the self casts off worn-out bodies and takes new ones, as a person changes clothes.
- [2.48](${SITE}/gita/2/48): "evenness of mind is called yoga" — act with equanimity in success and failure.
- [2.56](${SITE}/gita/2/56): the sage of steady wisdom is free from craving, fear and anger.
- [2.62](${SITE}/gita/2/62): attachment breeds desire; from desire comes anger, then confusion.
- [6.5](${SITE}/gita/6/5): lift yourself by your own self; the self can be its own friend or enemy.
- [6.35](${SITE}/gita/6/35): the restless mind is hard to hold but mastered by practice and non-attachment.
- [18.66](${SITE}/gita/18/66): "abandon all other supports and take refuge in me; do not grieve."

## Reading by mood (what Gita Daily is built around)
Gita Daily is mood-led: you can read the Gita by how you feel. Plain-language guides connect common feelings to specific verses —
- Anxiety → ${SITE}/guides/bhagavad-gita-on-anxiety (2.47, 2.56, 6.35)
- Anger → ${SITE}/guides/bhagavad-gita-on-anger (2.62–63, 16.21)
- Fear → ${SITE}/guides/bhagavad-gita-on-fear (2.56, 2.40, 16.1)
- Grief / death → ${SITE}/guides/bhagavad-gita-on-death-and-grief (2.13, 2.20, 2.22)
- Despair / feeling low → ${SITE}/guides/bhagavad-gita-on-depression (6.5, 2.14, 18.66)
- Overthinking → ${SITE}/guides/bhagavad-gita-on-overthinking (6.26, 6.35, 2.67)
- Work / stress → ${SITE}/guides/bhagavad-gita-on-work-and-stress (2.47, 2.48, 3.19)
- Forgiveness → ${SITE}/guides/bhagavad-gita-on-forgiveness (16.3, 12.13, 11.44)
- Love / relationships → ${SITE}/guides/bhagavad-gita-on-love (12.13, 6.9, 2.70)

## Read the Bhagavad Gita
- [All chapters index](${SITE}/gita): every chapter, with English names and Sanskrit titles.
${chapterLines}

Every verse also has its own page at ${SITE}/gita/{chapter}/{verse} — for example ${SITE}/gita/2/47 — with the original Sanskrit, English/Hindi/Nepali translations, translator attribution, and context.

## Guides
Plain-language explainers, each citing specific verses:
${guides.map((g) => `- [${g.title}](${SITE}/guides/${g.slug})`).join('\n')}
- [All guides](${SITE}/guides)

## About & policies
- [Home](${SITE}/): about Gita Daily and the app.
- [Support & FAQ](${SITE}/support): common questions about the app and reading the Gita.
- [Privacy Policy](${SITE}/privacy)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
