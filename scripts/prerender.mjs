import { readFile, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'vite';

const outDir = '.prerender';
try {
  await build({ build: { ssr: 'src/entry-server.tsx', outDir, emptyOutDir: true } });
  const { render } = await import(pathToFileURL(resolve(outDir, 'entry-server.js')).href);
  const file = resolve('dist/index.html');
  const template = await readFile(file, 'utf8');
  const marker = '<div id="root"></div>';
  if (!template.includes(marker)) throw new Error('Missing prerender root');
  await writeFile(file, template.replace(marker, () => '<div id="root">' + render() + '</div>'));
  console.log('Prerendered portfolio content into dist/index.html');
} finally {
  await rm(resolve(outDir), { recursive: true, force: true });
}
