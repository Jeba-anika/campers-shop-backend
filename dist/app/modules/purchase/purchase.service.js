"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const http_status_1 = __importDefault(require("http-status"));
const mongoose_1 = __importDefault(require("mongoose"));
// import QueryBuilder from '../../builder/QueryBuilder'
const AppError_1 = __importDefault(require("../../errors/AppError"));
// import { Car } from '../product/product.model'
const stripe_1 = __importDefault(require("../../utils/stripe"));
const product_model_1 = require("../product/product.model");
const purchase_model_1 = require("./purchase.model");
const createPurchase = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    try {
        yield session.startTransaction();
        const result = yield purchase_model_1.Purchase.create(payload);
        payload.productList.forEach((product) => __awaiter(void 0, void 0, void 0, function* () {
            const isProductExists = yield product_model_1.Product.findById(product.product);
            if (!isProductExists) {
                throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'The Product does not exist!');
            }
            if (!isProductExists.isAvailable) {
                throw new AppError_1.default(http_status_1.default.SERVICE_UNAVAILABLE, 'The Product stock is empty!');
            }
            const currentStock = isProductExists.stockQuantity;
            if (currentStock < product.quantity) {
                throw new AppError_1.default(http_status_1.default.SERVICE_UNAVAILABLE, 'The Product stock is limited!');
            }
            yield product_model_1.Product.findByIdAndUpdate(product.product, {
                stockQuantity: currentStock - product.quantity,
                isAvailable: !(currentStock === product.quantity),
            }, {
                new: true,
            });
        }));
        yield session.commitTransaction();
        yield session.endSession();
        return result;
    }
    catch (err) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error(err.message);
    }
});
const createStripePaymentIntent = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentIntent = yield stripe_1.default.paymentIntents.create({
        amount: Number((payload.totalPrice * 100).toFixed(2)),
        currency: 'usd',
        payment_method_types: ['card'],
    });
    return {
        clientSecret: paymentIntent.client_secret,
    };
});
exports.PurchaseService = { createPurchase, createStripePaymentIntent };
