import React from 'react'
import ImageTabs from './ImageTabs'
import { IPackProductsJson } from '@/lib/types'
import CustomButton from '../buttons/CustomButton'
import Link from 'next/link'

export default async function LandingPageTop({
  landingPageTop,
  products
}: {
  landingPageTop: any // ADD TYPES WHEN COMPLETED
  products: IPackProductsJson
}) {
  return (
    <div className='container mx-auto mt-2'>
      <div className='flex flex-wrap '>
        <div className='w-full pt-6 md:w-1/3 text-center md:text-left'>
          <h1 className='mb-2 mt-4 text-4xl font-bold text-gray-900'>
            {landingPageTop.title}
          </h1>
          <h2 className='mb-4 text-2xl text-gray-700'>
            {landingPageTop.subTitle}
          </h2>
          <p className='text-lg text-gray-600'>{landingPageTop.description}</p>
          <div className='mt-6'>
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
