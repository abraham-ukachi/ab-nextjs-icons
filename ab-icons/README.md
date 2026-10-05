# AbIcons (Material)

Material **snake_case** icon names with **original AbIcons geometry** (not Google Material path data).

| Variant | Count | Path |
|--------|------:|------|
| Outlined | 252 | `outlined/*.svg` |
| Filled | 223 | `filled/*.svg` |

## Consume (John / Julie)

### 1. Preferred for demos / Next — inline SVG strings

```ts
import { getAbIconSvg, abIconSvg, abIconNames } from "ab-nextjs-icons/ab-icons";

const home = getAbIconSvg("home"); // outlined markup
const homeFilled = getAbIconSvg("home", "filled");
// or: abIconSvg.home.outlined / abIconSvg.home.filled
```

Inline the string (e.g. `dangerouslySetInnerHTML`) so `currentColor` themes work.

### 2. CSS mask utilities

```css
@import "ab-nextjs-icons/ab-icons/index.css";
```

```html
<span class="abicon abicon-home" aria-hidden="true"></span>
<span class="abicon abicon-arrow_back" style="--abicon-size: 24px; color: #333"></span>
<span class="abicon abicon-filled abicon-favorite"></span>
```

### 3. Public static files

Serve `node_modules/ab-nextjs-icons/ab-icons/...` **or** copy `ab-icons/svg` into:

- `public/ab-icons/outlined|filled`, or
- `public/ab-nextjs-icons/ab-icons/outlined|filled`

then use `<img>` / `next/image`.

## Naming

Class suffixes and map keys use Material snake_case: `home`, `arrow_back`, `more_vert`.

See `names.json` for the full list and which icons have a filled variant.
