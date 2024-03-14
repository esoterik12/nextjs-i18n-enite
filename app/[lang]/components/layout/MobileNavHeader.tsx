import NavLink from '../ui/NavLink'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import LocaleSwitcher from '../locale-switcher'
import Logo from './Logo'

export default async function MobileNavHeader({ lang }: { lang: Locale }) {
  // gets navigation page destructured from getDictionary return object
  const { navigation } = await getDictionary(lang)

  return (
    <nav className='flex flex-col items-center md:hidden'>
      {/* NavLinks */}
      <div className='flex-row'>
        <ul className='flex gap-x-5 text-sm'>
          {/* KEY: These links include the lang / locale in their href */}
          <li>
            <NavLink href={`/${lang}/contact`}>{navigation.contact}</NavLink>
          </li>
          <li>
            <NavLink href={`/${lang}/packs`}>{navigation.partyPacks}</NavLink>
          </li>{' '}
          <li>
            <NavLink href={`/${lang}/products`}>
              {navigation.allProducts}
            </NavLink>
          </li>{' '}
          <li>
            <NavLink href={`/${lang}/conditions`}>
              {navigation.conditions}
            </NavLink>
          </li>{' '}
        </ul>
      </div>

      {/* Buttons */}
      <div className='m-4 flex flex-row items-center justify-between gap-12'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
          />
        </svg>

        <LocaleSwitcher />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
          />
        </svg>
      </div>
    </nav>
  )
}
