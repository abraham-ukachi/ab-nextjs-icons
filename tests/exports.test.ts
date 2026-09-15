import { describe, expect, it } from 'vitest';
import { hello, version } from '../src/index';
import * as logos from '../logos/index';

describe('package exports', () => {
  it('exposes hello + version from src', () => {
    expect(hello()).toBe('ab-nextjs-icons ready');
    expect(typeof version).toBe('string');
  });

  it('exports logo modules from logos/', () => {
    expect(logos.AbElementsLogo).toBeTruthy();
    expect(logos.AbLogo).toBeTruthy();
    expect(logos.AbLogoDark).toBeTruthy();
    expect(logos.AbLogoLight).toBeTruthy();
    expect(logos.AbrahamUkachiLogo).toBeTruthy();
    expect(logos.GithubLogo).toBeTruthy();
    expect(logos.NextLogo).toBeTruthy();
    expect(logos.VercelLogo).toBeTruthy();
  });
});
