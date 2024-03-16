import Image from 'next/image'
import AddToOrderButton from '../buttons/AddToOrderButton'
import { ISingleProductItem } from '@/lib/types'

interface IProductCardTypes {
  product: ISingleProductItem
  addButtonText: string
}

const SingleProductCard = ({ product, addButtonText }: IProductCardTypes) => {
  // Created to match types of <AddToOrderButton> component
  const singleProductCartItem = {
    productId: product.id,
    productTitle: product.title,
    productPrice: product.price,
    productDescription: product.description,
    productImage: product.image
  }

  return (
    <div className='flex min-w-[295px] flex-col justify-between rounded-3xl p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg'>
      <div className='flex w-full justify-between'>
        <h2 className='text-[20px] font-bold capitalize leading-[28px]'>
          {product.title}
        </h2>
        <p className='flex text-[24px] font-extrabold'>
          <span className='self-start text-[12px] font-semibold'>CHF</span>
          {product.price}
          <span className='mt-4 self-start text-[12px] font-medium'>/day</span>
        </p>
      </div>
      <div className='relative mb-6 mt-2 block h-60 w-full object-contain'>
        <Image
          src={product.image}
          alt={product.title}
          priority
          fill
          className='object-contain'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div className='relative mt-2 flex w-full'>
        <p className='mt-6 flex text-[14px]'>{product.description}</p>
      </div>
      <div className='mt-4 flex items-center justify-center'>
        <AddToOrderButton product={singleProductCartItem}>
          <p className='m-2 ml-4 mr-4 font-medium text-white'>
            {addButtonText}
          </p>
        </AddToOrderButton>
      </div>
    </div>
  )
}

export default SingleProductCard
