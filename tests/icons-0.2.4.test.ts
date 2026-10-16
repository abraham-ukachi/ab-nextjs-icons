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
* @name: Icons 0.2.4 (docs shell, G49)
* @file: tests/icons-0.2.4.test.ts
* @type: Vitest
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

// 🧪 vitest
import { describe, expect, it } from 'vitest'
// 🗺️ the full map (single source of truth)
import { abIconSvg, abIconNames } from '../ab-icons/icon-map'

// 🆕 G49 (G3 batch 1): the 12 mock icons that were missing + TOC / aside toggles + Joseph's planned names
const NEW = [
  'animation', 'article', 'dashboard_customize', 'deployed_code', 'interests', 'keyboard_double_arrow_left',
  'keyboard_double_arrow_right', 'match_case', 'new_releases', 'package_2', 'school', 'webhook', // 📋 brief §2.2 G3
  'toc', 'left_panel_open', 'left_panel_close', // 🗂️ TOC button + aside toggle
  'text_fields', 'desktop_windows', // 🧩 planned names (James, 0.2.18 review)
] as const
// ⬛ existing icons that gain a filled form (active bottom-bar tab, cards, links)
const NEW_FILLED = ['search', 'arrow_forward', 'chevron_right', 'code', 'download', 'expand_more'] as const

describe('icons 0.2.4 (docs shell, G49) 🧭', () => {
  it.each(NEW)('%s exists outlined + filled', (name) => {
    expect(abIconNames).toContain(name) // 🗂️ listed
    expect(abIconSvg[name].outlined).toContain('viewBox="0 0 24 24"') // 📐 24 grid
    expect(abIconSvg[name].outlined).toContain('stroke-width="1.25"') // ✏️ default weight 200
    expect(abIconSvg[name].filled, `${name} filled`).toBeTruthy() // ⬛ active state
  })
  it.each(NEW_FILLED)('%s gains a filled variant', (name) => {
    expect(abIconSvg[name].filled, name).toBeTruthy() // ⬛
  })
  it('every new SVG paints with currentColor and has no inline comments', () => {
    for (const name of [...NEW, ...NEW_FILLED]) {
      for (const svg of [abIconSvg[name].outlined, abIconSvg[name].filled!]) {
        expect(svg).toContain('currentColor') // 🎨 themeable
        expect(svg).not.toContain('<!--') // 🧹
      }
    }
  })
})
