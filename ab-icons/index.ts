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
* @name: AbIcons re-exports
* @file: ab-icons/index.ts
* @type: TypeScript (barrel)
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


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
 * 4) Weight (outlined, Material Symbols-style 100-700, 200 = default 1.25 stroke):
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
  abIconDefaultWeight,
  abIconWeightStroke,
  getAbIconSvg,
} from "./icon-map";

// 🆔 0.2.4: per-instance mask ids (Joseph: two filled Homes on one page)
export { scopeAbIconSvgIds } from "./scope-ids";
