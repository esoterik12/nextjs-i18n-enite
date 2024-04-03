import { Locale } from '@/i18n.config'
import { MouseEventHandler } from "react";

export interface IContactFormTypes {
  firstName: string
  lastName: string
  email: string
  phone: string
  selectedServices: string[]
  beertapOption: string
  notes: string
  date: Date
  conditionsRead: boolean
}

export interface FormOptions {
  servicesOptions: string[]
  beerTapOptions: string[]
}

export interface ICartSummaryEmpty {
  title: string
  emptyText: string
  actionOne: string
  actionTwo: string
  packsLink: string
  productsLink: string
}


export interface ContactFormProps {
  whatYouGetTitle: string
  guaranteedResponse: string
  freeConsultation: string
  personalizedRecommendations: string
  streamlineProcess: string
  formTitle: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  services: string
  servicesOptions: FormOptions['servicesOptions']
  beertap: string
  beertapOptions: FormOptions['beerTapOptions']
  notes: string
  eventDate: string
  submitButtonText: string
  conditionsCheck: string
  conditionsCheckLink: string
  submittingText: string
  cartSummaryEmpty: ICartSummaryEmpty
}

// Root object for ContractForm props for JSON i18n
export interface IContactFormComponentProps {
  contactForm: ContactFormProps
}

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
  returnId: number
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