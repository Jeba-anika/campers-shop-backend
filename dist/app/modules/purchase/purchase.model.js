"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
const mongoose_1 = require("mongoose");
const purchaseInfoSchema = new mongoose_1.Schema({
    product: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
});
const userSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
});
const purchaseSchema = new mongoose_1.Schema({
    date: { type: Date, default: Date.now() },
    paymentType: { type: String, enum: ['COD', 'Stripe'], default: 'COD' },
    productList: { type: [purchaseInfoSchema], required: true },
    totalPrice: { type: Number, required: true },
    userInfo: { type: userSchema, required: true },
}, { timestamps: true });
exports.Purchase = (0, mongoose_1.model)('Purchase', purchaseSchema);
