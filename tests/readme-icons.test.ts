import { describe, expect, it } from "vitest";
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(__dirname, "..");
const script = join(root, "scripts", "readme-icons.mjs");

describe("readme-icons gallery", () => {
  it("keeps README markers and dark previews in sync (--check)", () => {
    const result = spawnSync(process.execPath, [script, "--check"], {
      cwd: root,
      encoding: "utf8",
    });
    expect(result.status, result.stderr || result.stdout).toBe(0);
    expect(result.stdout).toMatch(/252 outlined/);
    expect(result.stdout).toMatch(/223 filled/);
  });

  it("ships dark previews outside package files and matching counts", () => {
    const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
    expect(pkg.files ?? []).not.toContain("docs");
    expect(pkg.files ?? []).not.toContain("docs/readme-icon-previews");

    const outlined = readdirSync(join(root, "ab-icons", "outlined")).filter((f) =>
      f.endsWith(".svg"),
    );
    const filled = readdirSync(join(root, "ab-icons", "filled")).filter((f) =>
      f.endsWith(".svg"),
    );
    const darkOut = readdirSync(
      join(root, "docs", "readme-icon-previews", "dark", "outlined"),
    ).filter((f) => f.endsWith(".svg"));
    const darkFill = readdirSync(
      join(root, "docs", "readme-icon-previews", "dark", "filled"),
    ).filter((f) => f.endsWith(".svg"));

    expect(outlined).toHaveLength(252);
    expect(filled).toHaveLength(223);
    expect(darkOut).toHaveLength(252);
    expect(darkFill).toHaveLength(223);
    expect(existsSync(join(root, "README.md"))).toBe(true);
    const readme = readFileSync(join(root, "README.md"), "utf8");
    expect(readme).toContain("<!-- AB_ICONS:START -->");
    expect(readme).toContain("<!-- AB_ICONS:END -->");
    expect(readme).toContain("ab-icons/outlined/home.svg#gh-light-mode-only");
    expect(readme).toContain(
      "docs/readme-icon-previews/dark/outlined/home.svg#gh-dark-mode-only",
    );
  });
});
