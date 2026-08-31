import type { Metadata } from "next"
import Link from "next/link"
import { sans } from "./fonts"
import "./globals.css"
import { site, links } from "@/site.config"
import { Mail, Twitter, Github, Globe } from "lucide-react" // eslint-disable-line @typescript-eslint/no-unused-vars

export const metadata: Metadata = {
  title: site.title || "ML4CI",
  description: site.description || "Machine Learning for Causal Inference",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/syllabus", label: "Syllabus" },
    { href: "/lectures", label: "Lectures" },
    { href: "/labs", label: "Labs" },
    { href: "/data", label: "Data" },
    { href: "/homework", label: "Homework" },
    { href: "/readings", label: "Readings" },
  ]

  return (
    <html lang="en" className={sans.variable}>
      <body className="min-h-screen bg-background text-foreground font-sans flex flex-col">
        {/* HEADER */}
        <header className="bg-brand-navy text-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <Link href="/" className="text-lg font-semibold tracking-tight hover:opacity-90">
              {site.title || "ML4CI"}
            </Link>
            <nav className="flex gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:underline underline-offset-4 decoration-white/70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main className="container mx-auto flex-1 px-6 py-8">{children}</main>

        {/* FOOTER */}
        <footer className="bg-neutral-100 border-t border-neutral-300">
          <div className="container mx-auto px-6 py-6 text-sm text-neutral-700 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left side: copyright */}
            <div>© {new Date().getFullYear()} {site.title || "ML4CI"}</div>

            {/* Right side: stacked contact links */}
            <div className="justify-self-end">
              <ul className="flex flex-col items-start gap-2">
                {/* Email */}
                {site.email && (
                  <li>
                    <a
                      href={links.emailHref}
                      className="flex items-center gap-2 text-brand-link hover:underline underline-offset-2"
                    >
                      {/* Email icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M4 6h16v12H4z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                      {site.email}
                    </a>
                  </li>
                )}

                {/* Twitter */}
                {site.twitterUser && (
                  <li>
                    <a
                      href={links.twitterHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-brand-link hover:underline underline-offset-2"
                    >
                      {/* Twitter icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3c-0.8 0.5-1.7 0.9-2.6 1.1 0.9-0.6 1.6-1.5 2-2.6-0.9 0.6-2 1-3.1 1.2C18.4 1.7 17.2 1 16 1c-2.5 0-4.6 2-4.6 4.6 0 0.4 0 0.8 0.1 1.2C7.5 6.6 4.2 4.9 2 2.3c-0.5 0.8-0.7 1.6-0.7 2.6 0 1.6 0.8 3 2.1 3.9-0.7 0-1.4-0.2-2-0.5 0 0 0 0 0 0.1 0 2.3 1.7 4.2 3.9 4.6-0.4 0.1-0.9 0.2-1.4 0.2-0.3 0-0.7 0-1-0.1 0.7 2 2.6 3.5 4.9 3.5-1.8 1.4-4.1 2.2-6.6 2.2-0.4 0-0.8 0-1.2-0.1 2.4 1.5 5.3 2.4 8.4 2.4 10.1 0 15.6-8.4 15.6-15.6 0-0.2 0-0.4 0-0.6C21.6 4.7 22.4 3.9 23 3z"/>
                      </svg>
                      @{site.twitterUser}
                    </a>
                  </li>
                )}

                {/* GitHub */}
                {site.githubUser && (
                  <li>
                    <a
                      href={links.githubHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-brand-link hover:underline underline-offset-2"
                    >
                      {/* GitHub icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 2 .7 2 1 .4 2.3.3 3.3.1.1-.7.4-1.3.8-1.6-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1.1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.8 1.1.8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-1.4 2.8-1.1 2.8-1.1.6 1.4.2 2.5.1 2.8.7.7 1.1 1.6 1.1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2z" clipRule="evenodd"/>
                      </svg>
                      {site.githubUser}
                    </a>
                  </li>
                )}

                {/* Professional Site */}
                {site.authorUrl && (
                  <li>
                    <a
                      href={links.authorHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-brand-link hover:underline underline-offset-2"
                    >
                      {/* Globe icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M3 12h18M12 3a17.5 17.5 0 010 18M12 3a17.5 17.5 0 000 18"/>
                      </svg>
                      {site.authorUrl}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
