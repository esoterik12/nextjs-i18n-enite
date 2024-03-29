import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import BraceletCarousel from '../../components/page-content/BraceletCarousel'

const slides = [
  '/e-nite/bracelet-en-relief-imprime-2.jpg',
  '/e-nite/bracelet-en-relief-imprime.jpg',
  '/e-nite/bracelet-grave-rempli.jpg',
  '/e-nite/bracelet-grave.jpg',
  '/e-nite/bracelet-marbre2.jpg',
]

const slidesTwo = [
  '/e-nite/bracelet-phosphorescent.jpg',
  '/e-nite/bracelet-plaquettes.jpg',
  '/e-nite/bracelet-grave-rempli.jpg',
  '/e-nite/bracelet-segmente.jpg',
  '/e-nite/bracelet-one-inch.jpg',
]

export default async function BraceletsPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { services } = await getDictionary(lang)

  return (
    <section className='py-6'>
      <div className='container'>
        <h1 className='mb-4 text-3xl font-bold'>
          {services.photographers.title}
        </h1>

        <div className='flex flex-col md:flex-row'>
          <div className='md:w-2/3'>
            <div className='mb-8'>
              <p className='text-gray-500'>
                {services.photographers.description}
              </p>
            </div>

            <div className='mb-8'>
              <h2 className='m-4 text-2xl font-semibold'>
                {services.photographers.servicesOfferedTitle}
              </h2>
              <ul className='list-inside list-disc'>
                {services.photographers.servicesOffered.map(item => (
                  <li className='text-gray-500'>{item}</li>
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

          <div className='md:w-1/3'>
            <BraceletCarousel images={slides}/>
            <BraceletCarousel images={slidesTwo}/>
          </div>
        </div>
      </div>
    </section>
  )
}
