import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

export default async function AboutPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { about } = await getDictionary(lang)

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='mb-4 text-3xl font-bold'>{about.title}</h1>
      <p className='mb-6'>{about.description}</p>
      <h2 className='mb-4 text-xl font-bold'>{about.sectionOne}</h2>
      <p className='mb-6'>
      {about.sectionOneDescription}
      </p>
      <h2 className='mb-4 text-xl font-bold'>{about.sectionTwo}</h2>
      <p className='mb-6'>
      {about.sectionTwoDescription}
      </p>
      <p className='mb-6 italic'>
      {about.closing}
      </p>
      <p className='font-bold'>{about.signOff}</p>
    </div>
  )
}
