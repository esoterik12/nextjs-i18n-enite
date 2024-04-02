'use client'
import Image from 'next/image'
import { Fragment } from 'react'
import { formatCurrency } from '@/lib/utils/currency'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '@/lib/redux/cart-slice'
import { RootStateType } from '@/lib/redux'
import { ICartItem } from '@/lib/types'

const CartSummary = () => {
  const cart = useSelector((state: RootStateType) => state.cart)
  const dispatch = useDispatch()

  const handleCheckout = async () => {
    // Add functionality here
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
    <div className='mt-1 ml-4 shadow-md rounded-lg'>
      <p className='text-gray-500 font-medium mb-1 text-center'>Cart Summary</p>
      <div className='flow-root h-[530px] overflow-y-auto m-4'>
        <ul role='list' className='-my-6 divide-y divide-gray-200 m-6'>
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
                        <a href={`/products/${item.id}`}>{item.title}</a>
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
                        onClick={() => removeItemHandler(item.id)}
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
  )
}

export default CartSummary
