import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(__dirname, '..');

describe('finished icon asset sets', () => {
  it('ships ant-design-icons stylesheet + sample svgs', () => {
    const css = join(root, 'ant-design-icons/index.css');
    expect(existsSync(css)).toBe(true);
    expect(readFileSync(css, 'utf8')).toContain('.anticon-home');
    expect(existsSync(join(root, 'ant-design-icons/svg/home.svg'))).toBe(true);
  });

  it('ships MePic and MePicNobg', () => {
    expect(existsSync(join(root, 'pics/me.svg'))).toBe(true);
    expect(existsSync(join(root, 'pics/me-nobg.svg'))).toBe(true);
  });

  it('ships AbContainedLauncher', () => {
    expect(existsSync(join(root, 'launchers/ab-contained-launcher.svg'))).toBe(true);
  });

  it('maps material outlined class to Outlined font family', () => {
    const css = readFileSync(join(root, 'material-icons/index.css'), 'utf8');
    expect(css).toContain(".material-icons-outlined { font-family: 'Material Icons Outlined'; }");
  });
});
