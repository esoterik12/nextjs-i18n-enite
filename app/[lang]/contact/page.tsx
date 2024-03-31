import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import IconTelephone from '../components/icons/IconTelephone'
import IconEmail from '../components/icons/IconEmail'
import IconAddress from '../components/icons/IconAddress'
import ContactForm from '../components/forms/ContactForm'

// similar to home page, this page gets the page content with getDictionary function passing in the lang param

export default async function ContactPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className='py-6'>
      <div className='container'>
        <h1 className='mb-4 text-3xl font-bold'>{page.contact.title}</h1>
      </div>

      <div className='container rounded-xl bg-white'>
        <div className='block md:flex flex-row items-center'>
          <div className='space-y-4 mr-6 w-full md:w-1/2 p-2 mb-4' >
            <div className='flex items-center '>
              <IconTelephone classes='text-blue-500 h-6 w-6 mr-4' />
              <h1 className='text-xl'>+41 79 754 24 38</h1>
            </div>
            <div className='flex items-center'>
              <IconAddress classes='text-blue-500 h-6 w-6 mr-4' />
              <h1 className='text-xl'>contact@e-nite.com</h1>
            </div>
            <div className='flex items-center'>
              <IconEmail classes='text-blue-500 h-6 w-6 mr-4' />
              <h1 className='text-xl'>
                Route de la Croix-Blanche 17, 1066 Epalinges
              </h1>
            </div>
          </div>
          <iframe
            height='180'
            src='https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Route%20de%20la%20Croix-Blance%2017,%201066%20Epalinges+(E-Nite)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            title='Google Maps Location'
            sandbox='allow-scripts allow-same-origin allow-popups' // Adjust the sandbox permissions as necessary.
            className='rounded-xl w-full md:w-1/2'
          ></iframe>
        </div>
      </div>
      <div className='container flex w-full  items-center justify-center rounded-xl bg-white shadow-lg'>
        {/* Allow Link to Google map in config */}
      </div>

      <div className='container'>
        <ContactForm title={page.contact.title} />
      </div>
    </section>
  )
}
