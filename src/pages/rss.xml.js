import { getCollection } from 'astro:content';

const escapeXml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export async function GET({ site }) {
  const base = site ?? new URL('https://niroj-pyakurel.github.io');
  const notes = (await getCollection('blog')).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  const items = notes
    .map((note) => {
      const link = new URL(`blog/${note.id}/`, base).href;
      const categories = note.data.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('');
      return `
    <item>
      <title>${escapeXml(note.data.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(note.data.description)}</description>
      <pubDate>${new Date(note.data.date).toUTCString()}</pubDate>
      ${categories}
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Niroj Pyakurel — Blog</title>
    <link>${escapeXml(new URL('/', base).href)}</link>
    <description>Articles, technical write-ups, and practical notes on design, web development, and security.</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
