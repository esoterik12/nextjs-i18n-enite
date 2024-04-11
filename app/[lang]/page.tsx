import { Locale } from '@/i18n.config' // type import
import { getDictionary } from '@/lib/utils/dictionary'
import AnimatedBanner from './components/layout/AnimatedBanner'
import LandingPageTop from './components/page-content/LandingTop'
import LandingPageMid from './components/page-content/LandingMid'
import Link from 'next/link'
import AnimatedBannerMobile from './components/layout/AnimatedBanner'
import { Metadata } from 'next'

// Update with support for i18n
export const metadata: Metadata = {
  title: 'e-nite | Party Services',
  description:
    'Unforgettable parties since 2003. Sound and light equipment for rent, professional DJ and photography for birthdays, weddings, or corporate events.',
  keywords: [
    'e-nite',
    'party services',
    'speakers',
    'speaker rental',
    'sound equipment',
    'event equipment rental',
    'professional DJ services',
    'photography services'
  ],
  openGraph: {
    url: 'https://nextjs-i18n-enite-test.vercel.app/en',
    type: 'website',
    title: 'E-Nite | Party Services',
    description:
      'Unforgettable parties since 2003. Sound and light equipment for rent, professional DJ and photography for birthdays, weddings, or corporate events.',
    images: [
      {
        url: 'https://nextjs-i18n-enite-test.vercel.app/_next/image?url=%2Fe-nite%2Fe-niteLogoV1.png&w=128&q=75',
        width: 120,
        height: 63,
        alt: 'E-Nite Party Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Nite | Party Services',
    description:
      'Unforgettable parties since 2003. Sound and light equipment for rent, professional DJ and photography for birthdays, weddings, or corporate events.',
    creator: '@e-nite',
    site: '@e-nite',
    images: [
      {
        url: 'https://nextjs-i18n-enite-test.vercel.app/_next/image?url=%2Fe-nite%2Fe-niteLogoV1.png&w=128&q=75',
        width: 120,
        height: 63,
        alt: 'E-Nite Party Services'
      }
    ]
  }
}

// getting lang params
export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale } // typed
}) {
  const { page, products } = await getDictionary(lang) // get the right language page content with a function using lang as input - in lib/dictionary.ts

  return (
    <section className=''>
      {/* Image Banner: DISABLED FOR MOBILE */}
      <div className='hidden md:flex'>
        <AnimatedBanner>
          <h1 className='mb-2 text-4xl font-bold text-white shadow-lg'>
            {page.home.title}
          </h1>
          <p className='text-2xl text-gray-200 shadow-lg'>
            {page.home.subTitle}
          </p>
        </AnimatedBanner>
      </div>

      {/* Mobile Title Splash: ENABLED FOR MOBILE */}
      <div className='flex flex-col items-center justify-center text-center md:hidden'>
        <AnimatedBannerMobile>
          <h1 className='mb-2 text-4xl font-bold text-white shadow-lg'>
            {page.home.title}
          </h1>
          <p className='text-xl text-gray-200 shadow-lg'>
            {page.home.subTitle}
          </p>
        </AnimatedBannerMobile>
      </div>

      {/* Main Landing Content: */}
      {/* products is passing the json object with packs info */}
      <LandingPageTop
        landingPageTop={page.landingPageTop}
        products={products}
      />

      {/* Services Center Text */}
      <div className='container mb-12 mt-12 flex flex-col text-center'>
        <h1 className='mb-2 text-4xl font-semibold'>
          {page.home.servicesContent.title}
        </h1>
        <Link href='/services'>
          <h1 className='mb-4 text-4xl font-bold'>
            <span className='inline-block bg-gradient-to-r from-red-700 via-red-500 to-red-400 bg-clip-text text-transparent transition duration-300 ease-in-out hover:scale-105'>
              {page.home.servicesContent.titleHighlight}
            </span>
          </h1>
        </Link>
        <p className='mb-1 text-xl'>
          <Link href={'/services/delivery'}>
            <span className='inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-500 bg-clip-text font-semibold text-transparent transition duration-300 ease-in-out hover:scale-105'>
              {page.home.servicesContent.deliveryLink}
            </span>
          </Link>{' '}
          {page.home.servicesContent.deliveryTextEnd}
        </p>
        <p className='mb-1 text-xl'>
          <Link href={'/services/photographer'}>
            {page.home.servicesContent.photographerTextStart}
            <span className='inline-block bg-gradient-to-r from-red-700 via-red-500 to-red-400 bg-clip-text font-semibold text-transparent transition duration-300 ease-in-out hover:scale-105'>
              {page.home.servicesContent.photographerLink}
            </span>
          </Link>
          .
        </p>
        <p className='mb-8 text-xl'>
          <Link href={'/services/djs'}>
            {page.home.servicesContent.djTextStart}
            <span className='inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-300 bg-clip-text font-semibold text-transparent transition duration-300 ease-in-out hover:scale-105'>
              {page.home.servicesContent.djLink}
            </span>
          </Link>{' '}
          {page.home.servicesContent.djTextEnd}
        </p>
      </div>

      {/* Individual Product Content */}
      <LandingPageMid landingPageMid={page.landingPageMid} />

      {/* Get Started Call to Action */}
      <div className='container mb-12 mt-24 flex flex-col text-center'>
        <Link href='/contact'>
          <h1 className='mb-2 inline-block bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-300 bg-clip-text text-4xl font-semibold text-transparent transition duration-300 ease-in-out hover:scale-105'>
            Contact us with inquiries!
          </h1>
        </Link>
        <p className='mb-1 text-lg'></p>
        <p className='mb-1 text-lg'>
          Ensure you have read the conditions before placing an order.
        </p>
        <p className='mb-8 text-lg'></p>
      </div>
    </section>
  )
}
