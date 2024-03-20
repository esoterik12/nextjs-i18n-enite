import IconFacebook from '../icons/social-icons/IconFacebook'
import IconInstagram from '../icons/social-icons/IconInstagram'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

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
    <div className='py-y mt-6 w-full px-2 text-gray-400'>
      <div className='mx-auto flex max-w-[1240px] grid-cols-2 flex-row justify-between border-b-2 border-gray-600 py-8 md:grid-cols-6'>
        <div className='flex flex-row gap-8'>
          <div>
            {/* Products Footer Section */}
            <p className='pt-2 text-sm font-semibold uppercase text-gray-300'>
              {footer.productsHeader}
            </p>
            <ul>
              <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                {footer.productsLinks.partyPacksLink}
              </li>
              <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                {footer.productsLinks.productsLink}
              </li>
              <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                {footer.productsLinks.guidesLink}
              </li>
            </ul>
          </div>

          {/* Services Footer Section */}
          <div>
            <p className='pt-2 text-sm font-semibold uppercase text-gray-300'>
              {footer.servicesHeader}
            </p>
            <ul>
              <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                {footer.servicesLinks.deliveryLink}
              </li>
              <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                {footer.servicesLinks.djsLink}
              </li>
              <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                {footer.servicesLinks.photographers}
              </li>
            </ul>
          </div>

          {/* Company Footer Section */}
          <div>
            <p className='pt-2 text-sm font-semibold uppercase text-gray-300'>
              {footer.companyHeader}
            </p>
            <ul>
              <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                {footer.companyLinks.contactLink}
              </li>
              <li className='py-1 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-400'>
                {footer.companyLinks.conditionsLink}
              </li>
              <li className='hver:cursor-pointer py-1 text-sm text-gray-500 hover:text-gray-400'>
                {footer.companyLinks.aboutLink}
              </li>
            </ul>
          </div>
        </div>

        {/* Socials and Contact Footer Section */}
        <div className='flex flex-col justify-end'>
          <div className='flex justify-end  gap-2 pt-4 text-4xl'>
            {items.map(item => {
              return <item.icon key={item.id} />
            })}
          </div>
          <p className='mt-2 text-right text-lg'>contact@e-nite.com</p>
          <p className='mt-1 text-right text-lg'>+41 79 754 24 38</p>
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
