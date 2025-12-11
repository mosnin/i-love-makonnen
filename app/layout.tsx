import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'iLoveMakonnen | Cyberpunk Edition',
  description: 'Official website of iLoveMakonnen - Sleek Cyberpunk Experience',
  keywords: ['iLoveMakonnen', 'music', 'artist', 'hip-hop', 'rap'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
        <Navigation />
        <main className="min-h-screen relative">
          {children}
        </main>
      </body>
    </html>
  )
}
