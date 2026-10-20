#!/usr/bin/env node
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
* @name: check-dist
* @file: scripts/check-dist.mjs
* @type: Node script (prepublish guard)
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


// 📦 James: the tarball must ship dist/. `prepack` builds it; this guard fails check:publish when it's missing.
import { existsSync, readdirSync } from 'node:fs';

const dir = new URL('../dist/', import.meta.url); // 📁
const want = ['index.js', 'index.mjs', 'index.d.ts']; // 🎯 main / module / types
const have = existsSync(dir) ? readdirSync(dir) : []; // 🔎
const missing = want.filter((f) => !have.includes(f)); // 🚫
if (!have.some((f) => /^index\./.test(f)) || missing.length) {
  console.error(`\n✖ dist/ is incomplete (missing: ${missing.join(', ') || 'dist/index.*'}). Run \`pnpm build\` (prepack does it on pack).\n`);
  process.exit(1); // ❌
}
console.log(`✔ dist/ ships ${want.join(', ')}`); // ✅
