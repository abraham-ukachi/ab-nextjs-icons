# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository overview
- Purpose: A lightweight collection of icons for abElements, optimized for Next.js consumption. Assets are primarily CSS, webfonts, and SVGs.
- Status: Work in progress (per README) — expect breaking changes until v1.0.

Commands and development workflow
- Package manager: pnpm is preferred (pnpm-lock.yaml present). npm also works.
- Install dependencies:
  - pnpm: pnpm install
  - npm: npm install
- Build:
  - pnpm build (compiles src to dist via tsup and cleans dist)
  - pnpm dev (watch mode)
- Lint & format:
  - pnpm lint
  - pnpm lint:fix
  - pnpm format
- Tests (Vitest):
  - pnpm test (run once)
  - pnpm test:watch (watch mode)
  - Run a single test:
    - By file: pnpm run test:file tests/smoke.test.ts
    - By name: pnpm run test:name "smoke"  (PowerShell requires double quotes)
    - Alternatively: pnpm exec vitest run tests/some.test.ts

High-level architecture and structure
- Build pipeline
  - tsup compiles TypeScript from src/index.ts to dist/ in both ESM and CJS formats and emits type declarations (d.ts).
  - TypeScript config in tsconfig.json; build outputs are not committed but are included in npm publishes via package.json files field.
  - Minimal entrypoint at src/index.ts exists for build/test scaffolding; it does not affect CSS/icon behavior.
- CSS entrypoint for icons
  - css/material-icons.css
    - Imports material-symbols via @import 'material-symbols' (resolved from the npm dependency listed in package.json).
    - Declares @font-face rules for classic Material Icons families, pointing at local font files in material-icons/.
    - Provides utility classes:
      - .material-symbols-rounded — configures variable font axes (FILL, wght, GRAD, opsz) for Material Symbols.
      - .material-icons, .material-icons-outlined, .material-icons-round — sets font-family, smoothing, and sizing helpers for classic Material Icons.
- Bundled classic Material Icons fonts
  - material-icons/ (TTF/OTF files)
    - Local copies of classic Material Icons (Outlined, Round, etc.) that the CSS references via relative URLs.
    - This avoids relying on Google Fonts at runtime and enables bundling within consuming apps (e.g., Next.js).
- Logos and assets
  - logos/ (eg. ab-elements-logo.svg) — SVG assets intended to be consumed directly by apps/build tooling.
- Package metadata and external dependency
  - package.json
    - name: ab-nextjs-icons
    - dependency: material-symbols — supplies Material Symbols variable fonts and styles, which are pulled in by the CSS @import.
    - scripts: build/lint/test now defined (see above).
  - Notable placeholders (WIP indicators):
    - README shows an import style for logos; actual JS/TS exports are minimal; consumers can import CSS and asset paths directly.

Implications for contributors and agents
- The package remains asset-first (CSS, fonts, SVGs); a minimal TypeScript entrypoint exists to support publishing and future expansion.
- To make icons available in a Next.js app, consumers typically import the CSS entrypoint, which will also pull in material-symbols via npm:
  - import "ab-nextjs-icons/css/material-icons.css" (in application code)
  - Then use classes like material-icons, material-icons-round, or material-symbols-rounded in markup.
- If you add new fonts or move assets:
  - Keep css/material-icons.css and material-icons/ URLs in sync (the @font-face src paths are relative).
  - Ensure any additional CSS @imports resolve to installed dependencies.
- If you add new TypeScript modules under src/, update exports as needed and verify build output under dist/.

Key references from README
- Usage example (consumer-side): import { AbElementsLogo } from "ab-nextjs-icons/logos"
  - Note: This relies on the consumer’s bundler/loader support for importing SVGs directly from node_modules.
- The README lists current and planned icon assets; many items are still pending or in progress.
