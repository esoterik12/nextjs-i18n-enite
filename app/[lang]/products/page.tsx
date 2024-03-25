import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import SingleProductCard from '../components/products/SingleProductCard'
import CheckMark from '../components/icons/IconCheckMark'

export default async function AllProductsPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { allProducts } = await getDictionary(lang)

  return (
    <section className='py-6'>
      <div className='container lg:flex justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>{allProducts.title}</h1>
          <p className='text-gray-500'>{allProducts.description}</p>
        </div>

        {/* Product included div */}
        <div className='flex w-60 flex-row  border-1 p-1 mt-6 lg:mt-0'>
          <div className='mr-3 mt-4'>
            <CheckMark classes='h-8 w-8 text-green-500' />
          </div>
          <p className='text-sm text-gray-500 lg:text-center'>{allProducts.includedText}</p>
        </div>
      </div>

      <div className='container grid w-full grid-cols-1 gap-8 px-6 pt-6 md:grid-cols-2 lg:grid-cols-3'>
        {allProducts.productsList.map(item => (
          <SingleProductCard
            key={item.id}
            addButtonText={allProducts.addToOrderButton}
            product={item}
          />
        ))}
      </div>
    </section>
  )
}
