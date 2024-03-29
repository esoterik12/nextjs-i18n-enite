import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import ProductCard from '../components/products/ProductCard'
import Link from 'next/link'

export default async function PacksPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { products } = await getDictionary(lang)

  return (
    <section className='py-6'>
      <div className='container '>
        <h1 className='text-3xl mb-4 font-bold '>{products.title}</h1>
        <p className='mt-1 text-gray-500 '>{products.subtitle}</p>

        <p className='mt-1 text-gray-500'>{products.allProductsDescription}</p>
        <p className='mt-1 text-sm text-red-400'>{products.description}</p>
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
      <div className='container mt-12 text-center'>
        <p className='mt-1 text-gray-500 '>{products.allProductsDescription}</p>
        <div className='mt-6'>
            <Link
              href='/products'
              className='rounded-xl bg-gray-900 p-3 text-white transition-colors duration-300 ease-in-out hover:bg-gray-600'
            >
              {products.allProductsLink}{' '}
            </Link>
          </div>
      </div>
    </section>
  )
}
