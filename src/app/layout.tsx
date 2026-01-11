import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer',
  description: 'Full Stack Developer Portfolio - Showcasing skills, projects, and experience',
  keywords: ['portfolio', 'full stack developer', 'web developer', 'software engineer'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Portfolio | Full Stack Developer',
    description: 'Full Stack Developer Portfolio',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

