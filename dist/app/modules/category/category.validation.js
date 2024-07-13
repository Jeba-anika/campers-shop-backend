"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidation = void 0;
const zod_1 = require("zod");
const createCategoryValidation = zod_1.z.object({
    categoryName: zod_1.z.string({ required_error: 'Category Name is required!' }),
    image: zod_1.z.string({ required_error: 'Category Image is required!' }),
});
const updateCategoryValidation = zod_1.z.object({
    categoryName: zod_1.z.string().optional(),
    image: zod_1.z.string().optional(),
});
exports.CategoryValidation = {
    createCategoryValidation,
    updateCategoryValidation,
};
