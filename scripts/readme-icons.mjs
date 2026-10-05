#!/usr/bin/env node
/**
 * Generate / check the AbIcons gallery block in README.md.
 *
 * Dark-mode strategy:
 * AbIcons SVGs use `currentColor` (and GitHub <img> resolves that to black),
 * so they vanish on GitHub dark backgrounds. We keep the real package paths for
 * light mode (`#gh-light-mode-only`) and write README-only dark variants under
 * docs/readme-icon-previews/dark/ (outside package.json `files`) with
 * currentColor → #e6edf3 for `#gh-dark-mode-only`. That avoids shipping ~475
 * duplicate SVGs on npm while still rendering correctly in both themes.
 *
 * Usage:
 *   node scripts/readme-icons.mjs           # write README + dark previews
 *   node scripts/readme-icons.mjs --check   # exit 1 if stale
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const readmePath = join(root, "README.md");
const outlinedDir = join(root, "ab-icons", "outlined");
const filledDir = join(root, "ab-icons", "filled");
const darkRoot = join(root, "docs", "readme-icon-previews", "dark");

const START = "<!-- AB_ICONS:START -->";
const END = "<!-- AB_ICONS:END -->";
const DARK_COLOR = "#e6edf3";
const IMG_SIZE = 24;

const checkMode = process.argv.includes("--check");

function listSvgNames(dir) {
  return readdirSync(dir)
    .filter((f) => f.endsWith(".svg"))
    .map((f) => f.replace(/\.svg$/, ""))
    .sort((a, b) => a.localeCompare(b));
}

function toDarkSvg(svg) {
  // Preserve mask channel colors (#fff / #000); only recolor currentColor glyphs.
  return svg.replaceAll("currentColor", DARK_COLOR);
}

function syncDarkPreviews(outlined, filled) {
  const written = [];
  for (const [kind, names] of [
    ["outlined", outlined],
    ["filled", filled],
  ]) {
    const outDir = join(darkRoot, kind);
    mkdirSync(outDir, { recursive: true });
    const wanted = new Set(names.map((n) => `${n}.svg`));
    for (const existing of readdirSync(outDir)) {
      if (!wanted.has(existing)) {
        rmSync(join(outDir, existing));
      }
    }
    for (const name of names) {
      const src = readFileSync(join(root, "ab-icons", kind, `${name}.svg`), "utf8");
      const dark = toDarkSvg(src);
      const dest = join(outDir, `${name}.svg`);
      if (!existsSync(dest) || readFileSync(dest, "utf8") !== dark) {
        writeFileSync(dest, dark);
      }
      written.push(relative(root, dest));
    }
  }
  return written;
}

function themeImgs(lightRel, darkRel) {
  return (
    `<img src="${lightRel}#gh-light-mode-only" width="${IMG_SIZE}" height="${IMG_SIZE}" alt="" />` +
    `<img src="${darkRel}#gh-dark-mode-only" width="${IMG_SIZE}" height="${IMG_SIZE}" alt="" />`
  );
}

function buildGalleryMarkdown(outlined, filledSet) {
  const lines = [];
  lines.push(
    `All **${outlined.length}** outlined AbIcons (alphabetical by name, grouped by first letter). ` +
      `The filled column shows a preview when \`ab-icons/filled/<name>.svg\` exists (**${filledSet.size}** filled); otherwise **—**.`,
  );
  lines.push("");
  lines.push(
    "Previews are theme-aware: light mode uses the real package SVGs " +
      "(`currentColor` → black); dark mode uses README-only copies under " +
      "`docs/readme-icon-previews/dark/` (not published — outside `files`) with " +
      "`currentColor` → `#e6edf3`, via GitHub’s `#gh-light-mode-only` / `#gh-dark-mode-only` URL fragments.",
  );
  lines.push("");
  lines.push(
    "Regenerate with `pnpm readme:icons` (or `node scripts/readme-icons.mjs`). " +
      "CI/local freshness: `pnpm readme:icons:check`.",
  );
  lines.push("");

  /** @type {Map<string, string[]>} */
  const byLetter = new Map();
  for (const name of outlined) {
    const letter = /^[a-z]/i.test(name[0]) ? name[0].toUpperCase() : "#";
    if (!byLetter.has(letter)) byLetter.set(letter, []);
    byLetter.get(letter).push(name);
  }

  for (const letter of [...byLetter.keys()].sort((a, b) =>
    a === "#" ? 1 : b === "#" ? -1 : a.localeCompare(b),
  )) {
    const names = byLetter.get(letter);
    lines.push(`### ${letter}`);
    lines.push("");
    lines.push("| Outlined | Filled | Outlined | Filled |");
    lines.push("|:---------|:------:|:---------|:------:|");

    for (let i = 0; i < names.length; i += 2) {
      const row = [];
      for (const name of [names[i], names[i + 1]]) {
        if (!name) {
          row.push("", "");
          continue;
        }
        const outLight = `ab-icons/outlined/${name}.svg`;
        const outDark = `docs/readme-icon-previews/dark/outlined/${name}.svg`;
        row.push(`${themeImgs(outLight, outDark)} \`${name}\``);
        if (filledSet.has(name)) {
          const fLight = `ab-icons/filled/${name}.svg`;
          const fDark = `docs/readme-icon-previews/dark/filled/${name}.svg`;
          row.push(themeImgs(fLight, fDark));
        } else {
          row.push("—");
        }
      }
      lines.push(`| ${row.join(" | ")} |`);
    }
    lines.push("");
  }

  return lines.join("\n").replace(/\n+$/, "\n");
}

