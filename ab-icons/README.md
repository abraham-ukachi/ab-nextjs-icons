# AbIcons (Material)

Material **snake_case** icon names with **original AbIcons geometry** (not Google Material path data).

| Variant | Count | Path |
|--------|------:|------|
| Outlined | 252 | `svg/outlined/*.svg` / `outlined/*.svg` (default weight **200**, stroke 1.25) |
| Filled | 223 | `svg/filled/*.svg` / `filled/*.svg` |
| Weights | 7 (100–700) | `weights/<w>/*.svg` (outlined only) |

## Default weight: 200

Outlined art ships at weight **200** (stroke **1.25**). That matches `weights/200/`. Use 300–400 at ≤16px if thin strokes feel faint.

### Change weight

```css
/* Global (inline SVG helper) */
:root { --abicon-weight: 400; }

/* Per icon (inline) */
.abicon-svg { --abicon-weight: 700; }

/* CSS mask API */
.abicon.abicon-home.abicon-w400 { }
span.abicon.abicon-home { --abicon-wght: 400; }
```

```ts
getAbIconSvg("home");                          // weight 200
getAbIconSvg("home", "outlined", { weight: 400 }); // stroke 1.85
getAbIconSvg("home", "outlined", { weight: 700 }); // stroke 2.85
```

## Consume

### 1. Inline SVG strings

```ts
import { getAbIconSvg, abIconSvg, abIconNames, abIconDefaultWeight } from "ab-nextjs-icons/ab-icons";

const home = getAbIconSvg("home"); // outlined @ default 200
const homeFilled = getAbIconSvg("home", "filled");
const homeBold = getAbIconSvg("home", "outlined", { weight: 400 });
```

```css
@import "ab-nextjs-icons/ab-icons/weight.css";
```

### 2. CSS mask utilities (+ weight)

```css
@import "ab-nextjs-icons/ab-icons/index.css";
```

```html
<span class="abicon abicon-home" aria-hidden="true"></span>
<span class="abicon abicon-home abicon-w400" style="--abicon-size:24px"></span>
<span class="abicon abicon-filled abicon-favorite"></span>
```

Mask URLs are absolute (`/ab-icons/outlined/…`, `/ab-icons/weights/<w>/…`).

| wght | stroke-width |
|-----:|-------------:|
| 100 | 1.0 |
| 200 | 1.25 (**default**) |
| 300 | 1.5 |
| 400 | 1.85 |
| 500 | 2.2 |
| 600 | 2.5 |
| 700 | 2.85 |

**Filled icons stay solid.** Weight applies to outlined strokes.

### 3. Public static files

Serve / copy into `public/ab-icons/{outlined,filled,weights}`.

## Naming

See `names.json` for the full list, `defaultWeight`, filled coverage, and `weights: [100,…,700]`.
