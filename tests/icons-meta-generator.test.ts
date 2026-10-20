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
* @name: AbIcons metadata generator (vendored)
* @file: tests/icons-meta-generator.test.ts
* @type: TypeScript (Vitest)
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


// 🧪 vitest
import { afterAll, describe, expect, it } from 'vitest'
// 🐚 child process + fs
import { spawnSync } from 'node:child_process'
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

// 📁 package root + generator
const root = join(__dirname, '..')
const gen = join(root, 'scripts', 'regenerate-ab-icons-meta.py')
// 🐍 run the generator
const run = (...args: string[]) => spawnSync('python3', [gen, ...args], { cwd: root, encoding: 'utf8' })
// 🧪 scratch copy of ab-icons (never touch the real tree)
const scratch = mkdtempSync(join(tmpdir(), 'ab-icons-meta-'))
const copy = join(scratch, 'ab-icons')
cpSync(join(root, 'ab-icons'), copy, { recursive: true })
afterAll(() => rmSync(scratch, { recursive: true, force: true })) // 🧹

describe('scripts/regenerate-ab-icons-meta.py (vendored from the install payload) 🔣', () => {
  it('starts with God\'s full header and is stdlib-only', () => {
    const src = readFileSync(gen, 'utf8') // 📄
    expect(src).toContain('Copyright (c) 2026 Abraham Ukachi. The abElements Project.') // ©️
    expect(src).toContain('@authors: Abraham Ukachi <abrahamukachi@gmail.com>') // ✍️
    expect(src.match(/^(?:import|from) (\w+)/gm)!.map((l) => l.split(' ')[1]).sort()).toEqual(['__future__', 'argparse', 'json', 're', 'pathlib'].sort()) // 🐍 no pip deps
  })

  it('--check passes on the committed files (byte-identical regen)', () => {
    const r = run('--check') // 🔎
    expect(r.status, r.stderr).toBe(0) // ✅
    expect(r.stdout).toContain('up to date (5 files, outlined=271 filled=247)') // 🗂️
  })

  it('--check catches a stale output and never writes', () => {
    const file = join(copy, 'names.json') // 🗂️
    writeFileSync(file, '[]\n') // 💥 make it stale
    const r = run('--ab-icons', copy, '--check') // 🔎
    expect(r.status).not.toBe(0) // ✖
    expect(r.stderr).toContain('names.json') // 📛 names the file
    expect(readFileSync(file, 'utf8')).toBe('[]\n') // 🚫 untouched in check mode
    expect(run('--ab-icons', copy).status).toBe(0) // ✍️ regen fixes it…
    expect(readFileSync(file, 'utf8')).toBe(readFileSync(join(root, 'ab-icons', 'names.json'), 'utf8')) // …byte-identically
  })

  it('fails without the Octicons NOTICE next to the GitHub mark', () => {
    rmSync(join(copy, 'NOTICE.md')) // 🚫 credit gone
    const r = run('--ab-icons', copy, '--check') // 🔎
    expect(r.status).not.toBe(0) // ✖
    expect(r.stderr).toContain('Octicons') // 🐙
  })

  it('is wired into check:publish + prepublishOnly', () => {
    const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) // 📦
    for (const s of ['check:publish', 'prepublishOnly']) expect(pkg.scripts[s]).toContain('python3 scripts/regenerate-ab-icons-meta.py --check') // 🔗
    expect(pkg.scripts['icons:meta']).toBe('python3 scripts/regenerate-ab-icons-meta.py') // ✍️
  })
})
