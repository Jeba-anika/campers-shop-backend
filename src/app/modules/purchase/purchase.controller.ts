import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { PurchaseService } from './purchase.service'

const createPurchase = catchAsync(async (req: Request, res: Response) => {
  const result = await PurchaseService.createPurchase(req.body)
  sendResponse(res, {
    data: result,
    message: 'Product purchased successfully',
    statusCode: httpStatus.OK,
    success: true,
  })
})

const createStripePaymentIntent = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PurchaseService.createStripePaymentIntent(req.body)
    sendResponse(res, {
      data: result,
      message: 'Created Stripe payement Intent!',
      statusCode: httpStatus.OK,
      success: true,
    })
  },
)

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

export const PurchaseController = { createPurchase, createStripePaymentIntent }
