import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import IconTelephone from '../components/icons/IconTelephone'
import IconEmail from '../components/icons/IconEmail'
import IconAddress from '../components/icons/IconAddress'
import ContactForm from '../components/forms/ContactForm'
import Link from 'next/link'

// similar to home page, this page gets the page content with getDictionary function passing in the lang param

export default async function ContactPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { contact } = await getDictionary(lang)

  return (
    <section className='py-6'>
      <div className='container mb-6'>
        <h1 className='mb-4 text-3xl font-bold'>{contact.title}</h1>
        {/* <p className='text-gray-500'>{contact.description}</p> */}
      </div>

      <div className='container rounded-xl bg-white'>
        <div className='block flex-row items-center md:flex'>
          <div className='mb- mr-6 w-full space-y-4 p-2 md:w-1/2'>
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
                Route de la Croix-Blanche 17, 1066 Epalinges{' '}
                <Link
                  href='/'
                  className='block text-lg text-blue-500 md:hidden'
                >
                  ({contact.viewMap})
                </Link>
              </h1>
            </div>

            <div
              className='container rounded-xl  border-pink-500 bg-pink-50 p-8 text-pink-700'
              role='alert'
            >
              <p className='text-md text-center'>{contact.notice}</p>
            </div>
          </div>

          <iframe
            height='240'
            src='https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Route%20de%20la%20Croix-Blance%2017,%201066%20Epalinges+(E-Nite)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            title='Google Maps Location'
            sandbox='allow-scripts allow-same-origin allow-popups' // Sandbox permissions
            className='hidden rounded-xl md:block md:w-1/2'
          ></iframe>
        </div>
      </div>

      <div className='container mt-12'>
        <hr className='border-t border-gray-300' />
      </div>

      {/* Top Text Container */}
      <div className='container mt-6'>
        <h1 className='py-3 text-3xl font-semibold text-gray-600'>
          {contact.form.whatYouGetTitle}
        </h1>
        <ul className='text-md list-disc space-y-2 pl-8 text-gray-600'>
          <li>{contact.form.guaranteedResponse}</li>
          <li>{contact.form.freeConsultation}</li>
          <li>{contact.form.personalizedRecommendations}</li>
          <li>
            {contact.form.streamlineProcess}
          </li>
        </ul>

        
      </div>

      <div className=''>
        <ContactForm contactForm={contact.form}/>
      </div>
    </section>
  )
}
