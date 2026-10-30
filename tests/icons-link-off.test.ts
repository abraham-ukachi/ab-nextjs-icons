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
* @name: link_off (Jeff's drawing) - Tests (404 gaps)
* @file: tests/icons-link-off.test.ts
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
// 📁 fs + path
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
// 🗺️ the generated map + the per-icon module
import { abIconNames } from '../ab-icons/icon-map'
import linkOff from '../ab-icons/icons/link_off'

const root = join(__dirname, '..', 'ab-icons') // 📁
const read = (p: string) => readFileSync(join(root, p), 'utf8') // 📖

// ✏️ link_off was drawn by Jeff (icon designer) for the 404 page; the files are used as delivered
describe('link_off 🔗🚫 (drawn by Jeff)', () => {
  it('is registered in names.json, the icon map and index.css', () => {
    expect(JSON.parse(read('names.json')).outlined).toContain('link_off') // 📋 outlined list
    expect(abIconNames).toContain('link_off') // 🗺️
    expect(read('index.css')).toContain('.abicon-link_off {') // 🎨 mask class
  })
  it('is outlined only, like `link` (no filled glyph)', () => {
    expect(existsSync(join(root, 'outlined/link_off.svg'))).toBe(true) // ✅
    expect(existsSync(join(root, 'svg/outlined/link_off.svg'))).toBe(true) // ✅
    expect(existsSync(join(root, 'filled/link_off.svg'))).toBe(false) // 🚫 like link
    expect(existsSync(join(root, 'filled/link.svg'))).toBe(false) // 🔗 same as its sibling
    expect(linkOff.outlined).toContain('<svg') // 🧩 module
    expect((linkOff as { filled?: string }).filled).toBeUndefined() // 🚫
  })
  it('ships all 7 weights', () => {
    for (const w of [100, 200, 300, 400, 500, 600, 700]) expect(existsSync(join(root, `weights/${w}/link_off.svg`)), String(w)).toBe(true) // ⚖️
  })
  it('matches the set style: 24 viewBox, currentColor round strokes at 1.25 (default weight), like `link`', () => {
    const svg = read('outlined/link_off.svg') // 📖
    expect(svg).toContain('viewBox="0 0 24 24"') // 📐
    expect(svg).not.toMatch(/fill="(?!none)[^"]*"/) // 🚫 no solid fills
    for (const m of svg.matchAll(/stroke-width="([^"]+)"/g)) expect(m[1]).toBe('1.25') // ✏️
    expect(svg).toContain('stroke-linecap="round"') // ⭕
    expect(read('outlined/link.svg')).toContain('stroke-width="1.25"') // 🔗 sibling uses the same stroke
  })
  it('is NOT Google Material path data (original AbIcons geometry)', () => {
    expect(read('outlined/link_off.svg')).not.toMatch(/M17 7h-4v2h4c1\.65/) // 🚫 Material Symbols link_off
  })
})
