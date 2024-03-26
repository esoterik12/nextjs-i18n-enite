'use client'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '@/lib/redux/cart-slice'
import SelectIcon from '../icons/SelectIcon'
import { RootStateType } from '@/lib/redux'

const CartButton = () => {
  const cart = useSelector((state: RootStateType) => state.cart)
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(cartActions.openCart())
  }

  return (
    <button
      type='button'
      onClick={openCart}
      className='duration-450 flex h-9 w-9 items-center justify-center rounded-full transition-colors ease-in-out hover:bg-gray-200'
    >
      <SelectIcon iconSelection='cart' iconClasses='mt-1 h-6 w-6' />
    </button>
  )
}

export default CartButton
