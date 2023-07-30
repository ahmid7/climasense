import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const fontPoppins = Poppins({
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
      <body className={fontPoppins.className}>{children}</body>
    </html>
  )
}
