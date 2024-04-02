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

const CartSummaryEmpty = () => {
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
    <div className='ml-4 mt-1 rounded-xl text-center shadow-md'>
      <p className='mb-1 font-medium text-gray-500'>Cart Summary</p>
      <div className='flow-root h-[500px] overflow-y-auto'>
        <p className='mt-4 text-xl text-red-400'>Your cart is empty.</p>
        <p className='text-gray-500 text-sm'>
          Add a pack or products from the links below,
        </p>
        <p className='text-gray-500 text-sm'>
          or provide your specific requirements in the notes section.
        </p>
        <div className='mt-6 flex h-10 flex-row justify-center gap-2'>
          <div className='w-24 rounded-xl  bg-gray-900 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-gray-600'>
            <Link href='/packs' className=''>
              Packs
            </Link>
          </div>
          <div className='w-24 rounded-xl bg-gray-900 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-gray-600'>
            <Link href='/products' className=''>
              Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSummaryEmpty
