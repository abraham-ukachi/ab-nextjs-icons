# AbIcons (Material)

Material **snake_case** icon names with **original AbIcons geometry** (not Google Material path data).

| Variant | Count | Path |
|--------|------:|------|
| Outlined | 252 | `svg/outlined/*.svg` / `outlined/*.svg` |
| Filled | 223 | `svg/filled/*.svg` / `filled/*.svg` |
| Weights | 7 (100–700) | `weights/<w>/*.svg` (outlined only) |

## Consume

### 1. Preferred for demos / Next — inline SVG strings

```ts
import { getAbIconSvg, abIconSvg, abIconNames } from "ab-nextjs-icons/ab-icons";

const home = getAbIconSvg("home"); // outlined markup
const homeFilled = getAbIconSvg("home", "filled");
const homeLight = getAbIconSvg("home", "outlined", { weight: 200 });
const homeBold = getAbIconSvg("home", "outlined", { weight: 700 });
```

Inline the string (e.g. `dangerouslySetInnerHTML`) so `currentColor` themes work.

For CSS-driven stroke weight on **inline** SVG:

```css
@import "ab-nextjs-icons/ab-icons/weight.css";
```

```html
<span class="abicon-svg" style="--abicon-weight:1.25; --abicon-size:24px"
  dangerouslySetInnerHTML={{ __html: getAbIconSvg("home") }}></span>
```

### 2. CSS mask utilities (+ weight)

```css
@import "ab-nextjs-icons/ab-icons/index.css";
```

```html
<span class="abicon abicon-home" aria-hidden="true"></span>
<span class="abicon abicon-home abicon-w200" style="--abicon-size:24px"></span>
<span class="abicon abicon-home" style="--abicon-wght:700; --abicon-size:24px"></span>
<span class="abicon abicon-filled abicon-favorite"></span>
```

Mask URLs are absolute (`/ab-icons/outlined/…`, `/ab-icons/weights/<w>/…`).

Weight axis (outlined):

| wght | stroke-width |
|-----:|-------------:|
| 100 | 1.0 |
| 200 | 1.25 |
| 300 | 1.5 |
| 400 | 1.85 (default) |
| 500 | 2.2 |
| 600 | 2.5 |
| 700 | 2.85 |

**Filled icons stay solid.** Weight applies to outlined strokes; filled glyphs ignore weight unless they contain stroke details (rare).

### 3. Public static files

Serve / copy into `public/ab-icons/{outlined,filled,weights}`.

## Naming

Class suffixes and map keys use Material snake_case: `home`, `arrow_back`, `more_vert`.

See `names.json` for the full list, filled coverage, and `weights: [100,…,700]`.
