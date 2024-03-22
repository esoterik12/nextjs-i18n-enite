import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import Image from 'next/image'
import IconDelivery from '../components/icons/IconDelivery'
import IconMusic from '../components/icons/IconMusic'
import Link from 'next/link'
import IconShow from '../components/icons/IconShow'
import IconStars from '../components/icons/IconStars'

export default async function ServicesPage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { conditions } = await getDictionary(lang)

  return (
    // This is currently all hardcoded, but could potentially be mapped
    // Since all info should be the same
    // Or create a custom container
    <section className='py-6'>
      <div className='container justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>Our Services</h1>
          <p className='text-gray-500'>View all the professional services provided by e-nite to take your event to the next level.</p>
        </div>
        
        <div className='flex flex-row p-6'>
          <Image
            src='/e-nite/Pack-2-Sound.jpg'
            alt='Delivery Image'
            width={200}
            height={200}
            priority
            className='hidden md:flex'
          />
          <div className='ml-4 flex min-w-[295px] flex-col p-4'>
            <div className='flex flex-row'>
              <IconDelivery classes='w-6 mb-2 mr-2' />
              <h2 className='mb-2  text-2xl font-semibold'>
                Delivery and Installation
              </h2>
            </div>
            <p className='text-gray-500'>
              If you don&apos;t have time to come pick up the equipment or have time
              to set it up yourself, we would be glad to do it for you.
            </p>
            <div className='mt-2 '>
              <Link href='/services/delivery'>
                <p className='text-md mt-2 inline-block bg-gradient-to-r from-red-700 via-red-600 to-red-500 bg-clip-text font-normal text-transparent transition duration-300 ease-in-out hover:scale-105 hover:font-semibold'>
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-row p-6'>
          <Image
            src='/e-nite/DJ-Funky-Chap.jpg'
            alt='DJ Image'
            width={200}
            height={200}
            priority
            className='hidden rounded-full md:flex '
          />
          <div className='ml-4 flex min-w-[295px] flex-col p-4'>
            <div className='flex flex-row'>
              <IconMusic classes='w-6 mb-2 mr-2 ' />
              <h2 className='mb-2  text-2xl font-semibold'>Professional DJs</h2>
            </div>
            <p className='text-gray-500'>
              Choose from one of our partnered Animator or DJ to get your party
              started!
            </p>
            <div className='mt-2 '>
              <Link href='/services/djs'>
                <p className='text-md mt-2 inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text font-normal text-transparent transition duration-300 ease-in-out hover:scale-105 hover:font-semibold'>
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-row p-6'>
          <Image
            src='/e-nite/Jan-HimSelf-1.jpg'
            alt='Liveshow Image'
            width={200}
            height={200}
            priority
            className='hidden rounded-full md:flex'
          />
          <div className='ml-4 flex min-w-[295px] flex-col p-4'>
            <div className='flex flex-row'>
              <IconShow classes='w-6 mb-2 mr-2' />
              <h2 className='mb-2  text-2xl font-semibold'>Live Shows</h2>
            </div>
            <p className='text-gray-500'>
              Choose from one of our partnered artists and showmen to make your
              event something people will remember!
            </p>
            <div className='mt-2 '>
              <Link href='/services/liveshows'>
                <p className='text-md mt-2 inline-block bg-gradient-to-r from-red-700 via-red-600 to-red-500 bg-clip-text font-normal text-transparent transition duration-300 ease-in-out hover:scale-105 hover:font-semibold'>
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-row p-6'>
          <Image
            src='/e-nite/e-nite-photographer-transformed.jpeg'
            alt='Photographer Image'
            width={200}
            height={200}
            priority
            className='hidden rounded-full md:flex '
          />
          <div className='ml-4 flex min-w-[295px] flex-col p-4'>
            <div className='flex flex-row'>
              <IconMusic classes='w-6 mb-2 mr-2 ' />
              <h2 className='mb-2  text-2xl font-semibold'>Photographers</h2>
            </div>
            <p className='text-gray-500'>
              Need a photographer to immortalize your event? Discover our
              qualified photographer that will take care of all your photo and
              paper needs.
            </p>
            <div className='mt-2 '>
              <Link href='/services/photographer'>
                <p className='text-md mt-2 inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text font-normal text-transparent transition duration-300 ease-in-out hover:scale-105 hover:font-semibold'>
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-row p-6'>
          <Image
            src='/e-nite/party-bracelets.jpg'
            alt='Photographer Image'
            width={200}
            height={200}
            priority
            className='hidden rounded-full md:flex '
          />
          <div className='ml-4 flex min-w-[295px] flex-col p-4'>
            <div className='flex flex-row'>
              <IconStars classes='w-6 mb-2 mr-2 ' />
              <h2 className='mb-2  text-2xl font-semibold'>Party Bracelets</h2>
            </div>
            <p className='text-gray-500'>
              Discover our new 100% customizable silicone wristbands, the
              perfect touch to make your event unique!
            </p>
            <div className='mt-2 '>
              <Link href='/services/bracelets'>
                <p className='text-md mt-2 inline-block bg-gradient-to-r from-red-700 via-red-600 to-red-500 bg-clip-text font-normal text-transparent transition duration-300 ease-in-out hover:scale-105 hover:font-semibold'>
                  Learn More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
