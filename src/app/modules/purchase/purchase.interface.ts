import { Types } from 'mongoose'

export type TPurchaseInfo = {
  product: Types.ObjectId | string
  quantity: number
}
export type TUser = {
  userName: string
  email: string
  phoneNumber: string
  address: string
}
export type TPurchase = {
  date: Date
  productList: TPurchaseInfo[]
  totalPrice?: number
  userInfo: TUser
  paymentType: 'COD' | 'Stripe'
}
