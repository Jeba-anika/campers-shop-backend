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
exports.PurchaseController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const purchase_service_1 = require("./purchase.service");
const createPurchase = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield purchase_service_1.PurchaseService.createPurchase(req.body);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: 'Product purchased successfully',
        statusCode: http_status_1.default.OK,
        success: true,
    });
}));
const createStripePaymentIntent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield purchase_service_1.PurchaseService.createStripePaymentIntent(req.body);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: 'Created Stripe payement Intent!',
        statusCode: http_status_1.default.OK,
        success: true,
    });
}));
// const getAllBookings = catchAsync(async (req: Request, res: Response) => {
//   let queryObj = { ...req.query }
//   if (Object.keys(queryObj).includes('carId')) {
//     const { carId, ...remainingQuery } = queryObj
//     queryObj = { ...remainingQuery, car: req.query['carId'] }
//   }
//   const result = await BookingService.getAllBookings(queryObj)
//   sendResponse(res, {
//     data: result,
//     message: 'Bookings retrieved successfully',
//     statusCode: httpStatus.OK,
//     success: true,
//   })
// })
// const getAllBookingsOfUser = catchAsync(async (req: Request, res: Response) => {
//   const result = await BookingService.getAllBookingsOfUser(req.user.id)
//   sendResponse(res, {
//     data: result,
//     message: 'My Bookings retrieved successfully',
//     statusCode: httpStatus.OK,
//     success: true,
//   })
// })
exports.PurchaseController = { createPurchase, createStripePaymentIntent };
