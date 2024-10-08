"use strict";
// import httpStatus from 'http-status'
// import mongoose from 'mongoose'
// import QueryBuilder from '../../builder/QueryBuilder'
// import AppError from '../../errors/AppError'
// import { Car } from '../product/product.model'
// import { TBooking, TCreateBooking } from './booking.interface'
// import { Booking } from './booking.model'
// const createBooking = async (payload: TCreateBooking, userId: string) => {
//   const session = await mongoose.startSession()
//   try {
//     await session.startTransaction()
//     const isCarExists = await Car.findById(payload.carId)
//     if (!isCarExists) {
//       throw new AppError(httpStatus.NOT_FOUND, 'The car does not exist!')
//     }
//     if (isCarExists.status === 'unavailable') {
//       throw new AppError(
//         httpStatus.SERVICE_UNAVAILABLE,
//         'The car is not currently available for booking!',
//       )
//     }
//     if (isCarExists.isDeleted === true) {
//       throw new AppError(
//         httpStatus.SERVICE_UNAVAILABLE,
//         'The car does not exist!',
//       )
//     }
//     await Car.findByIdAndUpdate(
//       payload.carId,
//       { status: 'unavailable' },
//       { new: true },
//     )
//     const data: Partial<TBooking> = {
//       user: userId,
//       car: payload.carId,
//       date: payload.date,
//       startTime: payload.startTime,
//     }
//     const result = (
//       await (await Booking.create(data)).populate('user')
//     ).populate('car')
//     await session.commitTransaction()
//     await session.endSession()
//     return result
//   } catch (err: any) {
//     await session.abortTransaction()
//     await session.endSession()
//     throw new Error(err.message)
//   }
// }
// const getAllBookings = async (query: Record<string, unknown>) => {
//   const bookingQuery = new QueryBuilder(
//     Booking.find().populate('user').populate('car'),
//     query,
//   ).filter()
//   const result = await bookingQuery.modelQuery
//   return result
// }
// const getAllBookingsOfUser = async (userId: string) => {
//   const result = await Booking.find({ user: userId })
//     .populate('user')
//     .populate('car')
//   return result
// }
// export const BookingService = {
//   createBooking,
//   getAllBookingsOfUser,
//   getAllBookings,
// }
