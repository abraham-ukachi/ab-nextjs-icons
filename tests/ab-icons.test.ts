import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = join(__dirname, '..');

describe('AbIcons set (abicons/)', () => {
  it('ships stylesheet and names manifest', () => {
    expect(existsSync(join(root, 'abicons/index.css'))).toBe(true);
    const names = JSON.parse(readFileSync(join(root, 'abicons/names.json'), 'utf8'));
    expect(names.filled.length).toBeGreaterThan(20);
    expect(names.outlined.length).toBeGreaterThan(20);
    expect(names.naming).toBe('material_snake_case');
  });

  it('documents AbIcons as Done in README under abicons/', () => {
    const readme = readFileSync(join(root, 'README.md'), 'utf8');
    expect(readme).toContain('AbIcons');
    expect(readme).toContain('abicons/index.css');
  });
});

describe('Ant Design filled+outlined', () => {
  it('exposes filled and outlined mask classes', () => {
    const css = readFileSync(join(root, 'ant-design-icons/index.css'), 'utf8');
    expect(css).toContain('.anticon-filled-home');
    expect(css).toContain('.anticon-outlined-home');
  });
});
