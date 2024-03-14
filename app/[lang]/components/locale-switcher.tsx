'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { i18n } from '@/i18n.config' // i18n config object

export default function LocaleSwitcher() {
  const pathName = usePathname() // Get current path name (allows changing lang on any page)

  // Function to change the path name based on the selected locale in the LocaleSwitcher below
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  // Uses splitPath[1] to get the locale from the URL to set active link with clsx
  const splitPath = pathName.split('/')
  const classes =
    'w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-red-200 text-sm text-gray-800 transition-colors transition duration-350 ease-in-out'
  console.log("path locale: ", splitPath[1] )

  return (
    <ul className='flex gap-x-3'>
      {/* Maps the locales to render a link that adjusts the paths */}
      {i18n.locales.map(locale => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)} className=' text-white'>
              <div
                className={clsx(
                  classes,
                  splitPath[1] === locale
                    ? 'bg-red-100'
                    : ''
                )}
              >
                {locale}
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
