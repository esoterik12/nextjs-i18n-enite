import { Locale } from '@/i18n.config'

export interface ILogoProps {
  image: string
  text: string
  lang: Locale
}

export interface IProductItem {
  productId: number
  productTitle: string
  productPrice: number
  productDescription: string
  productImage: string
}

export interface ICartItem {
  id: number
  title: string
  quantity: number
  totalPrice: number
  price: number
  image: string
}

export interface ISliceState {
  items: ICartItem[]
  totalQuantity: number
  changed: boolean
  cartOpen: boolean
}

export interface IFormatCurrencyInput {
  amount: number | undefined
  local?: string
  currency?: string
  decimalPlaces?: number
}
