import Image from "next/image"
import Link from "next/link"
import { site } from "@/site.config"

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      {/* Title above figure, left-aligned */}
      <header className="pt-6 pb-1 mx-auto max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight text-brand-navy">
          {site.title || "Machine Learning for Causal Inference"}
        </h1>
        {site.subtitle && (
          <p className="mt-1 text-sm text-neutral-600">{site.subtitle}</p>
        )}
      </header>

      {/* Figure */}
      <div className="mx-auto max-w-3xl">
        <div className="relative aspect-[16/9] overflow-hidden border border-neutral-400/40 rounded-none">
          <Image
            src="/art/flow_fig.png"
            alt="Course artwork"
            fill
            sizes="(max-width: 48rem) 100vw, 48rem"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Figure caption */}
        <p className="mt-2 text-xs text-neutral-600">
          <a
            href="https://www.tylerxhobbs.com/words/flow-fields"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:opacity-80"
          >
            Flow field curves
          </a>
          . Image source:{" "}
          <a
            href="https://cran.r-project.org/web/packages/aRtsy/readme/README.html#flow-fields"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:opacity-80"
          >
            aRtsy: Generative Art with R and ggplot2
          </a>
        </p>
      </div>

      {/* Course description */}
      {site.description && (
        <div
          className="mx-auto max-w-3xl mt-6 prose"
          dangerouslySetInnerHTML={{ __html: site.description }}
        />
      )}
    </div>
  )
}
