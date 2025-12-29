import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cinzel } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

export const metadata: Metadata = {
  title: 'Tokto - Premium Rolling Papers',
  description: 'Luxury rolling papers crafted for the discerning smoker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
      <body className="font-inter bg-matte-black text-off-white">
        <Navigation />
        {children}
      </body>
    </html>
  )
}