import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-retro',
})

export const metadata: Metadata = {
  title: 'iLoveMakonnen | Official Arcade',
  description: 'Official website of iLoveMakonnen - Retro Arcade Experience',
  keywords: ['iLoveMakonnen', 'music', 'artist', 'hip-hop', 'rap'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={orbitron.variable}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
