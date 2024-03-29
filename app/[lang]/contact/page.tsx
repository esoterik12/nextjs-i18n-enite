import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import IconTelephone from '../components/icons/IconTelephone'
import IconEmail from '../components/icons/IconEmail'
import IconAddress from '../components/icons/IconAddress'

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
        <h1 className='text-3xl mb-4 font-bold'>{page.contact.title}</h1>
        <p className='text-gray-500'>{page.contact.description}</p>
      </div>

      <div className='container rounded-xl bg-white p-8 shadow-lg'>
        <div className='space-y-4'>
          <div className='flex items-center'>
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
              Route de la Croi-Blanche 12, 1066 Epalinges
            </h1>
          </div>
          <iframe
            width='100%'
            height='250'
            src='https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Route%20de%20la%20Croix-Blance%2017,%201066%20Epalinges+(E-Nite)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            title='Google Maps Location'
            sandbox='allow-scripts allow-same-origin allow-popups' // Adjust the sandbox permissions as necessary.
            className='rounded-xl border'
          ></iframe>
        </div>
      </div>
      <div className='container flex w-full  items-center justify-center rounded-xl bg-white shadow-lg'>
        {/* Allow Link to Google map in config */}
      </div>
      <div
        className='container mt-6 max-w-4xl rounded-xl border border-l-4 border-pink-500 bg-pink-50 p-4 text-pink-700'
        role='alert'
      >
        <p className='text-center text-2xl font-bold'>Notice</p>
        <p className='text-center text-lg'>
          Please do not present yourself without a meeting, please contact us
          first. Thank you!
        </p>
      </div>
    </section>
  )
}
