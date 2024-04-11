import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import DeliveryCard from '../../components/products/DeliveryCard'

export default async function DeliveryPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { services } = await getDictionary(lang)

  return (
    <section className='py-6 px-6'>
      <div className='container'>
        <h1 className='text-3xl mb-4 font-bold'>{services.delivery.title}</h1>
        <p className='mb-2 text-gray-500'>{services.delivery.subtitle}</p>
        <p className='text-gray-500'>{services.delivery.description}</p>
      </div>

      <div className='container grid w-full grid-cols-1 gap-4 mt-2 sm:px-6 sm:pt-6'>
        {services.delivery.deliveryData.map(item => (
          <DeliveryCard
            product={item}
            key={item.productId}
            addButtonText={services.delivery.addToOrderButton}
            deliveryOnlyText={services.delivery.deliveryOnly}
            additonalReturnText={services.delivery.additionalReturn}
          />
        ))}
      </div>
    </section>
  )
}
