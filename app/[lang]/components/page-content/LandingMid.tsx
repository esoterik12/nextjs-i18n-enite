import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ADD TYPES WHEN COMPLETED
export default async function LandingPageMid({
  landingPageMid
}: {
  landingPageMid: any
}) {
  return (
    <div className='container mx-auto mt-12 px-4'>
      <div className='flex flex-wrap '>
        <div className='w-full p-6 md:w-1/3 text-center md:text-left'>
          <h1 className='mb-2 text-4xl font-bold text-gray-900'>
            {landingPageMid.title}
          </h1>
          <h2 className='mb-4 text-lg text-gray-700'>
            {landingPageMid.subTitle}
          </h2>
          <p className='text-lg text-gray-600'>{landingPageMid.description} </p>
          <div className='mt-6'>
            <Link
              href='/packs'
              className='rounded-xl bg-gray-900 p-3 text-white transition-colors duration-300 ease-in-out hover:bg-gray-600'
            >
              {landingPageMid.buttonLink}{' '}
            </Link>
          </div>
        </div>
        <div className='flex w-full flex-row items-center justify-center p-6 md:w-2/3'>
          <Image
            src='/e-nite/products-combo-image.png'
            alt='JBP-Partybox'
            width={600}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}
