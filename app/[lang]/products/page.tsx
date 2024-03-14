import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import Image from 'next/image'
import ProductCard from '../components/products/ProductCard'

// similar to home page, this page gets the page content with getDictionary function passing in the lang param

// !!!!!!!!!!
// INCORRECT DO NOT USE
// USE PACKS PAGE FOR CURRENT EDITING
// !!!!!!!!

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { products } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{products.title}</h1>
        <p className='text-gray-500'>{products.description}</p>
      </div>

      <div className='container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-6 px-6'>
        {products.data.map((item) => (
          <ProductCard key={item.productId} addButtonText={products.addToOrderButton} product={item} />
        ))}
      </div>
    </section>
  )
}
