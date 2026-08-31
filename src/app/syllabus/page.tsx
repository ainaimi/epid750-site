import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

export default function SyllabusPage() {
  const filePath = path.join(process.cwd(), "content", "pages", "syllabus.md")
  const raw = fs.readFileSync(filePath, "utf8")
  const { content } = matter(raw)

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <article className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </article>
    </main>
  )
}
