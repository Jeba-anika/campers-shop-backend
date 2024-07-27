import { z } from 'zod'
const purchaseInfoSchema = z.object({
  product: z.string({ required_error: 'Product ID is required' }),
  quantity: z
    .number({ required_error: 'Quantity is required!' })
    .positive({ message: 'Quantity must be a positive number' })
    .int({ message: 'Quantity must be an integer' }),
})
const userSchema = z.object({
  userName: z.string({ required_error: 'User name is required!' }),
  email: z
    .string({ required_error: 'Email is required!' })
    .email({ message: 'Please give valid email!' }),
  phoneNumber: z.string({ required_error: 'Phone number is required!' }),
  address: z.string({ required_error: 'Address is required!' }),
})
const createPurchaseValidation = z.object({
  paymentType: z.enum(['COD', 'Stripe']).default('COD'),
  productList: z.array(purchaseInfoSchema, {
    required_error: 'Product List is required!',
  }),
  totalPrice: z
    .number({ required_error: 'Total price is required!' })
    .positive(),
  userInfo: userSchema,
  quantity: z.number({ required_error: 'Quantity is required!' }),
})
export const PurchaseValidation = { createPurchaseValidation }
