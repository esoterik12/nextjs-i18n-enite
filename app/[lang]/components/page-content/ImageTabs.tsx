/* eslint-disable @next/next/no-img-element */
'use client'
import clsx from 'clsx'
import { Tab } from '@headlessui/react'
import { IProductItem } from '@/lib/types'
import Image from 'next/image'

const ImageTabs = ({ productsData }: { productsData: IProductItem[] }) => {
  return (
    <Tab.Group as='div' className='flex flex-1 flex-col lg:self-start'>
      <div className='mx-auto mt-6 w-full max-w-2xl '>
        {/* Icons for image selection */}
        <Tab.List className='grid grid-cols-5 gap-6'>
          {productsData.map(product => (
            <Tab
              key={product.productId}
              className='h-12 sm:h-16 relative flex cursor-pointer items-center justify-center align-middle rounded-md bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-sky-500 focus:ring-opacity-50 focus:ring-offset-4 md:h-16'
            >
              {({ selected }) => (
                <div className=''>
                  <div className='hidden sm:block'>
                    <p className='absolute inset-0 overflow-hidden rounded-md font-bold '>
                      {product.productTitle}
                    </p>
                    <p className='mt-4 '>
                      {product.productPrice}{' '}
                      <span className='text-[10px]'>CHF / day</span>
                    </p>
                    <span
                      className={clsx(
                        selected ? 'ring-sky-500' : 'ring-transparent',
                        'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                      )}
                      aria-hidden='true'
                    />
                  </div>
                  <div className='block sm:hidden'>
                    <p className='overflow absolute inset-0 mt-1 flex justify-center rounded-md align-middle font-bold '>
                      Pack #{product.productId}
                    </p>
                  </div>
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      {/* Main Image */}
      <Tab.Panels className='aspect-h-3 aspect-w-4 flex items-center justify-center'>
        {productsData.map(product => (
          <Tab.Panel key={product.productId} className='flex h-full w-full'>
            <Image
              src={product.productImage}
              alt='product image'
              width={800}
              height={800}
              className='w-full max-w-xl rounded-lg object-cover object-center'
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default ImageTabs
