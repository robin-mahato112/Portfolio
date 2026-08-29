import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';
import { projects } from '../src/data/projects.js';
import { education, experience } from '../src/data/resumeData.js';
import { links } from '../src/data/links.js';
import { siteDescription, siteTitle, siteUrl } from '../src/lib/seo.js';

const unfinishedTerms = [
  ['to', 'do'],
  ['place', 'holder'],
  ['add ', 'exact'],
  ['edit from ', 'resume'],
  ['coming ', 'soon'],
].map((parts) => parts.join(''));
const unfinishedPattern = new RegExp(unfinishedTerms.join('|'), 'i');

test('public portfolio data contains no unfinished language', () => {
  const publicData = JSON.stringify({ projects, education, experience, siteDescription, siteTitle });
  assert.equal(unfinishedPattern.test(publicData), false);
});

test('primary portfolio links and canonical URL are valid', () => {
  assert.equal(siteUrl, 'https://robinm.online');
  assert.match(links.github, /^https:\/\/github\.com\//);
  assert.match(links.linkedin, /^https:\/\/www\.linkedin\.com\//);
  assert.match(links.resume, /^\/[a-zA-Z0-9/_-]+\.pdf$/i);
  assert.ok(projects.every((project) => project.links.every((link) => /^https:\/\//.test(link.href))));
});

test('resume remains part of the static public assets', async () => {
  const resumeAsset = links.resume.replace(/^\/+/, '');
  await access(new URL(`../public/${resumeAsset}`, import.meta.url));
});

test('rendered page source has stable section targets', async () => {
  const source = await readFile(new URL('../src/app/page.jsx', import.meta.url), 'utf8');
  for (const section of ['Hero', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']) {
    assert.match(source, new RegExp(`<${section} \/>|<${section}\/>`));
  }
});
