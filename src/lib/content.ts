import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export type Doc = {
  slug: string
  data: Record<string, any>
  body: string
}

function base(dir: string) {
  return path.join(process.cwd(), "content", dir)
}

export function list(dir: string): Doc[] {
  const folder = base(dir)
  if (!fs.existsSync(folder)) return []
  const files = fs.readdirSync(folder).filter(f => /\.(md|mdx)$/i.test(f))

  const docs = files.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)$/i, "")
    const raw = fs.readFileSync(path.join(folder, filename), "utf8")
    const { data, content } = matter(raw)
    return { slug, data, body: content }
  })

  // Simple sort by title; change if you want a different order
  return docs.sort((a, b) => String(a.data.title || a.slug).localeCompare(String(b.data.title || b.slug)))
}
