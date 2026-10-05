/**
 * AbIcons (Material snake_case) — re-exports for ab-nextjs-icons.
 *
 * Consume patterns (John / Julie):
 *
 * 1) Preferred for demos / Next.js — inline SVG strings (currentColor themes):
 *    import { getAbIconSvg, abIconSvg } from "ab-nextjs-icons/ab-icons";
 *    const svg = getAbIconSvg("home"); // or abIconSvg.home.outlined
 *    // then dangerouslySetInnerHTML / parse into React, or pass to <img src={dataUrl}>
 *
 * 2) CSS mask utilities:
 *    @import "ab-nextjs-icons/ab-icons/index.css";
 *    <span class="abicon abicon-home" aria-hidden="true"></span>
 *    <span class="abicon abicon-filled abicon-favorite"></span>
 *
 * 3) Public static files:
 *    Serve node_modules/ab-nextjs-icons/ab-icons/... OR copy abicons
 *    into public/ab-icons (or public/ab-nextjs-icons/ab-icons) for <img> / next/image.
 *
 * 4) Weight (outlined, Material Symbols-style 100-700, 400 = default 1.85 stroke):
 *    getAbIconSvg("home", "outlined", { weight: 300 });
 *    @import "ab-nextjs-icons/ab-icons/weight.css"; then <span class="abicon-svg" style="--abicon-weight:1.25">
 *    <span class="abicon abicon-w300 abicon-home"></span> (mask API, pre-rendered weights)
 *
 * Names match Material Icons/Symbols snake_case for drop-in rename from Google Material.
 * Path geometry is original AbIcons — not Google Material path data.
 */

export {
  type AbIconName,
  type AbIconSvgEntry,
  type AbIconSvgOptions,
  type AbIconWeight,
  abIconNames,
  abIconSvg,
  abIconWeights,
  abIconWeightStroke,
  getAbIconSvg,
} from "./icon-map";
