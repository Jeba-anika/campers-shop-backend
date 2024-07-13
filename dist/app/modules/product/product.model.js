"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductImageSchema = new mongoose_1.Schema({
    altText: { type: String, required: true },
    url: { type: String, required: true },
});
const productSchema = new mongoose_1.Schema({
    productName: { type: String, required: true },
    categoryId: { type: String, required: true, ref: 'category' },
    extraInfo: { type: [Object], required: true },
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
    isDeleted: { type: Boolean, default: false },
    soldCount: { type: Number, default: 0 },
    specifications: { type: [Object], required: true },
}, {
    timestamps: true,
});
exports.Product = (0, mongoose_1.model)('product', productSchema);