function wrapMarkers(body) {
  return `${START}\n${body}${END}`;
}

function extractBlock(readme) {
  const start = readme.indexOf(START);
  const end = readme.indexOf(END);
  if (start === -1 || end === -1 || end < start) return null;
  return readme.slice(start, end + END.length);
}

function ensureSectionShell(readme) {
  if (readme.includes(START) && readme.includes(END)) return readme;
  const anchor = "## Icons";
  const idx = readme.indexOf(anchor);
  if (idx === -1) {
    throw new Error("README.md is missing an ## Icons section to attach the gallery");
  }
  // Insert gallery after the AbIcons note block (after Icons section tables)
  const insertAfter = readme.indexOf("\n## Logos");
  if (insertAfter === -1) {
    throw new Error("README.md is missing ## Logos (insert point)");
  }
  const galleryHeader =
    "\n\n## AbIcons gallery\n\n" +
    wrapMarkers(
      "_Gallery placeholder — run `pnpm readme:icons`._\n",
    ) +
    "\n";
  return readme.slice(0, insertAfter) + galleryHeader + readme.slice(insertAfter);
}

function darkPreviewsStale(outlined, filled) {
  for (const [kind, names] of [
    ["outlined", outlined],
    ["filled", filled],
  ]) {
    for (const name of names) {
      const src = readFileSync(join(root, "ab-icons", kind, `${name}.svg`), "utf8");
      const expected = toDarkSvg(src);
      const dest = join(darkRoot, kind, `${name}.svg`);
      if (!existsSync(dest) || readFileSync(dest, "utf8") !== expected) {
        return true;
      }
    }
  }
  return false;
}

function main() {
  const outlined = listSvgNames(outlinedDir);
  const filled = listSvgNames(filledDir);
  const filledSet = new Set(filled);
  const body = buildGalleryMarkdown(outlined, filledSet);
  const block = wrapMarkers(body);

  let readme = readFileSync(readmePath, "utf8");
  readme = ensureSectionShell(readme);
  const existing = extractBlock(readme);
  if (!existing) {
    throw new Error("Failed to locate AB_ICONS markers");
  }

  const darkStale = darkPreviewsStale(outlined, filled);
  const readmeStale = existing !== block;

  if (checkMode) {
    if (darkStale || readmeStale) {
      console.error(
        `readme-icons --check failed: ${[
          readmeStale ? "README gallery block stale" : null,
          darkStale ? "dark preview SVGs stale/missing" : null,
        ]
          .filter(Boolean)
          .join("; ")}. Run: pnpm readme:icons`,
      );
      process.exit(1);
    }
    console.log(
      `readme-icons --check ok (${outlined.length} outlined, ${filledSet.size} filled)`,
    );
    return;
  }

  syncDarkPreviews(outlined, filled);
  const next = readme.replace(existing, block);
  writeFileSync(readmePath, next);
  console.log(
    `Updated README AbIcons gallery: ${outlined.length} outlined, ${filledSet.size} filled; dark previews in docs/readme-icon-previews/dark/`,
  );
}

const isMain =
  Boolean(process.argv[1]) &&
  import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) {
  main();
}
