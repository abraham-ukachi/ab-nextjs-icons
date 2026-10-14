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
* @name: Icons 0.2.3 (translate, github, per-icon modules) - Tests
* @file: tests/icons-0.2.3.test.ts
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
// 🧰 run the generator in check mode
import { spawnSync } from 'node:child_process'
// 📄 fs
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
// 🗺️ the full map
import { abIconSvg, abIconNames } from '../ab-icons/icon-map'
// 🔣 per-icon modules under test
import translate from '../ab-icons/icons/translate'
import github from '../ab-icons/icons/github'
import arrowBack from '../ab-icons/icons/arrow_back'

// 📁 package root
const root = join(dirname(fileURLToPath(import.meta.url)), '..')

describe('icons 0.2.3 (Welcome v6)', () => {
  it('adds translate (8th package card: i18n) and github (s09 CTA)', () => {
    expect(abIconNames).toContain('translate') // 🌍
    expect(abIconNames).toContain('github') // 🐙
    expect(abIconSvg.github.filled).toBeTruthy() // ⬛ brand mark has a filled form
    expect(abIconSvg.translate.filled).toBeUndefined() // ✏️ line glyph, like `language`
  })

  it('new SVGs follow the house rules (24 grid, currentColor, no inline comments)', () => {
    for (const svg of [abIconSvg.translate.outlined, abIconSvg.github.outlined, abIconSvg.github.filled!]) {
      expect(svg).toContain('viewBox="0 0 24 24"') // 📐
      expect(svg).toContain('currentColor') // 🎨
      expect(svg).not.toMatch(/#[0-9a-f]{3,6}\b/i) // 🚫 hard-coded colours
      expect(svg).not.toContain('<!--') // 🧹 attribution lives in NOTICE.md
    }
    expect(abIconSvg.translate.outlined).toContain('stroke-width="1.25"') // ✏️ default weight 200
  })

  it('per-icon modules equal the map entries', () => {
    expect(translate).toEqual(abIconSvg.translate) // ✅
    expect(github).toEqual(abIconSvg.github) // ✅
    expect(arrowBack).toEqual(abIconSvg.arrow_back) // ✅ existing icons too
  })

  it('modules never import the map at runtime (type-only import)', () => {
    const src = readFileSync(join(root, 'ab-icons/icons/translate.ts'), 'utf8') // 📄
    expect(src).toMatch(/^import type \{ AbIconSvgEntry \} from '\.\.\/icon-map'/m) // 🧾
    expect(src).not.toMatch(/^import (?!type)/m) // 🚫 value imports
  })

  it('generated modules are up to date and the GitHub mark is attributed', () => {
    const r = spawnSync(process.execPath, ['--no-warnings', 'scripts/icon-modules.mjs', '--check'], { cwd: root, encoding: 'utf8' }) // 🔎
    expect(r.status, r.stderr).toBe(0) // ✅
    expect(readFileSync(join(root, 'ab-icons/NOTICE.md'), 'utf8')).toMatch(/Octicons[\s\S]*MIT[\s\S]*logo guidelines/) // 📜
    expect(existsSync(join(root, 'ab-icons/icons/github.ts'))).toBe(true) // 📦
  })
})
