import type { APIRoute } from 'astro';
import data from '../data/gita.json';

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

The Bhagavad Gita is free to read forever here, with no paywall and no account required to read. The website (gitadaily.org) is the reading home; the companion Android app adds a daily verse, mood-based verse discovery, saved verses, reading streaks, and gentle daily reminders — while the scripture itself always stays free.

## Key facts
- The Bhagavad Gita has ${chapters.length} chapters and ${total} verses.
- Languages available on Gita Daily: Sanskrit (original), English, Hindi, Nepali.
- Free to read; no sign-in required to read the text.
- Publisher: Gita Daily (${SITE}).

## Read the Bhagavad Gita
- [All chapters index](${SITE}/gita): every chapter, with English names and Sanskrit titles.
${chapterLines}

## About & policies
- [Home](${SITE}/): about Gita Daily and the app.
- [Support & FAQ](${SITE}/support): common questions about the app and reading the Gita.
- [Privacy Policy](${SITE}/privacy)
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
