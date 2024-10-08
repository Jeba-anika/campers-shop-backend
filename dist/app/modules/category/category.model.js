"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.categorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.categorySchema = new mongoose_1.Schema({
    categoryName: { type: String, required: true },
    image: { type: String, required: true },
});
exports.Category = (0, mongoose_1.model)('category', exports.categorySchema);
