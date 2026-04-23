import { readdir } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ROOT = join(__dirname, '..', 'public', 'images')

async function walk(dir) {
  const files = []
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.webp')) files.push(full)
  }
  return files
}

const files = await walk(ROOT)
for (const file of files) {
  const { width, height } = await sharp(file).metadata()
  console.log(`${relative(ROOT, file).padEnd(45)} ${width}x${height}`)
}
