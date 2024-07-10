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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = require("./product.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
// const getAllCars = async () => {
//   const result = await Car.find({})
//   return result
// }
// const getSingleCar = async (carId: string) => {
//   const result = await Car.findById(carId)
//   return result
// }
// const updateCar = async (carId: string, payload: Partial<TCar>) => {
//   const result = await Car.findByIdAndUpdate(carId, payload, { new: true })
//   return result
// }
// const deleteCar = async (carId: string) => {
//   const result = await Car.findByIdAndUpdate(
//     carId,
//     { isDeleted: true },
//     { new: true },
//   )
//   return result
// }
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
};
