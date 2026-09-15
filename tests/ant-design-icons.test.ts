import { describe, expect, it } from 'vitest';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = join(__dirname, '..');

describe('Ant Design full catalog', () => {
  it('ships hundreds of outlined and filled SVGs', () => {
    const outlined = readdirSync(join(root, 'ant-design-icons/svg/outlined')).filter((f) =>
      f.endsWith('.svg'),
    );
    const filled = readdirSync(join(root, 'ant-design-icons/svg/filled')).filter((f) =>
      f.endsWith('.svg'),
    );
    expect(outlined.length).toBeGreaterThan(400);
    expect(filled.length).toBeGreaterThan(200);
  });

  it('names.json matches the full lists', () => {
    const names = JSON.parse(readFileSync(join(root, 'ant-design-icons/names.json'), 'utf8'));
    expect(names.outlined.length).toBeGreaterThan(400);
    expect(names.filled.length).toBeGreaterThan(200);
  });

  it('demo-data ANT_ICON_NAMES is the full set', () => {
    const ts = readFileSync(join(root, 'demo-data/icon-names.ts'), 'utf8');
    expect(ts).toContain('account-book');
    expect(ts).toContain('ANT_ICON_NAMES');
    const json = JSON.parse(readFileSync(join(root, 'demo-data/icon-names.json'), 'utf8'));
    expect(json.antDesignIcons.outlined.length).toBeGreaterThan(400);
    expect(json.antDesignIcons.filled.length).toBeGreaterThan(200);
  });

  it('stylesheet exists', () => {
    expect(existsSync(join(root, 'ant-design-icons/index.css'))).toBe(true);
  });
});
