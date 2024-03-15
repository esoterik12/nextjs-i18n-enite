import { Locale } from '@/i18n.config' // type import
import { getDictionary } from '@/lib/utils/dictionary'
import AnimatedBanner from './components/layout/AnimatedBanner'

// getting lang params
export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale } // typed
}) {
  const { page } = await getDictionary(lang) // get the right language page content with a function using lang as input - in lib/dictionary.ts

  return (
    <section className=''>
      {/* DISABLE FOR MOBILE */}
      <div className='hidden md:flex'>
        <AnimatedBanner>
          <h1 className='mb-2 text-4xl font-bold text-white shadow-lg'>
            {page.home.title}
          </h1>
          <p className='text-2xl text-gray-200 shadow-lg'>
            {page.home.subTitle}
          </p>
          <p className='text-LG text-gray-100 shadow-lg'>
            {page.home.description}
          </p>
        </AnimatedBanner>
      </div>
      {/* ENABLE FOR MOBILE */}
      <div className='container flex flex-col text-center md:hidden'>
        <h1 className='mb-2 text-4xl font-bold'>{page.home.title}</h1>
        <p className='text-2xl text-gray-700'>{page.home.subTitle}</p>
        <p className='text-gray-500'>{page.home.description}</p>
      </div>
    </section>
  )
}
