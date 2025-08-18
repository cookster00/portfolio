import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Simple Websites — Nathan Cook",
  description: "Clean, mobile-friendly webpages for small businesses.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}
