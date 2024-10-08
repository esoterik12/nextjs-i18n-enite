'use client'
import Image from 'next/image'
import { Fragment } from 'react'
import { formatCurrency } from '@/lib/utils/currency'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '@/lib/redux/cart-slice'
import { RootStateType } from '@/lib/redux'
import { ICartItem } from '@/lib/types'
import Link from 'next/link'

const ShoppingCart = () => {
  const cart = useSelector((state: RootStateType) => state.cart)
  const dispatch = useDispatch()

  const handleCheckout = async () => {
    dispatch(cartActions.closeCart())
    return
  }

  const closeCart = () => {
    dispatch(cartActions.closeCart())
  }

  const totalAmount = cart.items
    .reduce((total, item) => total + item.totalPrice, 0)
    .toFixed(2)

  const removeItemHandler = (id: number) => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  return (
    <Transition.Root show={cart.cartOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-stone-900 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>
                          Current order
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                            onClick={() => closeCart()}
                          >
                            <span className='sr-only'>Close panel</span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='h-6 w-6'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className='mt-8'>
                        <div className='flow-root'>
                          <ul
                            role='list'
                            className='-my-6 divide-y divide-gray-200'
                          >
                            {cart?.items &&
                              cart.items.length > 0 &&
                              cart.items.map((item: ICartItem) => (
                                <li key={item.id} className='flex py-6'>
                                  <div className='relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                    <Image
                                      src={item.image}
                                      alt={item.title}
                                      className='h-full w-full object-cover object-center'
                                      layout='fill'
                                    />
                                  </div>

                                  <div className='ml-4 flex flex-1 flex-col'>
                                    <div>
                                      <div className='flex justify-between text-base font-medium text-gray-600'>
                                        <p className='font-light'>
                                          <a href={`/products/${item.id}`}>
                                            {item.title}
                                          </a>
                                        </p>
                                        <p className='ml-4 text-black'>
                                          {formatCurrency({
                                            amount: item.price
                                          })}
                                        </p>
                                      </div>
                                    </div>

                                    <div className='mt-10 flex items-end justify-end text-sm'>
                                      <div className='flex'>
                                        <button
                                          type='button'
                                          onClick={() =>
                                            removeItemHandler(item.id)
                                          }
                                          className='text-pink-600 transition-colors duration-300 ease-in-out hover:text-pink-300 disabled:text-gray-500'
                                        >
                                          {/* Minus symbol */}
                                          <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth={1.5}
                                            stroke='currentColor'
                                            className='h-7 w-7'
                                          >
                                            <path
                                              strokeLinecap='round'
                                              strokeLinejoin='round'
                                              d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <p>Total</p>
                        <p>{totalAmount}</p>
                      </div>

                      <div className='mb-6 mt-4 flex'>
                        <button
                          type='button'
                          className='font-medium text-pink-600 transition-colors duration-300 ease-in-out hover:text-pink-300 disabled:text-gray-500'
                          onClick={() => dispatch(cartActions.clearCart())}
                        >
                          Clear Cart
                        </button>
                      </div>

                      <button
                        onClick={handleCheckout}
                        className='flex h-12 w-full items-center justify-center rounded-md border border-transparent bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-75'
                      >
                        <Link href='/contact'>Complete Request</Link>
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ShoppingCart
