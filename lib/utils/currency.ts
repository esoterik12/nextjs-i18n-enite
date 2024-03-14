import { IFormatCurrencyInput } from "../types"

export const formatCurrency = ({
  amount,
  local = 'en-US',
  currency = 'CHF',
  decimalPlaces = 2
}: IFormatCurrencyInput) => {
  if (!amount) return

  const formatter = new Intl.NumberFormat(local, {
    style: 'currency',
    currency,
    maximumFractionDigits: decimalPlaces
  })

  return isNaN(amount) ? '--' : formatter.format(amount)
}