"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidations = void 0;
const zod_1 = require("zod");
const createProductValidation = zod_1.z.object({
    category: zod_1.z.string({ required_error: 'Category Id is required!' }),
    extraInfo: zod_1.z.array(zod_1.z.object({}).passthrough()).optional(),
    isDeleted: zod_1.z.boolean().optional(),
    productName: zod_1.z.string({ required_error: 'Product Name is required!' }),
    description: zod_1.z.string({ required_error: 'Description is required!' }),
    brand: zod_1.z.string({ required_error: 'Brand is required!' }),
    isAvailable: zod_1.z.boolean().optional(),
    features: zod_1.z.array(zod_1.z.object({}).passthrough(), {
        required_error: 'Features is required',
    }),
    price: zod_1.z.number({
        required_error: 'Price is required!',
        invalid_type_error: 'Price should be Number',
    }),
    stockQuantity: zod_1.z.number({ required_error: 'Stock Quantity is required!' }),
    soldCount: zod_1.z.number().optional(),
    productImagesLink: zod_1.z.array(zod_1.z.object({
        altText: zod_1.z.string({ required_error: 'Alt text is required!' }),
        url: zod_1.z.string({ required_error: 'URL is required!' }),
    }), { required_error: 'Product Images are required!' }),
    specifications: zod_1.z.array(zod_1.z.object({}).passthrough(), {
        required_error: 'Specifications is required',
    }),
    rating: zod_1.z.number().optional(),
});
const updateProductValidation = zod_1.z.object({
    category: zod_1.z.string().optional(),
    extraInfo: zod_1.z.array(zod_1.z.object({}).passthrough()).optional(),
    productName: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    brand: zod_1.z.string().optional(),
    isAvailable: zod_1.z.boolean().optional(),
    features: zod_1.z.array(zod_1.z.object({}).passthrough()).optional(),
    price: zod_1.z.number().optional(),
    stockQuantity: zod_1.z.number().optional(),
    soldCount: zod_1.z.number().optional(),
    productImagesLink: zod_1.z
        .array(zod_1.z.object({
        altText: zod_1.z.string({ required_error: 'Alt text is required!' }),
        url: zod_1.z.string({ required_error: 'URL is required!' }),
    }))
        .optional(),
    specifications: zod_1.z.array(zod_1.z.object({}).passthrough()).optional(),
    rating: zod_1.z.number().optional(),
});
exports.ProductValidations = {
    createProductValidation,
    updateProductValidation,
};
