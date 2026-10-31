import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const dist = resolve(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(resolve(root, 'index.html'), resolve(dist, 'index.html'));
await cp(resolve(root, 'src'), resolve(dist, 'src'), { recursive: true });
await cp(resolve(root, 'public'), resolve(dist, 'public'), { recursive: true });
await writeFile(resolve(dist, '_headers'), `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n\n/public/images/*\n  Cache-Control: public, max-age=31536000, immutable\n`);
const html = await readFile(resolve(dist, 'index.html'), 'utf8');
if (!html.includes('./src/main.js') || !html.includes('./src/styles.css')) {
  throw new Error('A página inicial não referencia os arquivos necessários para a publicação.');
}
console.log('Arquivos prontos para Cloudflare Pages em ./dist');
