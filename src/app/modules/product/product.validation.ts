import { z } from 'zod'

const createProductValidation = z.object({
  category: z.string({ required_error: 'Category Id is required!' }),
  extraInfo: z.array(z.object({}).passthrough()).optional(),
  isDeleted: z.boolean().optional(),
  productName: z.string({ required_error: 'Product Name is required!' }),
  description: z.string({ required_error: 'Description is required!' }),
  brand: z.string({ required_error: 'Brand is required!' }),
  isAvailable: z.boolean().optional(),
  features: z.array(z.object({}).passthrough(), {
    required_error: 'Features is required',
  }),
  price: z.number({
    required_error: 'Price is required!',
    invalid_type_error: 'Price should be Number',
  }),
  stockQuantity: z.number({ required_error: 'Stock Quantity is required!' }),
  soldCount: z.number().optional(),
  productImagesLink: z.array(
    z.object({
      altText: z.string({ required_error: 'Alt text is required!' }),
      url: z.string({ required_error: 'URL is required!' }),
    }),
    { required_error: 'Product Images are required!' },
  ),
  specifications: z.array(z.object({}).passthrough(), {
    required_error: 'Specifications is required',
  }),
  rating: z.number().optional(),
})
const updateProductValidation = z.object({
  category: z.string().optional(),
  extraInfo: z.array(z.object({}).passthrough()).optional(),
  productName: z.string().optional(),
  description: z.string().optional(),
  brand: z.string().optional(),
  isAvailable: z.boolean().optional(),
  features: z.array(z.object({}).passthrough()).optional(),
  price: z.number().optional(),
  stockQuantity: z.number().optional(),
  soldCount: z.number().optional(),
  productImagesLink: z
    .array(
      z.object({
        altText: z.string({ required_error: 'Alt text is required!' }),
        url: z.string({ required_error: 'URL is required!' }),
      }),
    )
    .optional(),
  specifications: z.array(z.object({}).passthrough()).optional(),
  rating: z.number().optional(),
})

export const ProductValidations = {
  createProductValidation,
  updateProductValidation,
}
