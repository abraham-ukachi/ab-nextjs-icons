import { describe, it, expect } from 'vitest';
import { hello } from '../src/index';

describe('smoke', () => {
  it('returns readiness string', () => {
    expect(hello()).toBe('ab-nextjs-icons ready');
  });
});
