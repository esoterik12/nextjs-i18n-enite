import Image from "next/image"
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

export default async function PhotographerPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) { 

  const { services } = await getDictionary(lang)

  return (
    <section className='py-6'>
      <div className='container'>
        <h1 className='text-3xl mb-4 font-bold'>{services.photographers.title}</h1>

        <div className='flex flex-col md:flex-row'>
          <div className="md:w-2/3">
            <div className='mb-8'>
              <p className='text-gray-500'>
              {services.photographers.description}
              </p>
            </div>

            <div className='mb-8'>
              <h2 className='m-4 text-2xl font-semibold'>{services.photographers.servicesOfferedTitle}</h2>
              <ul className='list-inside list-disc'>
                {services.photographers.servicesOffered.map((item) => (
                  <li key={item} className='text-gray-500'>{item}</li>
                ))}

              </ul>
            </div>

            <div className='mb-8'>
              <h2 className='m-4 text-2xl font-semibold'>
              {services.photographers.postShootingServicesTitle}
              </h2>
              <p className='text-gray-500'>
              {services.photographers.postShootingServicesDescription}
              </p>
            </div>

            <div className='mb-8'>
              <p className='text-red-400'>
              {services.photographers.priceQuoteDescription}
              </p>
            </div>
          </div>

          <div className="md:w-1/3">
            <Image 
              src="/e-nite/e-nite-photographer-transformed.jpeg"
              alt="Photographer Image"
              width={1000}
              height={1000}
              className="rounded-full p-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
