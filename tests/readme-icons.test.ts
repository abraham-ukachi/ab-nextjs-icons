/* 
* @license MIT
* ~~~~~~~~~~~~
* ab-nextjs-icons
* ~~~~~~~~~~~~ 
* Copyright (c) 2026 Abraham Ukachi. The abElements Project.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the 'Software'), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions: 
*  
* The above copyright notice and this permission notice shall be included in all 
* copies or substantial portions of the Software. 
*
* THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* @project: ab-nextjs-icons
* @name: README icon gallery - Tests
* @file: tests/readme-icons.test.ts
* @type: Vitest
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

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
    expect(result.stdout).toMatch(/271 outlined/);
    expect(result.stdout).toMatch(/247 filled/);
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

    expect(outlined).toHaveLength(271);
    expect(filled).toHaveLength(247);
    expect(darkOut).toHaveLength(271);
    expect(darkFill).toHaveLength(247);
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
