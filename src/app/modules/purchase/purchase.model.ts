import { Schema, model } from 'mongoose'
import { TPurchase, TPurchaseInfo, TUser } from './purchase.interface'

const purchaseInfoSchema = new Schema<TPurchaseInfo>({
  product: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
})
const userSchema = new Schema<TUser>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
})

const purchaseSchema = new Schema<TPurchase>(
  {
    date: { type: Date, default: Date.now() },
    paymentType: { type: String, enum: ['COD', 'Stripe'], default: 'COD' },
    productList: { type: [purchaseInfoSchema], required: true },
    totalPrice: { type: Number, required: true },
    userInfo: { type: userSchema, required: true },
  },
  { timestamps: true },
)

export const Purchase = model<TPurchase>('Purchase', purchaseSchema)
