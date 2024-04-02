import DjsContainer from '../../components/containers/DjsContainer'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

export default async function DjsPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { services } = await getDictionary(lang)

  return (
    <section className='py-6'>
      <div className='container'>
        <h1 className='mb-4 text-3xl font-bold'>{services.djsPage.title}</h1>

        <div className='flex flex-col md:flex-row'>
          <div>
            <div className='mb-8'>
              <p className='text-gray-500'>{services.djsPage.description}</p>
              <p className='text-gray-500'>{services.djsPage.contactText}</p>
              <div className='m-6 text-center'>
                <p className='text-red-500'>{services.djsPage.contactLink}</p>
              </div>
            </div>
          </div>
        </div>

        {services.djs.map(item => (
          <DjsContainer
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
            priceButtonText={item.priceText}
            links={item.links}
          >
            <></>
          </DjsContainer>
        ))}
      </div>
    </section>
  )
}
