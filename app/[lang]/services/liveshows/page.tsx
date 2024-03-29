import Image from 'next/image'

export default async function LiveshowsPage() {
  return (
    <section className='py-6'>
      <div className='container'>
        <h1 className='text-3xl mb-4 font-bold'>Live Show</h1>

        <div className='flex flex-col md:flex-row'>
          <div>
            <div className='mb-8'>
              <p className='text-gray-500'>
                Discover a world where professionalism meets artistry, and where
                each event transforms into an unforgettable experience for your
                guests. We invite you to explore the unique styles and
                specialties of our curated selection of artists and
                entertainers. For further inquiries or personalized
                recommendations, please don&apos;t hesitate to reach out to us via
                our contact page.
              </p>
            </div>

            <article className='mb-8'>
              <h1 className='mb-4 text-2xl font-bold text-gray-800'>
                Jan Himself
              </h1>
              <p className='mb-4'>
                Embark on a journey with Jan Himself, a confluence of unique
                character, innovative concept, and unparalleled performance
                artistry.
              </p>
              <p className='mb-8'>
                Step into the enthralling universe of Jan Himself and
                experience:
              </p>

              <ul className='mb-6 list-inside list-disc text-gray-600'>
                <li>
                  Diabolo Show - A mesmerizing spectacle of skill and precision
                </li>
                <li>
                  Magic Show - Where the impossible becomes possible right
                  before your eyes
                </li>
                <li>
                  LED Show - A dazzling display of light and movement,
                  harmoniously synchronized
                </li>
              </ul>

              <p className='mb-8'>
                Whether it&apos;s a corporate event, gala, or open-air show,{' '}
                <span className='text-md mt-2 inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text font-semibold text-transparent'>
                  Jan Himself
                </span>{' '}
                brings a touch of magic and memorable entertainment to every
                occasion.
              </p>

              <div className='mb-8 space-y-4 italic text-gray-500'>
                <p>“King of the Diabolos” - lauded by Tribune de Genève</p>
                <p>
                  “The best I ever saw” - Gordhon Heuckeroth, star of Holland&apos;s
                  Got Talent
                </p>
                <p>
                  “Unforgettable” - the legendary Dieter Bohlen of Super Talent
                  (DE)
                </p>
              </div>

              <p className='mb-8 italic text-gray-800'>
                Jan Himself: Crafting the extraordinary, beyond perfection.
              </p>

              <div className='mb-8 flex flex-col items-center space-y-4'>
                <a
                  href='http://www.upinthehair.ch/fre/video'
                  className='text-blue-500 underline hover:text-blue-700'
                >
                  Explore Videos
                </a>
                <a
                  href='https://www.janhimself.com'
                  className='text-blue-500 underline hover:text-blue-700'
                >
                  Discover More on the Official Website
                </a>
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
