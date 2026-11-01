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
* @name: brightness_auto (Jeff's drawing) - Tests (0.2.23 gaps)
* @file: tests/icons-brightness-auto.test.ts
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
import brightnessAuto from '../ab-icons/icons/brightness_auto'

const root = join(__dirname, '..', 'ab-icons') // 📁 the AbIcons folder
const read = (p: string) => readFileSync(join(root, p), 'utf8') // 📖 read one file

// ✏️ brightness_auto = the "system" theme glyph (AbSettingsDrawer), drawn by Jeff; files used as delivered
describe('brightness_auto 🌗🅰️ (drawn by Jeff)', () => {
  it('is registered in names.json, the icon map and index.css', () => {
    const names = JSON.parse(read('names.json')) // 🗂️ the name lists
    expect(names.outlined).toContain('brightness_auto') // 📋 outlined
    expect(names.filled).toContain('brightness_auto') // 📋 filled
    expect(abIconNames).toContain('brightness_auto') // 🗺️ the map
    expect(read('index.css')).toContain('.abicon-brightness_auto {') // 🎨 mask class
  })
  it('ships outlined + filled (both copies) and all 7 weights', () => {
    for (const p of ['outlined', 'svg/outlined', 'filled', 'svg/filled']) expect(existsSync(join(root, `${p}/brightness_auto.svg`)), p).toBe(true) // ✅
    for (const w of [100, 200, 300, 400, 500, 600, 700]) expect(existsSync(join(root, `weights/${w}/brightness_auto.svg`)), String(w)).toBe(true) // ⚖️
    expect(brightnessAuto.outlined).toContain('<svg') // 🧩 module outlined
    expect(brightnessAuto.filled).toContain('<svg') // 🧩 module filled
  })
  it('matches the set style: 24 viewBox, currentColor round strokes at 1.25 (default weight)', () => {
    const svg = read('outlined/brightness_auto.svg') // 📖
    expect(svg).toContain('viewBox="0 0 24 24"') // 📐
    expect(svg).toContain('currentColor') // 🎨
    for (const m of svg.matchAll(/stroke-width="([^"]+)"/g)) expect(m[1]).toBe('1.25') // ✏️ default weight 200
  })
  it('is NOT Google Material path data (original AbIcons geometry)', () => {
    for (const p of ['outlined', 'filled']) expect(read(`${p}/brightness_auto.svg`)).not.toMatch(/M10\.85 12\.65h2\.3L12 9l-1\.15 3\.65|l-2\.25 6\.4/) // 🚫 stock brightness_auto
  })
})
