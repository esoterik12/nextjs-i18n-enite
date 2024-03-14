import { Locale } from '@/i18n.config' // type import
import { getDictionary } from '@/lib/utils/dictionary'

// getting lang params
export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale } // typed
}) {
  const { page } = await getDictionary(lang) // get the right language page content with a function using lang as input - in lib/dictionary.ts

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-2 text-4xl font-bold'>{page.home.title}</h1>
        <p className='text-2xl text-gray-700'>{page.home.subTitle}</p>
        <p className='text-gray-500'>{page.home.description}</p>
      </div>
    </section>
  )
}
