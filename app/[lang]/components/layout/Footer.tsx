import Link from 'next/link'
import IconFacebook from '../icons/social-icons/IconFacebook'
import IconInstagram from '../icons/social-icons/IconInstagram'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import SelectIcon from '../icons/SelectIcon'

const items = [
  {
    id: 1,
    name: 'Facebook',
    icon: IconFacebook,
    link: 'https://www.facebook.com/'
  },
  {
    id: 2,
    name: 'Instagram',
    icon: IconInstagram,
    link: 'https://www.instagram.com/'
  }
]

export default async function Footer({ lang }: { lang: Locale }) {
  const { footer } = await getDictionary(lang)

  return (
    <div className='py-y container mt-6 w-full  text-gray-400'>
      <div className='mx-auto flex grid-cols-2 flex-col justify-between border-b-2 border-gray-600 py-8 sm:flex-row md:grid-cols-6'>
        <div className='flex flex-row gap-4'>
          <div>
            {/* Products Footer Section */}
            <p className='pt-2 text-sm font-semibold uppercase text-gray-300'>
              {footer.productsHeader}
            </p>
            <ul>
              <Link href='/packs'>
                <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                  {footer.productsLinks.partyPacksLink}
                </li>
              </Link>
              <Link href='/products'>
                <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                  {footer.productsLinks.productsLink}
                </li>
              </Link>
              <Link href='/guides'>
                <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                  {footer.productsLinks.guidesLink}
                </li>
              </Link>
            </ul>
          </div>

          {/* Services Footer Section */}
          <div>
            <p className='pt-2 text-sm font-semibold uppercase text-gray-300'>
              {footer.servicesHeader}
            </p>
            <ul>
              <Link href='/services'>
                <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                  {footer.servicesLinks.deliveryLink}
                </li>{' '}
              </Link>
              <Link href='/services'>
                <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                  {footer.servicesLinks.djsLink}
                </li>{' '}
              </Link>
              <Link href='/services'>
                <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                  {footer.servicesLinks.photographers}
                </li>{' '}
              </Link>
            </ul>
          </div>

          {/* Company Footer Section */}
          <div>
            <p className='pt-2 text-sm font-semibold uppercase text-gray-300'>
              {footer.companyHeader}
            </p>
            <ul>
              <Link href='/contact'>
                <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                  {footer.companyLinks.contactLink}
                </li>
              </Link>

              <Link href='/conditions'>
                <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                  {footer.companyLinks.conditionsLink}
                </li>
              </Link>

              <Link href='/about'>
                <li className='hver:cursor-pointer py-1 text-sm text-gray-500 hover:text-gray-400'>
                  {footer.companyLinks.aboutLink}
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Socials and Contact Footer Section */}
        <div className='flex flex-col justify-start md:justify-end'>
          <div className='flex justify-start gap-2  pt-4 text-4xl md:justify-end'>
            <SelectIcon iconClasses='h-6 w-6' iconSelection='instagram' />
            <SelectIcon iconClasses='h-6 w-6' iconSelection='facebook' />
          </div>
          <p className='mt-2 text-md sm:text-right'>contact@e-nite.com</p>
          <p className='mt-1 text-md sm:text-right'>+41 79 754 24 38</p>
        </div>
      </div>

      <div className='mx-auto flex max-w-[1240px] flex-col justify-between px-2 py-4 text-center text-gray-400 sm:flex-row'>
        <p className='py-4 text-sm'>
          2024 <span className='font-bold'>e-nite</span>, All Rights Reserved
        </p>
      </div>
    </div>
  )
}
