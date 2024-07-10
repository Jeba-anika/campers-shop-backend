import { z } from 'zod'

const createProductValidation = z.object({
  categoryId: z.string({ required_error: 'Product Name is required!' }),
  extraInfo: z.array(z.object({}).passthrough()).optional(),
  isDeleted: z.boolean().optional(),
  productName: z.string({ required_error: 'Product Name is required!' }),
  description: z.string({ required_error: 'Description is required!' }),
  brand: z.string({ required_error: 'Brand is required!' }),
  isAvailable: z.boolean().optional(),
  features: z.array(z.object({}).passthrough(), {
    required_error: 'Features is required',
  }),
  price: z.number({ required_error: 'Price is required!' }),
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
})
// const updateCarValidation = z.object({
//   name: z.string({ required_error: 'User Name is required!' }).optional(),
//   description: z
//     .string({ required_error: 'Description is required!' })
//     .optional(),
//   color: z.string({ required_error: 'Color is required!' }).optional(),
//   isElectric: z.boolean({ required_error: 'isElectric required!' }).optional(),
//   features: z
//     .array(z.string(), { required_error: 'Features is required' })
//     .optional(),
//   pricePerHour: z.number().optional(),
// })

// const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/
// const returnCarValidation = z.object({
//   bookingId: z.string({ required_error: 'Booking id is required!' }),
//   endTime: z.string().refine((time) => timeRegex.test(time), {
//     message: 'Invalid time format. Expected HH:mm.',
//   }),
// })

export const ProductValidations = {
  createProductValidation,
}
