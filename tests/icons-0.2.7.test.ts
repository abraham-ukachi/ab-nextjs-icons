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
* @name: 0.2.7 - Tests (prepack on Node 20, Joseph)
* @file: tests/icons-0.2.7.test.ts
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
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const pkg = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf8')) // 📦 package.json

// 🐢 Joseph: `npm pack` on Node 20 died in prepack, because `pnpm build` starts pnpm 11 (needs Node ≥ 22: node:sqlite)
describe('prepack works on Node 20 🐢', () => {
  it('runs tsup directly, with no package manager in the chain', () => {
    expect(pkg.scripts.prepack).toBe('tsup --clean') // ✅ the local bin (npm/pnpm/yarn all put it on PATH)
    expect(pkg.scripts.prepack).not.toMatch(/\b(pnpm|yarn|npx)\b/) // 🚫 no pnpm 11 → no node:sqlite on Node 20
    expect(pkg.scripts.build).toBe('tsup --clean') // 🔁 same command as `build`
  })
  it('the scripts npm runs at pack/publish time use plain node only', () => {
    for (const s of ['prepack', 'prepublishOnly']) expect(pkg.scripts[s], s).not.toMatch(/\bpnpm\b/) // 🧹
  })
})
