import { spawnSync } from 'node:child_process';

const hasTinaCloud = Boolean(process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN);
const npmCli = process.env.npm_execpath;

function run(args) {
  if (!npmCli) {
    console.error('This build script must be run through npm.');
    process.exit(1);
  }

  const result = spawnSync(process.execPath, [npmCli, ...args], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

if (hasTinaCloud) {
  run(['exec', '--', 'tinacms', 'build']);
} else {
  console.warn('TinaCloud credentials are not configured; building the public site without the production admin.');
}

run(['run', 'build:site']);
