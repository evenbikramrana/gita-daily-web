// One-time (re-runnable) snapshot of the Gita text into src/data/gita.json, so
// the site builds fully static with no runtime backend dependency. Re-run when
// the verse data changes:  node scripts/fetch-gita.mjs
import { writeFile, mkdir } from 'node:fs/promises';

const API = process.env.GITA_API || 'https://backend-production-a8e8.up.railway.app';

// English names + one-line themes for the 18 chapters (mirrors the app's
// chapterMeta so the web and app read the same).
const META = {
  1: ["Arjuna's Despair", 'Sorrow on the battlefield'],
  2: ['The Yoga of Knowledge', 'The eternal, deathless self'],
  3: ['The Yoga of Action', 'Act without attachment'],
  4: ['Knowledge & Renunciation', 'Wisdom within every action'],
  5: ['The Yoga of Renunciation', 'Freedom through letting go'],
  6: ['The Yoga of Meditation', 'Stilling the restless mind'],
  7: ['Knowledge & Realization', 'Knowing the divine'],
  8: ['The Imperishable Absolute', 'The path beyond death'],
  9: ['The Royal Knowledge', 'The sovereign secret'],
  10: ['Divine Glories', 'The one in all things'],
  11: ['The Cosmic Vision', 'The universal form revealed'],
  12: ['The Yoga of Devotion', 'The path of love'],
  13: ['The Field & Its Knower', 'Matter and the self'],
  14: ['The Three Gunas', 'The qualities of nature'],
  15: ['The Supreme Self', 'The eternal person'],
  16: ['Divine & Demonic Natures', 'Two ways of living'],
  17: ['The Threefold Faith', 'Faith, food, and sacrifice'],
  18: ['Liberation & Renunciation', 'Freedom and surrender'],
};

// Strip chapter/verse-number markers the source text carries (e.g. "1.1 ",
// "।।1.1।।", trailing "||१-१||") — same idea as the app's cleanShlokaText.
function clean(text) {
  if (!text) return '';
  return String(text)
    .replace(/\s*[|॥।]+[\d०-९.\-]+[|॥।]+\s*$/g, '')
    .replace(/^[|॥।]+[\d०-९.\-]+[|॥।]+\s*/g, '')
    .replace(/^[\d]+\.[\d]+\s+/g, '')
    .replace(/\s*[।॥]+[\d०-९.\-]*[।॥]*\s*$/g, '')
    .trim();
}

async function getJSON(path) {
  const res = await fetch(API + path);
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

const chapters = (await getJSON('/chapters')).sort((a, b) => a.number - b.number);
const out = [];

for (const ch of chapters) {
  const raw = await getJSON(`/shlokas/chapter/${ch.id}`);
  const verses = raw
    .sort((a, b) => a.number - b.number)
    .map((v) => ({
      number: v.number,
      sanskrit: clean(v.sanskrit),
      en: clean(v.meaningEn),
      hi: clean(v.meaningHi),
      ne: clean(v.meaningNe),
      enBy: v.meaningEnBy ?? null,
      hiBy: v.meaningHiBy ?? null,
      neBy: v.meaningNeBy ?? null,
      contextEn: clean(v.context?.contextEn),
      contextHi: clean(v.context?.contextHi),
      contextNe: clean(v.context?.contextNe),
    }));
  const [en, theme] = META[ch.number] || [ch.title, ''];
  out.push({ number: ch.number, title: ch.title, en, theme, verseCount: verses.length, verses });
  console.log(`ch ${ch.number} "${en}" — ${verses.length} verses`);
}

await mkdir(new URL('../src/data/', import.meta.url), { recursive: true });
await writeFile(
  new URL('../src/data/gita.json', import.meta.url),
  JSON.stringify({ chapters: out }, null, 0),
);
const total = out.reduce((n, c) => n + c.verses.length, 0);
console.log(`\nWrote src/data/gita.json — ${out.length} chapters, ${total} verses.`);
