// src/app/readings/page.tsx
import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { asset } from "@/site.config"

export default function ReadingsPage() {
  const filePath = path.join(process.cwd(), "content", "pages", "readings.md")
  const raw = fs.readFileSync(filePath, "utf8")
  const { content } = matter(raw)

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <article className="prose max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // Root-relative links to public/ assets need the Pages base path
            a: ({ href, children }) => (
              <a href={href && href.startsWith("/") ? asset(href) : href}>{children}</a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  )
}
