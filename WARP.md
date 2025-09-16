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
- Build: No build script is defined.
- Lint: No lint script or config is defined.
- Tests: No test framework is configured. Running the current test script will exit with an error by design.
  - pnpm test (prints "Error: no test specified" and exits 1)
  - There is no "single test" or watch mode available because no test runner is set up.

High-level architecture and structure
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
    - scripts: only a placeholder test script (no real test runner).
  - Notable placeholders (WIP indicators):
    - main: index.ts and types: types/index.d.ts are referenced but not present in the repo. Treat these as future export/type entrypoints rather than current implementation details.

Implications for contributors and agents
- There is no TypeScript/JS source or build pipeline in the repo today; the package is asset-first (CSS, fonts, SVGs).
- To make icons available in a Next.js app, consumers typically import the CSS entrypoint, which will also pull in material-symbols via npm:
  - import "ab-nextjs-icons/css/material-icons.css" (in application code)
  - Then use classes like material-icons, material-icons-round, or material-symbols-rounded in markup.
- If you add new fonts or move assets:
  - Keep css/material-icons.css and material-icons/ URLs in sync (the @font-face src paths are relative).
  - Ensure any additional CSS @imports resolve to installed dependencies.
- Since there is no build/test/lint config, avoid assuming tooling is present. If adding any, make scripts explicit in package.json and document them here.

Key references from README
- Usage example (consumer-side): import { AbElementsLogo } from "ab-nextjs-icons/logos"
  - Note: This relies on the consumer’s bundler/loader support for importing SVGs directly from node_modules.
- The README lists current and planned icon assets; many items are still pending or in progress.
