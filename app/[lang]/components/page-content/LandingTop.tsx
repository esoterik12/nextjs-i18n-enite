import React from 'react'
import ImageTabs from './ImageTabs'
import { IPackProductsJson } from '@/lib/types'
import Link from 'next/link'

export default async function LandingPageTop({
  landingPageTop,
  products
}: {
  landingPageTop: any // ADD TYPES WHEN COMPLETED
  products: IPackProductsJson
}) {
  return (
    <div className='container mt-2'>
      <div className='flex flex-col sm:flex-row'>
        <div className='w-full pt-6 text-center md:w-1/3 md:text-left'>
          <h1 className='mb-2 mt-4 text-4xl font-bold text-gray-900'>
            {landingPageTop.title}
          </h1>
          <h2 className='mb-4 text-2xl text-gray-700'>
            {landingPageTop.subTitle}
          </h2>
          <ul className='sm:ml-8 space-y-4 md:list-disc'>
            <li className='text-lg text-gray-600'>
              {landingPageTop.descriptionOne}
            </li>
            <li className='text-lg text-gray-600'>
              {landingPageTop.descriptionTwo}
            </li>
            <li className='text-lg text-gray-600'>
              {landingPageTop.descriptionThree}
            </li>
            <li className='text-lg text-gray-600'>
              {landingPageTop.descriptionFour}
            </li>
          </ul>

          <div className='mt-9'>
            <Link
              href='/packs'
              className='rounded-xl bg-gray-900 p-3 text-white transition-colors duration-300 ease-in-out hover:bg-gray-600'
            >
              {landingPageTop.buttonLink}
            </Link>
          </div>
        </div>
        <div className='w-full p-6 md:w-2/3'>
          <ImageTabs productsData={products.data} />
        </div>
      </div>
    </div>
  )
}
