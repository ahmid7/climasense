import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const fontLato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ClimaSense',
  description: 'Weather APp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontLato.className}>{children}</body>
    </html>
  )
}
