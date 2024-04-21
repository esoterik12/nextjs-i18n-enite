import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

export default async function LiveshowsPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { services } = await getDictionary(lang)

  return (
    <section className='py-6'>
      <div className='container'>
        <h1 className='mb-4 text-3xl font-bold'>{services.liveShows.title}</h1>

        <div className='flex flex-col md:flex-row'>
          <div>
            <div className='mb-8'>
              <p className='text-gray-500'>{services.liveShows.description}</p>
            </div>

            <article className='mb-8'>
              <h1 className='mb-4 text-2xl font-bold text-gray-800'>
                {services.liveShows.heading}
              </h1>
              <p className='mb-4'>{services.liveShows.headingLineOne}</p>
              <p className='mb-8'>{services.liveShows.headingLineTwo}</p>

              <ul className='mb-6 list-inside list-disc text-gray-600'>
                {services.liveShows.showsOffered.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className='mb-8'>{services.liveShows.headingLineThree}</p>

              <div className='mb-8 space-y-4 italic text-gray-500'>
                {services.liveShows.janQuotes.map(item => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <p className='mb-8 italic text-gray-800'>
                {services.liveShows.closing}
              </p>

              <div className='mb-8 flex flex-col items-center space-y-4'>
                {services.liveShows.links.map(link => (
                  <a
                    href={link.link}
                    key={link.text}
                    className='text-blue-500 underline hover:text-blue-700'
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </article>
          </div>

          <div className='flex flex-col'>
            <Image
              src='/e-nite/Jan-HimSelf-1.jpg'
              alt='Photographer Image'
              width={800}
              height={800}
              className='rounded-full p-6'
            />
            <Image
              src='/e-nite/Jan-HimSelf-2.jpg'
              alt='Photographer Image'
              width={800}
              height={800}
              className='rounded-full p-6'
            />
            <Image
              src='/e-nite/Jan-HimSelf-3.jpg'
              alt='Photographer Image'
              width={800}
              height={800}
              className='rounded-full p-6'
            />
          </div>
        </div>
      </div>
    </section>
  )
}
