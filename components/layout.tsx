import Link from "next/link"

import { PreviewAlert } from "components/preview-alert"

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <div className="max-w-screen-md px-6 mx-auto">
        <header>
          <div className="container flex items-center justify-between py-6 mx-auto">
            <Link href="/" className="text-2xl font-semibold no-underline">
              abhisek.xyz
            </Link>
            <Link href="/thoughts" className="hover:text-blue-600">
              my thoughts
            </Link>
            <Link href="/use" className="hover:text-blue-600">
              what i use
            </Link>
            <Link
              href="https://abhisekmazumdar.notion.site/Abhisek-Mazumdar-f624928ce0fa4b48900097a7c6703de9"
              target="_blank"
              rel="external"
              className="hover:text-blue-600"
            >
              know me more!
            </Link>
          </div>
        </header>
        <main className="container py-10 mx-auto">{children}</main>
      </div>
    </>
  )
}
