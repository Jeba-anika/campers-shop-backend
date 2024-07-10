"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidations = void 0;
const zod_1 = require("zod");
const createProductValidation = zod_1.z.object({
    categoryId: zod_1.z.string({ required_error: 'Product Name is required!' }),
    extraInfo: zod_1.z.array(zod_1.z.object({}).passthrough()).optional(),
    isDeleted: zod_1.z.boolean().optional(),
    productName: zod_1.z.string({ required_error: 'Product Name is required!' }),
    description: zod_1.z.string({ required_error: 'Description is required!' }),
    brand: zod_1.z.string({ required_error: 'Brand is required!' }),
    isAvailable: zod_1.z.boolean().optional(),
    features: zod_1.z.array(zod_1.z.object({}).passthrough(), {
        required_error: 'Features is required',
    }),
    price: zod_1.z.number({ required_error: 'Price is required!' }),
    soldCount: zod_1.z.number().optional(),
    productImagesLink: zod_1.z.array(zod_1.z.object({
        altText: zod_1.z.string({ required_error: 'Alt text is required!' }),
        url: zod_1.z.string({ required_error: 'URL is required!' }),
    }), { required_error: 'Product Images are required!' }),
    specifications: zod_1.z.array(zod_1.z.object({}).passthrough(), {
        required_error: 'Specifications is required',
    }),
});
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
exports.ProductValidations = {
    createProductValidation,
};
