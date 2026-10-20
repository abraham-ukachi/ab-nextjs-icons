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
* @name: scopeAbIconSvgIds
* @file: ab-icons/scope-ids.ts
* @type: Helper (no React, server + client safe)
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

// 🆔 WHY: `<name>FilledMask` is unique per icon, but two filled Homes on one page (bottom bar + sidebar)
//    still share the id, and the browser resolves `mask="url(#homeFilledMask)"` to whichever comes
//    first. If that one is hidden (display:none), the mask breaks and the icon paints as a solid square.
//    So every rendered instance gets its own suffix (e.g. React `useId()`).

/** 🧼 make a scope safe for an XML id (React `useId()` returns `:r1:` / `«r1»`) */
const toIdSafe = (scope: string): string => scope.replace(/[^A-Za-z0-9_-]/g, "") || "x";

/**
 * 🆔 scopeAbIconSvgIds — suffix every `id` in an SVG string, and every `url(#id)` / `href="#id"` that
 * points at it, so one icon can render many times on a page without id clashes.
 *
 * @example
 *   const id = useId()
 *   const svg = scopeAbIconSvgIds(getAbIconSvg('home', 'filled')!, id) // 🔒 homeFilledMask-r1
 */
export function scopeAbIconSvgIds(svg: string, scope: string): string {
  const ids = Array.from(svg.matchAll(/\sid="([^"]+)"/g), (m) => m[1]); // 🔎 every declared id
  if (ids.length === 0) return svg; // 🙅 nothing to scope (most outlined icons)
  const suffix = `-${toIdSafe(scope)}`; // 🏷️
  let out = svg;
  for (const id of new Set(ids)) {
    const esc = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // 🛡️ regex-escape
    out = out
      .replace(new RegExp(`(\\sid=")${esc}(")`, "g"), `$1${id}${suffix}$2`) // 🆔 the declaration
      .replace(new RegExp(`url\\(#${esc}\\)`, "g"), `url(#${id}${suffix})`) // 🎭 mask / clip / fill refs
      .replace(new RegExp(`(href=")#${esc}(")`, "g"), `$1#${id}${suffix}$2`); // 🔗 <use href>
  }
  return out; // ✅
}
