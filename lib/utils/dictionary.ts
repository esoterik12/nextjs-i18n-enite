import 'server-only'
import type { Locale } from '@/i18n.config' // imported from config file

// this page import the two json files
// dictionairies folder with json files 
const dictionaries = {
  en: () => import('@/dictionaries/enWithProducts.json').then(module => module.default),
  de: () => import('@/dictionaries/deWithProducts.json').then(module => module.default),
  fr: () => import('@/dictionaries/frWithProducts.json').then(module => module.default),
}

// exported function used in page.tsx to get the dictionaries content (json file) using locale
export const getDictionary = async (locale: Locale) => dictionaries[locale]()
