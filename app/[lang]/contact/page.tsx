import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

// similar to home page, this page gets the page content with getDictionary function passing in the lang param

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{page.contact.title}</h1>
        <p className='text-gray-500'>{page.contact.description}</p>
      </div>
    </section>
  )
}
