'use client'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/lib/redux/cart-slice'
import { IProductItem } from '@/lib/types'

const AddToOrderButton = ({ product, children }: { product: IProductItem, children: React.ReactNode }) => {
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
        type='button'
        onClick={() => dispatch(cartActions.addItemToCart(productItem))}
        className='rounded-xl bg-gray-900  hover:bg-gray-600 transition-colors duration-300 ease-in-out'
      >
        <p className='m-2 ml-4 mr-4 text-white font-medium'>{children}</p>
      </button>
    </>
  )
}

export default AddToOrderButton
