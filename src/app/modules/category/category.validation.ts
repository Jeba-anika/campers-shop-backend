import { z } from 'zod'

const createCategoryValidation = z.object({
  categoryName: z.string({ required_error: 'Category Name is required!' }),
  image: z.string({ required_error: 'Category Image is required!' }),
})
const updateCategoryValidation = z.object({
  categoryName: z.string().optional(),
  image: z.string().optional(),
})

export const CategoryValidation = {
  createCategoryValidation,
  updateCategoryValidation,
}
