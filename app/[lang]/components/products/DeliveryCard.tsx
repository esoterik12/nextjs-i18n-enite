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
    <div className='flex min-w-[295px] flex-col justify-between rounded-3xl shadow-md transition duration-300 ease-in-out hover:shadow-lg sm:p-6'>
      <div className='flex flex-col justify-between md:flex-row'>
        {/* Text Left Side */}
        <div className='flex-col sm:w-3/4'>
          <h2 className='m-4 text-[26px] font-bold capitalize'>
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
            <div className='max-h-6'>
              <AddToOrderButton product={deliveryReturnProduct}>
                <SelectIcon
                  iconSelection='plus'
                  iconClasses='max-h-6 w-6 m-2 text-white'
                />
              </AddToOrderButton>{' '}
            </div>
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
          <div className='m-6 flex'>
            <p className='mt-2 flex text-[14px]'>
              {product.productDescription}
            </p>
          </div>
        </div>

        {/* Image Right Side */}
        <div className='relative m-4 h-64 object-contain sm:h-96 sm:w-full'>
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
    </div>
  )
}

export default DeliveryCard
