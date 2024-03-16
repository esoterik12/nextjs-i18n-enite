import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import ProductCard from '../components/products/ProductCard'

// similar to home page, this page gets the page content with getDictionary function passing in the lang param

export default async function PacksPage({
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

      <div className='container grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 w-full gap-8 pt-6 px-6'>
        {products.data.map((item) => (
          <ProductCard product={item} key={item.productId} addButtonText={products.addToOrderButton} />
        ))}
        {/* <Image 
          src='/e-nite/Briteq.jpg'
          alt="image"
          width={400}
          height={400}
          priority
          style={{ width: '30%', height: 'auto' }}
        /> */}
      </div>

      {/* ADD: All packs include required power and extension cables */}
    </section>
  )
}
