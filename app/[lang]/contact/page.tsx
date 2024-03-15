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
      <div className="flex items-center justify-center w-full">
        {/* Allow Link to Google map in config */}
        <iframe
          width="85%"
          height="250"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Route%20de%20la%20Croix-Blance%2017,%201066%20Epalinges+(E-Nite)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Maps Location"
          sandbox="allow-scripts allow-same-origin allow-popups" // Adjust the sandbox permissions as necessary.
        ></iframe>
      </div>
    </section>
  )
}
