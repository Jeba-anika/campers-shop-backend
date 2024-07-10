import { model, Schema } from 'mongoose'
import { TCategory } from './category.interface'

const categorySchema = new Schema<TCategory>({
  categoryName: { type: String, required: true },
  image: { type: String, required: true },
})

export const Category = model<TCategory>('category', categorySchema)
