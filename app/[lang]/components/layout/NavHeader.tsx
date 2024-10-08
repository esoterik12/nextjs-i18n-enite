import NavLink from '../ui/NavLink'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'
import LocaleSwitcher from '../locale-switcher'
import Logo from './Logo'
import MobileNavHeader from './MobileNavHeader'
import CartButton from '../buttons/CartButton'

export default async function Header({ lang }: { lang: Locale }) {
  // gets navigation page destructured from getDictionary return object
  const { navigation } = await getDictionary(lang)

  return (
    <header className='z-10 py-2'>
      <MobileNavHeader lang={lang} />
      <nav className='hidden items-center justify-between md:flex'>
        {/* Logo */}
        <div className='mr-7'>
          <Logo text='e-nite' image='/e-nite/android-chrome-512x512.png' lang={lang} />
        </div>

        {/* NavLinks */}
        <div className='hidden flex-row sm:block'>
          <ul className='flex gap-x-5 sm:text-sm'>
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
              <NavLink href={`/${lang}/services`}>
                {navigation.services}
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
        <div className='mr-4 flex flex-row gap-6'>
          <CartButton />
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  )
}
