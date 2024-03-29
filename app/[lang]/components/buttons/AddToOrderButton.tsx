'use client'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '@/lib/redux/cart-slice'
import { IProductItem } from '@/lib/types'
import { useSelector } from 'react-redux'
import { RootStateType } from '@/lib/redux'
import CheckMark from '../icons/IconCheckMark'

const AddToOrderButton = ({
  product,
  children
}: {
  product: IProductItem
  children: React.ReactNode
}) => {
  const cart = useSelector((state: RootStateType) => state.cart)

  // Checks if the item is either in the cart currently or in one of the packs added to the cart
  const isInCart = useMemo(() => {
    const itemAdded = cart.items.some(item => item.id === product.productId)
    const includedInPack = cart.packItems.some(item => item === product.productId)
    return itemAdded || includedInPack
  }, [cart, product.productId])

  const dispatch = useDispatch()
  let productItem = {
    id: product.productId,
    title: product.productTitle,
    quantity: 1,
    price: product.productPrice,
    image: product.productImage,
    equipmentList: product.equipmentList
  }

  // This uses different functions to manage different context functions depending on whether
  // The item is a pack or a product. This is due to packs also having the equipmentList property
  // This can probably be refactored into a single function down the like in RTK
  function addProductOrPack() {
    if (product.equipmentList) {
      dispatch(cartActions.addPackToCart(productItem))
    } else {
      dispatch(cartActions.addItemToCart(productItem))
    }
  }

  return (
    <>
      <button
        disabled={isInCart}
        type='button'
        onClick={() => addProductOrPack()}
        className='rounded-xl bg-gray-900 transition-colors duration-300 ml-2 mr-2 ease-in-out hover:bg-gray-600 disabled:bg-green-500'
      >
        {isInCart && (
          <div className='font-medium text-white'>
            <CheckMark classes='h-6 w-6' />
          </div>
        )}

        {!isInCart && children}
      </button>
    </>
  )
}

export default AddToOrderButton
