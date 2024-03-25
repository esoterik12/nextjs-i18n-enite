import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import ServicesContainer from '../components/containers/ServicesContainer'
import SelectIcon from '../components/icons/SelectIcon'

export default async function ServicesPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { services } = await getDictionary(lang)

  return (
    <section className='p-6'>
      <div className='container justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>{services.title}</h1>
          <p className='text-gray-500'>{services.description}</p>
        </div>

        {services.servicesList.map(item => (
          <ServicesContainer
            image={item.image}
            title={item.serviceTitle}
            description={item.serviceDescription}
            link={item.pageLink}
            linkColor={item.linkColor}
            buttonText={item.linkText}
          >
            <SelectIcon iconSelection={item.icon} iconClasses='w-6 mb-2 mr-2' />
          </ServicesContainer>
        ))}
      </div>
    </section>
  )
}
