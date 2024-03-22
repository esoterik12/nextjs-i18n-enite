import { Locale } from '@/i18n.config'
import { MouseEventHandler } from "react";

export interface ILogoProps {
  image: string
  text: string
  lang: Locale
}

// Pack Type
export interface IProductItem {
  productId: number
  productTitle: string
  productPrice: number
  productDescription: string
  productImage: string
  equipmentList?: number[]
}

// Single Product Type
export interface ISingleProductItem {
  id: number
  title: string
  image: string
  price: number
  priceForTwo?: number
  maxQuantity: number
  description: string
  specs?: string
  type: string
  demoLink?: string
}

export interface IPackProductsJson {
  title: string
  description: string
  addToOrderButton: string
  data: IProductItem[]
}

// Delivery Card Type:
export interface IDeliveryCardItem {
  productId: number
  productTitle: string
  productImage: string
  servicePrice: number
  returnPrice: number
  productDescription: string
}

// Cart Context:
export interface ICartItem {
  id: number
  equipmentList?: number[]
  title: string
  quantity: number
  totalPrice: number
  price: number
  image: string
}

export interface ISliceState {
  items: ICartItem[]
  packItems: number[]
  totalQuantity: number
  changed: boolean
  cartOpen: boolean
}
// End Cart Context

export interface IFormatCurrencyInput {
  amount: number | undefined
  local?: string
  currency?: string
  decimalPlaces?: number
}

export interface ICustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}