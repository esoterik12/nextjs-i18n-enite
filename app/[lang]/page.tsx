import { Locale } from '@/i18n.config' // type import
import { getDictionary } from '@/lib/utils/dictionary'
import AnimatedBanner from './components/layout/AnimatedBanner'
import LandingPageTop from './components/page-content/LandingTop'
import LandingPageMid from './components/page-content/LandingMid'
import Image from 'next/image'
import Link from 'next/link'

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
          <p className='text-LG text-gray-100 shadow-lg'>
            {page.home.description}
          </p>
        </AnimatedBanner>
      </div>
      {/* Mobile Title Splash: ENABLED FOR MOBILE */}
      <div className='container flex flex-col items-center justify-center text-center md:hidden'>
        <Image
          alt='e-nite logo'
          src='/e-nite/e-niteLogoV1.png'
          width={150}
          height={100}
          className='mb-6'
        />
        <p className='mb-4 text-2xl text-gray-700'>
          <span className='inline-block bg-gradient-to-r from-red-700 via-red-500 to-red-400 bg-clip-text text-transparent'>
            {page.home.subTitle}
          </span>
        </p>
        <p className='text-gray-500'>{page.home.description}</p>
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
