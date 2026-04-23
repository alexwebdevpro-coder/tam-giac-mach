import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = join(__dirname, '..', 'public', 'images')

const PROFILES = {
  general: { maxWidth: 1600, quality: 72 },
  rooms: { maxWidth: 1200, quality: 70 },
  experiences: { maxWidth: 1200, quality: 70 },
  default: { maxWidth: 1600, quality: 72 },
}

function profileFor(file) {
  const rel = relative(ROOT, file)
  const folder = rel.split(sep)[0]
  return PROFILES[folder] ?? PROFILES.default
}

async function walk(dir) {
  const files = []
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.webp')) {
      files.push(full)
    }
  }
  return files
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

async function optimize(file) {
  const { maxWidth, quality } = profileFor(file)
  const input = await readFile(file)
  const output = await sharp(input)
    .resize({ width: maxWidth, height: maxWidth, fit: 'inside', withoutEnlargement: true })
    .webp({ quality })
    .toBuffer()
  await writeFile(file, output)
  return { before: input.length, after: output.length, maxWidth, quality }
}

const files = await walk(ROOT)
console.log(`Found ${files.length} WebP file(s) in ${ROOT}\n`)

let totalBefore = 0
let totalAfter = 0

for (const file of files) {
  const { before, after, maxWidth, quality } = await optimize(file)
  totalBefore += before
  totalAfter += after
  const saved = before - after
  const pct = ((saved / before) * 100).toFixed(0)
  const name = relative(ROOT, file)
  const profile = `${maxWidth}w q${quality}`.padEnd(12)
  console.log(
    `${name.padEnd(45)} ${profile} ${formatBytes(before).padStart(10)} -> ${formatBytes(after).padStart(10)}  (-${pct}%)`,
  )
}

const totalSaved = totalBefore - totalAfter
const totalPct = ((totalSaved / totalBefore) * 100).toFixed(0)
console.log(
  `\nTotal: ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)}  (saved ${formatBytes(totalSaved)}, -${totalPct}%)`,
)
