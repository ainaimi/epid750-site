// next.config.ts
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const withMDX = createMDX({
  extension: /\.mdx?$/,   // tells Next to treat .md/.mdx as pages/components
})

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"], // let Next handle MD/MDX pages too
}

export default withMDX(nextConfig)