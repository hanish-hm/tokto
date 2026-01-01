import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cinzel } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navigation from '@/components/Navigation'
import AgeVerification from '@/components/AgeVerification'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

export const metadata: Metadata = {
  title: 'Tokto - Premium Rolling Papers',
  description: 'Luxury rolling papers crafted for the discerning smoker',
  keywords: [
    'Tokto',
    'premium rolling papers',
    'pre rolled cones',
    'herbal rolling papers',
    'rolling paper brand',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0YM0FK6WP2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0YM0FK6WP2');
        `}
      </Script>
      <body className="font-inter bg-matte-black text-off-white">
        <AgeVerification />
        <Navigation />
        {children}
      </body>
    </html>
  )
}