import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(__dirname, "..");

describe("abicons assets", () => {
  it("ships ab-icons/index.css with Material snake_case classes", () => {
    const cssPath = join(root, "ab-icons", "index.css");
    expect(existsSync(cssPath)).toBe(true);
    const css = readFileSync(cssPath, "utf8");
    expect(css).toContain(".abicon-home");
    expect(css).toContain(".abicon-arrow_back");
  });

  it("ships outlined home.svg", () => {
    expect(existsSync(join(root, "ab-icons", "outlined", "home.svg"))).toBe(
      true,
    );
  });

  it("ships icon-map with getAbIconSvg", () => {
    const mapPath = join(root, "ab-icons", "icon-map.ts");
    expect(existsSync(mapPath)).toBe(true);
    const src = readFileSync(mapPath, "utf8");
    expect(src).toContain("getAbIconSvg");
    expect(src).toContain("abIconSvg");
    expect(src).toContain("abIconNames");
  });
});
