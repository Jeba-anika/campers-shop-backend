"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseValidation = void 0;
const zod_1 = require("zod");
const purchaseInfoSchema = zod_1.z.object({
    product: zod_1.z.string({ required_error: 'Product ID is required' }),
    quantity: zod_1.z
        .number({ required_error: 'Quantity is required!' })
        .positive({ message: 'Quantity must be a positive number' })
        .int({ message: 'Quantity must be an integer' }),
});
const userSchema = zod_1.z.object({
    userName: zod_1.z.string({ required_error: 'User name is required!' }),
    email: zod_1.z
        .string({ required_error: 'Email is required!' })
        .email({ message: 'Please give valid email!' }),
    phoneNumber: zod_1.z.string({ required_error: 'Phone number is required!' }),
    address: zod_1.z.string({ required_error: 'Address is required!' }),
});
const createPurchaseValidation = zod_1.z.object({
    paymentType: zod_1.z.enum(['COD', 'Stripe']).default('COD'),
    productList: zod_1.z.array(purchaseInfoSchema, {
        required_error: 'Product List is required!',
    }),
    totalPrice: zod_1.z
        .number({ required_error: 'Total price is required!' })
        .positive(),
    userInfo: userSchema,
});
exports.PurchaseValidation = { createPurchaseValidation };
