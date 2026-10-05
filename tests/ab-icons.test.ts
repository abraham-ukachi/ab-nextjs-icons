import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(__dirname, "..");
const ab = join(root, "ab-icons");

describe("AbIcons set (ab-icons/)", () => {
  it("ships stylesheet, weight.css, and names manifest", () => {
    expect(existsSync(join(ab, "index.css"))).toBe(true);
    expect(existsSync(join(ab, "weight.css"))).toBe(true);
    const names = JSON.parse(readFileSync(join(ab, "names.json"), "utf8"));
    expect(names.id).toBe("abicons");
    expect(names.naming).toBe("material_snake_case");
    expect(names.outlined.length).toBeGreaterThan(20);
    expect(names.filled.length).toBeGreaterThan(20);
    expect(names.weights).toEqual([100, 200, 300, 400, 500, 600, 700]);
    expect(names.defaultWeight).toBe(200);
    expect(names.defaultStroke).toBe(1.25);
    expect(names.weightStroke["200"]).toBe(1.25);
    expect(names.weightStroke["400"]).toBe(1.85);
  });

  it("default outlined SVGs use stroke 1.25 (weight 200)", () => {
    const home = readFileSync(join(ab, "outlined", "home.svg"), "utf8");
    expect(home).toContain('stroke-width="1.25"');
    expect(home).not.toContain('stroke-width="1.85"');
    const w200 = readFileSync(join(ab, "weights", "200", "home.svg"), "utf8");
    // base outlined equals weights/200
    expect(home.replace(/\s+/g, " ")).toBe(w200.replace(/\s+/g, " "));
  });

  it("mask CSS defaults to outlined/ and exposes w400/w700 absolute URLs", () => {
    const css = readFileSync(join(ab, "index.css"), "utf8");
    expect(css).toContain('--abicon-wght: 200');
    expect(css).toContain('url("/ab-icons/outlined/home.svg")');
    expect(css).toContain('url("/ab-icons/weights/400/home.svg")');
    expect(css).toContain('url("/ab-icons/weights/700/home.svg")');
    // default art is 200 — no weights/200 override needed for .abicon-home alone
    expect(css).not.toMatch(/\.abicon-w200\.abicon-home/);
  });

  it("weight.css defaults --abicon-weight to 200 / stroke 1.25", () => {
    const css = readFileSync(join(ab, "weight.css"), "utf8");
    expect(css).toContain("--abicon-weight: 200");
    expect(css).toContain("--abicon-stroke: 1.25");
    expect(css).toContain("var(--abicon-stroke, 1.25)");
  });
});

describe("getAbIconSvg weight defaults", () => {
  it("icon-map documents default 200 and stroke map", () => {
    const src = readFileSync(join(ab, "icon-map.ts"), "utf8");
    expect(src).toContain("abIconDefaultWeight");
    expect(src).toContain("export const abIconDefaultWeight: AbIconWeight = 200");
    expect(src).toContain("100: 1");
    expect(src).toMatch(/200:\s*1\.25/);
    expect(src).toMatch(/400:\s*1\.85/);
    expect(src).toMatch(/700:\s*2\.85/);
    expect(src).toContain("options?.weight ?? abIconDefaultWeight");
  });

  it("weight 400 → stroke 1.85 and 700 → 2.85 via applyWeight pattern", () => {
    // Simulate applyWeight from icon-map (same regex)
    const sample = '<path stroke-width="1.25" d="M0 0"/>';
    const apply = (svg: string, sw: number) =>
      svg.replace(/stroke-width="[^"]*"/g, `stroke-width="${sw}"`);
    expect(apply(sample, 1.85)).toContain('stroke-width="1.85"');
    expect(apply(sample, 2.85)).toContain('stroke-width="2.85"');
    const w400 = readFileSync(join(ab, "weights", "400", "home.svg"), "utf8");
    const w700 = readFileSync(join(ab, "weights", "700", "home.svg"), "utf8");
    expect(w400).toContain('stroke-width="1.85"');
    expect(w700).toContain('stroke-width="2.85"');
  });
});
