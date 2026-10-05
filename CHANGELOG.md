# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.0](https://github.com/abraham-ukachi/ab-nextjs-icons/compare/v0.1.5...v0.2.0) (2026-10-06)

* **AbIcons core-gap:** 168 new concepts (336 new SVGs: outlined + filled). Package totals: **252** outlined, **223** filled (29 outlined-only UI strokes such as `add` / `close` / `search` have no filled pair).
* **Weights 100–700** (Material Symbols–style) for outlined icons, with pre-rendered `ab-icons/weights/<w>/` and `weight.css` / `.abicon-w*`.
* **Default weight is now 200** (stroke **1.25**), down from the previous implicit 400 / 1.85 look on older outlined art — existing apps that relied on the thicker default will look thinner until they set `--abicon-weight: 400` or `getAbIconSvg(..., { weight: 400 })`.
* Polish: `settings` (simple gear), `qr_code`, `scooter`, `umbrella`, `shopping_bag`, `usb`, redrawn `handshake`; filled glyphs grown to outlined outer bounds where they were undersized.

### [0.1.5](https://github.com/abraham-ukachi/ab-nextjs-icons/compare/v0.1.4...v0.1.5) (2026-10-03)

* Publish to npm automatically from GitHub Actions with Trusted Publishing (OIDC + provenance, no NPM_TOKEN)
* Ship only package files via `files`; `next` peer is now `^16.3.4`

### [0.1.3](https://github.com/abraham-ukachi/ab-nextjs-icons/compare/v0.1.2...v0.1.3) (2026-09-17)

### [0.1.2](https://github.com/abraham-ukachi/ab-nextjs-icons/compare/v0.1.1...v0.1.2) (2025-09-17)

### 0.1.1 (2025-03-09)
