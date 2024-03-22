import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import ProductCard from '../components/products/ProductCard'

export default async function PacksPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { products } = await getDictionary(lang)

  return (
    <section className='py-6'>

      <div className='container'>
        <h1 className='text-3xl font-bold'>{products.title}</h1>
        <p className='text-gray-500'>{products.description}</p>
      </div>

      <div className='container grid w-full grid-cols-1 gap-8 px-6 pt-6 md:grid-cols-1 lg:grid-cols-2'>
        {products.data.map(item => (
          <ProductCard
            product={item}
            key={item.productId}
            addButtonText={products.addToOrderButton}
          />
        ))}
      </div>

      {/* ADD: All packs include required power and extension cables */}
    </section>
  )
}
