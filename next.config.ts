// next.config.ts
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const withMDX = createMDX({
  extension: /\.mdx?$/,   // tells Next to treat .md/.mdx as pages/components
})

// Static export for GitHub Pages. The Pages workflow sets
// NEXT_PUBLIC_BASE_PATH=/epid750-site; local dev/build serve from "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"], // let Next handle MD/MDX pages too
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: { unoptimized: true },
}

export default withMDX(nextConfig)
