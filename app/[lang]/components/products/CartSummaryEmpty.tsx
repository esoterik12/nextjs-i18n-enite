'use client'
import Link from 'next/link'
import { ICartSummaryEmpty } from '@/lib/types'

const CartSummaryEmpty = ({ cartSummaryText }: { cartSummaryText: ICartSummaryEmpty }) => {
  return (
    <div className='ml-4 mt-1 rounded-xl text-center shadow-md'>
      <p className='mb-1 font-medium text-gray-500'>{cartSummaryText.title}</p>
      <div className='flow-root h-[500px] overflow-y-auto'>
        <p className='mt-4 text-xl text-red-400'>{cartSummaryText.emptyText}</p>
        <p className='text-sm text-gray-500'>
          {cartSummaryText.actionOne}
        </p>
        <p className='text-sm text-gray-500'>
          {cartSummaryText.actionTwo}
        </p>
        <div className='mt-6 flex h-10 flex-row justify-center gap-2'>
          <div className='w-24 rounded-xl  bg-gray-900 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-gray-600'>
            <Link href='/packs' className=''>
              {cartSummaryText.packsLink}
            </Link>
          </div>
          <div className='w-24 rounded-xl bg-gray-900 p-2 text-white transition-colors duration-300 ease-in-out hover:bg-gray-600'>
            <Link href='/products' className=''>
              {cartSummaryText.productsLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSummaryEmpty
