import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(__dirname, '..');

describe('shipped icon assets', () => {
  it('includes material-icons stylesheet', () => {
    const cssPath = join(root, 'material-icons/index.css');
    expect(existsSync(cssPath)).toBe(true);
    expect(readFileSync(cssPath, 'utf8').length).toBeGreaterThan(0);
  });

  it('includes logo SVG files', () => {
    const files = [
      'logos/ab-elements-logo.svg',
      'logos/ab-logo.svg',
      'logos/ab-logo-dark.svg',
      'logos/ab-logo-light.svg',
      'logos/abraham-ukachi-logo.svg',
      'logos/github-logo.svg',
      'logos/next-logo.svg',
      'logos/vercel-logo.svg',
    ];
    for (const rel of files) {
      expect(existsSync(join(root, rel))).toBe(true);
    }
  });
});
