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
  it('deployed_code and package_2 are visually distinct (James review)', () => {
    const paths = (svg: string) => [...svg.matchAll(/d="([^"]+)"/g)].map((m) => m[1]).sort().join('|') // ✏️ geometry only
    expect(paths(abIconSvg.deployed_code.outlined)).not.toBe(paths(abIconSvg.package_2.outlined)) // 🧊 vs 📦
    expect(paths(abIconSvg.deployed_code.filled!)).not.toBe(paths(abIconSvg.package_2.filled!)) // ⬛
    expect(abIconSvg.deployed_code.outlined).toContain('M9.4 12.9 L7.5 14.8 L9.4 16.7') // ‹ code chevron
  })
  it('generated per-icon modules carry the house @authors header', async () => {
    const { readFileSync } = await import('node:fs')
    const { join } = await import('node:path')
    const src = readFileSync(join(__dirname, '..', 'ab-icons/icons/deployed_code.ts'), 'utf8') // 📄
    expect(src.split('\n')[1]).toBe('// @authors: Abraham Ukachi <abrahamukachi@gmail.com>') // ✍️
  })
})


// 🆔 Joseph #12: every mask/clip id is unique across ALL outlined + filled svgs, so an outlined and a
//    filled icon on the same page never resolve `url(#…)` to the other one (the "solid square" home bug)
describe('unique svg ids across variants 🆔', () => {
  it('no id appears in more than one icon variant', () => {
    const seen = new Map<string, string>() // 🗺️ id → owner
    for (const [name, entry] of Object.entries(abIconSvg)) {
      for (const [variant, svg] of Object.entries(entry as Record<string, unknown>)) {
        if (typeof svg !== 'string') continue
        for (const m of svg.matchAll(/\bid="([^"]+)"/g)) {
          const owner = `${name}/${variant}`
          expect(seen.get(m[1]) ?? owner, `${m[1]} in ${owner}`).toBe(owner) // 💥 duplicate
          seen.set(m[1], owner)
        }
      }
    }
    expect(seen.get('homeFilledMask')).toBe('home/filled') // 🏠
  })
})

// 🆔 per-instance ids (Joseph): two filled Homes on one page must not share a mask id
import { scopeAbIconSvgIds } from '../ab-icons/scope-ids'
describe('scopeAbIconSvgIds 🆔', () => {
  it('suffixes the mask id and every url(#…) ref, per instance', () => {
    const home = abIconSvg.home.filled!
    const a = scopeAbIconSvgIds(home, ':r1:'), b = scopeAbIconSvgIds(home, '«r2»')
    expect(a).toMatch(/id="homeFilledMask-r1"/) // 🆔 declared
    expect(a).toMatch(/url\(#homeFilledMask-r1\)/) // 🎭 referenced
    expect(a).not.toMatch(/url\(#homeFilledMask\)/) // 🚫 no stale ref
    expect(b).toMatch(/id="homeFilledMask-r2"/) // 🔀 a different instance
  })
  it('every filled icon stays self-consistent after scoping', () => {
    for (const name of abIconNames) {
      const svg = (abIconSvg as Record<string, { filled?: string }>)[name].filled
      if (!svg) continue
      const out = scopeAbIconSvgIds(svg, 'x1')
      const ids = new Set(Array.from(out.matchAll(/\sid="([^"]+)"/g), (m) => m[1]))
      for (const [, ref] of out.matchAll(/url\(#([^)]+)\)/g)) expect(ids.has(ref), `${name} → ${ref}`).toBe(true) // 🔗
    }
  })
  it('leaves id-free markup alone', () => {
    expect(scopeAbIconSvgIds('<svg><path d="M0 0"/></svg>', 'r1')).toBe('<svg><path d="M0 0"/></svg>') // 🙅
  })
})

// 📝 James nit: the barrel carries the house header too
describe('ab-icons/index.ts header 📝', () => {
  it('has the copyright and @authors lines', async () => {
    const { readFileSync } = await import('node:fs')
    const { join } = await import('node:path')
    const src = readFileSync(join(__dirname, '..', 'ab-icons', 'index.ts'), 'utf8')
    expect(src).toContain('Copyright (c) 2026 Abraham Ukachi. The abElements Project.') // ©️
    expect(src).toContain('@authors: Abraham Ukachi <abrahamukachi@gmail.com>') // ✍️
  })
})

// 📦 James: the pack must ship dist/ (prepack builds it, check:publish guards it)
describe('dist guard 📦', () => {
  it('prepack builds, and check-dist fails without dist/index.*', async () => {
    const { readFileSync, mkdtempSync, mkdirSync, copyFileSync } = await import('node:fs')
    const { join } = await import('node:path')
    const { tmpdir } = await import('node:os')
    const { spawnSync } = await import('node:child_process')
    const pkg = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf8'))
    expect(pkg.scripts.prepack).toBe('pnpm build') // 🏗️
    expect(pkg.scripts['check:publish']).toContain('scripts/check-dist.mjs') // 🛡️
    const tmp = mkdtempSync(join(tmpdir(), 'abicons-dist-')) // 📁 a package without dist/
    mkdirSync(join(tmp, 'scripts'))
    copyFileSync(join(__dirname, '..', 'scripts', 'check-dist.mjs'), join(tmp, 'scripts', 'check-dist.mjs'))
    expect(spawnSync(process.execPath, [join(tmp, 'scripts', 'check-dist.mjs')]).status).toBe(1) // ❌
  })
})
