import Image from 'next/image'
import AddToOrderButton from '../buttons/AddToOrderButton'
import { IDeliveryCardItem } from '@/lib/types'
import SelectIcon from '../icons/SelectIcon'

interface IDeliveryCardTypes {
  product: IDeliveryCardItem
  addButtonText: string
  deliveryOnlyText: string
  additonalReturnText: string
}

const DeliveryCard = ({
  product,
  addButtonText,
  deliveryOnlyText,
  additonalReturnText
}: IDeliveryCardTypes) => {
  const deliveryReturnProduct = {
    productId: product.returnId,
    productTitle: product.productTitle,
    productPrice: product.servicePrice + product.returnPrice,
    productDescription: product.productDescription,
    productImage: product.productImage
  }

  const deliveryOnlyProduct = {
    productId: product.productId,
    productTitle: product.productTitle,
    productPrice: product.servicePrice,
    productDescription: product.productDescription,
    productImage: product.productImage
  }

  return (
    <div className='flex min-w-[295px] flex-col justify-between rounded-3xl p-6 shadow-md transition duration-300 ease-in-out hover:shadow-lg'>
      <div className='flex flex-col justify-between md:flex-row'>
        {/* Text Left Side */}
        <div className='mt-6 w-3/4 flex-col'>
          <h2 className='text-[26px] font-bold capitalize'>
            {product.productTitle}
          </h2>
          {/* Delivery Only Section */}{' '}
          <div className='m-3 flex flex-row '>
            {' '}
            <AddToOrderButton product={deliveryOnlyProduct}>
              <SelectIcon
                iconSelection='plus'
                iconClasses='h-6 m-2 text-white'
              />
            </AddToOrderButton>
            <p className='ml-3 text-[16px] font-semibold'>
              {deliveryOnlyText}{' '}
              <span className='self-start text-[12px] font-semibold text-gray-400'>
                CHF
              </span>{' '}
              <span className='text-[26px] font-bold'>
                {product.servicePrice}
              </span>{' '}
            </p>
          </div>
          {/* Additional Return Section */}
          <div className='m-3 flex flex-row '>
            <AddToOrderButton product={deliveryReturnProduct}>
              <SelectIcon
                iconSelection='plus'
                iconClasses='h-6 m-2 text-white'
              />
            </AddToOrderButton>
            <p className=' ml-3 text-[16px] font-semibold'>
              {additonalReturnText}{' '}
              <span className='self-start text-[12px] font-semibold text-gray-400'>
                CHF
              </span>{' '}
              <span className='text-[26px] font-bold'>
                +{product.returnPrice}
              </span>{' '}
            </p>
          </div>
          <div className='relative ml-6 flex w-full'>
            <p className='mt-4 flex text-[14px]'>
              {product.productDescription}
            </p>
          </div>
        </div>

        {/* Image Right Side */}
        <div className='relative block h-96 w-full object-contain'>
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

      {/* <div className='mt-4 flex items-center justify-center md:mt-0'>
        <AddToOrderButton product={deliveryOnlyProduct}>
          <SelectIcon iconSelection='plus' iconClasses='h-6 m-2 text-white' />
        </AddToOrderButton>
        <AddToOrderButton product={deliveryReturnProduct}>
          <p className='m-2 ml-4 mr-4 font-medium text-white'>
            {addButtonText}
          </p>
        </AddToOrderButton>
      </div> */}
    </div>
  )
}

export default DeliveryCard
