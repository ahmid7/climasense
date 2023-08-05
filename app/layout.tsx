"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fontLato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const queryClient = new QueryClient()

// export const metadata: Metadata = {
//   title: 'ClimaSense',
//   description: 'Weather App',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontLato.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
