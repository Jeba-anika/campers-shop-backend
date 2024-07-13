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
exports.ProductService = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const product_constant_1 = require("./product.constant");
const product_model_1 = require("./product.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
const getAllProducts = (query) => __awaiter(void 0, void 0, void 0, function* () {
    let baseQuery = product_model_1.Product.find().populate('category');
    if (query.maxPrice && query.minPrice) {
        baseQuery = product_model_1.Product.find({
            price: { $lte: Number(query.maxPrice), $gte: Number(query.minPrice) },
        });
    }
    else if (query.maxPrice) {
        baseQuery = product_model_1.Product.find({ price: { $lte: Number(query.maxPrice) } });
    }
    else if (query.minPrice) {
        baseQuery = product_model_1.Product.find({ price: { $gte: Number(query.minPrice) } });
    }
    const productQuery = new QueryBuilder_1.default(baseQuery, query)
        .search(product_constant_1.productSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield productQuery.modelQuery;
    return result;
});
const getSingleProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(productId);
    return result;
});
const getBestSellingProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({}).sort('-soldCount').limit(4);
    return result;
});
const updateProduct = (productId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(productId, payload, {
        new: true,
    });
    return result;
});
const deleteProduct = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(productId, { isDeleted: true }, { new: true });
    return result;
});
// const returnCar = async (payload: TReturnCar) => {
//   const session = await mongoose.startSession()
//   try {
//     await session.startTransaction()
//     const booking = await Booking.findById(payload.bookingId)
//     if (!booking) {
//       throw new AppError(httpStatus.NOT_FOUND, 'Booking does not exist!')
//     }
//     const updatedCar = await Car.findByIdAndUpdate(
//       booking.car,
//       {
//         status: 'available',
//       },
//       { new: true },
//     )
//     const time = calcTotalDuration(booking.startTime, payload.endTime)
//     const price = time * (updatedCar?.pricePerHour as number)
//     const uodatedBookingData = {
//       endTime: payload.endTime,
//       totalCost: price,
//     }
//     const updatedBooking = await Booking.findByIdAndUpdate(
//       payload.bookingId,
//       uodatedBookingData,
//       { new: true },
//     )
//       .populate('car')
//       .populate('user')
//     await session.commitTransaction()
//     await session.endSession()
//     return updatedBooking
//   } catch (err: any) {
//     await session.abortTransaction()
//     await session.endSession()
//     throw new Error(err.message)
//   }
// }
exports.ProductService = {
    createProduct,
    getBestSellingProducts,
    getSingleProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
};
