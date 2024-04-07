import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from './components/layout/NavHeader'
import { Inter } from 'next/font/google'
import CartProvider from '@/lib/redux/CartProvider'
import ShoppingCart from './components/products/ShoppingCart'
import Footer from './components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
}

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs-i18n-enite-test.vercel.app/en'),
  openGraph: {
    siteName: 'e-nite | Party Services',
    type: 'website',
    locale: 'en_US'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow'
  },
  applicationName: 'e-nite | Party Services',
  appleWebApp: {
    title: 'e-nite | Party Services',
    statusBarStyle: 'default',
    capable: true
  },
}

// Used in combination with dynamic route segments to statically generate routes at build time
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale } // Typed for lang params
}) {
  return (
    // html lang is configured with params.lang
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <CartProvider>
          <ShoppingCart />
          <Header lang={params.lang} />
          <main>{children}</main>
          <Footer lang={params.lang} />
        </CartProvider>
      </body>
    </html>
  )
}
