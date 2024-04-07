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
  applicationName: 'Blog | Minh Vu',
  appleWebApp: {
    title: 'e-nite | Party Services',
    statusBarStyle: 'default',
    capable: true
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon'
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/apple-icon-57x57.png',
        sizes: '57x57',
        type: 'image/png'
      },
      {
        url: '/apple-icon-60x60.png',
        sizes: '60x60',
        type: 'image/png'
      }
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ]
  }
}

// Used in combination with dynamic route segments to statically generate routes at build time
// Not sure exactly how that words - above copied from docs
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
