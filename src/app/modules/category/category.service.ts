import { TCategory } from './category.interface'
import { Category } from './category.model'

const createCategory = async (payload: TCategory) => {
  const result = await Category.create(payload)
  return result
}

const getCategories = async () => {
  const result = await Category.find({})
  return result
}
export const CategoryService = {
  createCategory,
  getCategories,
}
