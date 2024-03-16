'use client'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/lib/redux/cart-slice'
import { IProductItem } from '@/lib/types'
import { useSelector } from 'react-redux'
import { RootStateType } from '@/lib/redux'
import CheckMark from '../icons/CheckMark'

const AddToOrderButton = ({
  product,
  children
}: {
  product: IProductItem
  children: React.ReactNode
}) => {
  const cart = useSelector((state: RootStateType) => state.cart)

  const isInCart = useMemo(() => {
    return cart.items.some(item => item.id === product.productId)
  }, [cart, product.productId])

  console.log('isInCart: ', isInCart)

  const dispatch = useDispatch()
  const productItem = {
    id: product.productId,
    title: product.productTitle,
    quantity: 1,
    price: product.productPrice,
    image: product.productImage
  }

  return (
    <>
      <button
        disabled={isInCart}
        type='button'
        onClick={() => dispatch(cartActions.addItemToCart(productItem))}
        className='rounded-xl bg-gray-900 transition-colors duration-300 ease-in-out hover:bg-gray-600 disabled:bg-green-500'
      >
        {isInCart && (
          <div className='m-2 ml-4 mr-4 font-medium text-white'>
            <CheckMark classes='h-6 w-6' />
          </div>
        )}

        {!isInCart && children}
      </button>
    </>
  )
}

export default AddToOrderButton
