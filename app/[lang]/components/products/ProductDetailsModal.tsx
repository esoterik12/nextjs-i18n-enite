'use client'
import React from 'react'
import Image from 'next/image'
import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import SelectIcon from '../icons/SelectIcon'
import { ISingleProductItem } from '@/lib/types'
import Link from 'next/link'
import AddToOrderButton from '../buttons/AddToOrderButton'

interface IProductDetailsModal {
  product: ISingleProductItem
}

const ProductDetailsModal = ({ product }: IProductDetailsModal) => {
  const [isOpen, setIsOpen] = React.useState(false)

  // Created to match types of <AddToOrderButton> component
  const singleProductCartItem = {
    productId: product.id,
    productTitle: product.title,
    productPrice: product.price,
    productDescription: product.description,
    productImage: product.image
  }

  return (
    <div className='text-center'>
      <button onClick={() => setIsOpen(true)}>
        <p className='text-sm text-gray-600 hover:underline'>View Details</p>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-20'
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25'></div>
          </Transition.Child>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative mt-24 flex max-h-[90vh] w-full max-w-2xl transform flex-col gap-5 overflow-y-auto rounded-2xl bg-white p-6 text-left shadow-xl transition-all'>
                  <div className='flex justify-between'>
                    <h2 className='text-center text-[18px] font-semibold'>
                      {product.title}
                    </h2>
                    <button onClick={() => setIsOpen(false)}>
                      <SelectIcon
                        iconClasses='h-6 w-6 hover:text-gray-400 transition-color transition transition-300'
                        iconSelection='x'
                      />
                    </button>
                  </div>
                  <div className='flex flex-row'>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={150}
                      height={150}
                      className='hidden md:block'
                    />
                    <div>
                      <p className='p-3 text-sm text-gray-600'>
                        {product.description}
                      </p>
                      <div className='flex items-center justify-center align-middle'>
                        {product.demoLink && (
                          <p className='p-1 text-sm'>
                            <span className='inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-500 bg-clip-text font-semibold text-transparent transition duration-300 ease-in-out hover:scale-105'>
                              <Link href={product.demoLink}>Video Demo</Link>
                            </span>
                          </p>
                        )} 

                      </div>
                    </div>
                  </div>

                  {/* Table for Details: */}
                  <div className='flex flex-col items-center justify-center align-middle'>
                    <div className='grid w-full grid-cols-[1fr_2fr] gap-2 p-1 sm:grid-cols-[1fr_3fr]'>
                      <p className='text-sm text-gray-500'>Price:</p>{' '}
                      <p className='text-sm text-gray-900'>
                        CHF {product.price} per day
                      </p>
                    </div>

                    {product.specs && (
                      <div className='grid w-full grid-cols-[1fr_2fr] gap-2 p-1 sm:grid-cols-[1fr_3fr]'>
                        <p className='text-sm text-gray-500'>Specifications:</p>
                        <p className='text-sm text-gray-900'>{product.specs}</p>
                      </div>
                    )}

                    <div className='grid w-full grid-cols-[1fr_2fr] gap-2 p-1 sm:grid-cols-[1fr_3fr]'>
                      <p className='text-sm text-gray-500'>Type:</p>
                      <p className='text-sm text-gray-900'>{product.type}</p>
                    </div>

                    <div className='grid w-full grid-cols-[1fr_2fr] gap-2 p-1 sm:grid-cols-[1fr_3fr]'>
                      <p className='text-sm text-gray-500'>Max Quantity:</p>
                      <p className='text-sm text-gray-900'>
                        {product.maxQuantity}
                      </p>
                    </div>

                    <AddToOrderButton product={singleProductCartItem}>
                      <p className='m-2 h-6 w-6 font-medium text-white'>
                        <SelectIcon
                          iconSelection='plus'
                          iconClasses='h-6 w-6'
                        />
                      </p>
                    </AddToOrderButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default ProductDetailsModal
