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
* @name: Icons 0.2.5 (publish trim + README version)
* @file: tests/icons-0.2.5.test.ts
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
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = join(__dirname, '..') // 📁
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) // 📦

// ✂️ 0.2.5: the tarball ships the public API only (0.2.4 was 5039 files / 8.2 MB unpacked)
describe('package files ✂️', () => {
  it('keeps every public entry (dist, css, material-icons, ab-icons, logos, pics, launchers, ant-design-icons)', () => {
    for (const f of ['dist', 'css', 'material-icons', 'ab-icons', 'logos', 'pics', 'launchers', 'ant-design-icons']) expect(pkg.files, f).toContain(f) // ✅
  })
  it('drops internal-only trees and the unreferenced PNG', () => {
    expect(pkg.files).not.toContain('demo-data') // 🧪 test fixtures for the demo app
    expect(pkg.files).not.toContain('ab-icons-legacy') // 🕰️ pre-0.2 assets, nothing imports them
    expect(pkg.files).toContain('!pics/me-nobg.png') // 🖼️ pics/index.ts points at the .jpg
  })
})

// 🏷️ the README can't go stale: the version is an npm badge, the totals are checked against the map
import { abIconSvg, abIconNames } from '../ab-icons/icon-map'
describe('README release line 🏷️', () => {
  const readme = readFileSync(join(root, 'README.md'), 'utf8')
  it('uses the shields.io npm badge, no hard-coded version', () => {
    expect(readme).toContain('https://img.shields.io/npm/v/ab-nextjs-icons') // 🛡️ badge
    expect(readme).not.toMatch(/Current release: \*\*\d+\.\d+\.\d+\*\*/) // 🚫 stale number
  })
  it('the AbIcons totals match the icon map', () => {
    const filled = abIconNames.filter((n) => (abIconSvg as Record<string, { filled?: string }>)[n].filled).length
    expect(readme).toContain(`AbIcons totals **${abIconNames.length}** outlined / **${filled}** filled`) // 🔢
  })
})
