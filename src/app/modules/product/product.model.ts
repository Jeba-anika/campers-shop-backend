import { Schema, model } from 'mongoose'
import { TProduct, TProductImg } from './product.interface'

const ProductImageSchema = new Schema<TProductImg>({
  altText: { type: String, required: true },
  url: { type: String, required: true },
})

const productSchema = new Schema<TProduct>(
  {
    productName: { type: String, required: true },
    category: { type: String, required: true, ref: 'category' },
    extraInfo: { type: [Object] },
    productImagesLink: {
      type: [ProductImageSchema],
      required: true,
    },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    features: { type: [Object], required: true },
    isAvailable: { type: Boolean, default: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, required: true },
    soldCount: { type: Number, default: 0 },
    specifications: { type: [Object], required: true },
    rating: { type: Number, default: 5 },
  },
  {
    timestamps: true,
  },
)

export const Product = model<TProduct>('product', productSchema)
