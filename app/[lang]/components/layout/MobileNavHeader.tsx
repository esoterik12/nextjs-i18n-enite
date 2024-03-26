import NavLink from '../ui/NavLink'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import LocaleSwitcher from '../locale-switcher'
import Logo from './Logo'
import SelectIcon from '../icons/SelectIcon'
import Link from 'next/link'
import CartButton from '../buttons/CartButton'

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
        <Link href='/'>
          <SelectIcon iconClasses='h-6 w-6' iconSelection='home' />
        </Link>
        <LocaleSwitcher />
        <CartButton />
      </div>
    </nav>
  )
}
