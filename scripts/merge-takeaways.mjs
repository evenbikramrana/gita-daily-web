// Merge the one-line verse takeaways (en/hi/ne) into src/data/gita.json.
//   node scripts/merge-takeaways.mjs [path/to/verse-takeaways.json]
// The file is the app's generated seed ({ id: { ch, v, en, hi, ne } }). Defaults
// to the sibling gita-app checkout. Safe to re-run; fetch-gita.mjs also carries
// takeaways through once the live API serves them.
import { readFile, writeFile } from 'node:fs/promises';

const src = process.argv[2] ?? '../gita-app/backend/prisma/seeds/verse-takeaways.json';
const raw = JSON.parse(await readFile(src, 'utf8'));
// The seed is keyed by verse id; accept a plain list too.
const takeaways = Array.isArray(raw) ? raw : Object.values(raw);
const byRef = new Map(takeaways.map((t) => [`${t.ch}.${t.v}`, t]));

const dataUrl = new URL('../src/data/gita.json', import.meta.url);
const gita = JSON.parse(await readFile(dataUrl, 'utf8'));

let merged = 0;
for (const ch of gita.chapters) {
  for (const v of ch.verses) {
    const t = byRef.get(`${ch.number}.${v.number}`);
    if (!t) continue;
    v.takeawayEn = t.en ?? null;
    v.takeawayHi = t.hi ?? null;
    v.takeawayNe = t.ne ?? null;
    merged++;
  }
}

await writeFile(dataUrl, JSON.stringify(gita, null, 0));
console.log(`Merged takeaways into ${merged} verses.`);
