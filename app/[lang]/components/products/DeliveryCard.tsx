import Image from 'next/image'
import AddToOrderButton from '../buttons/AddToOrderButton'
import { IDeliveryCardItem } from '@/lib/types'

interface IDeliveryCardTypes {
  product: IDeliveryCardItem
  addButtonText: string
}

const DeliveryCard = ({ product, addButtonText }: IDeliveryCardTypes) => {
  const deliveryReturnProduct = {
    productId: product.productId,
    productTitle: product.productTitle,
    productPrice: product.servicePrice + product.returnPrice,
    productDescription: product.productDescription,
    productImage: product.productImage
  }

  const deliveryServiceProduct = {
    productId: product.productId,
    productTitle: product.productTitle,
    productPrice: product.servicePrice,
    productDescription: product.productDescription,
    productImage: product.productImage
  }

  return (
    <div className='flex min-w-[295px] flex-col justify-between rounded-3xl p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg'>
      <div className='flex flex-row justify-between'>
        <div className='flex-col w-3/4'>
          <h2 className='text-[26px] font-bold capitalize'>
            {product.productTitle}
          </h2>
          <p className='text-[24px] font-extrabold'>
            <span className='self-start text-[12px] font-semibold'>CHF</span>{' '}
            {product.servicePrice}{' '}
            <span className='mt-4 self-start text-[12px] font-medium'>
              /day
            </span>
          </p>
          <p className='text-[24px] font-extrabold'>
            <span className='self-start text-[12px] font-semibold'>CHF</span>{' '}
            {product.returnPrice}{' '}
            <span className='mt-4 self-start text-[12px] font-medium'>
              /day
            </span>
          </p>
        </div>
        <div className='relative mb-6 mt-2 block h-96 w-full object-contain'>
          <Image
            src={product.productImage}
            alt={product.productTitle}
            priority
            fill
            className='object-contain'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>

      <div className='relative mt-2 flex w-full'>
        <p className='mt-6 flex text-[14px]'>{product.productDescription}</p>
      </div>
      <div className='mt-4 flex items-center justify-center'>
        <AddToOrderButton product={deliveryReturnProduct}>
          <p className='m-2 ml-4 mr-4 font-medium text-white'>
            {addButtonText}
          </p>
        </AddToOrderButton>
      </div>
    </div>
  )
}

export default DeliveryCard
