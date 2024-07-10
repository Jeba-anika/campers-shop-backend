import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductService } from './product.service'

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Product created successfully',
    data: result,
  })
})
// const getAllCars = catchAsync(async (req: Request, res: Response) => {
//   const result = await CarService.getAllCars()
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Cars retrieved successfully',
//     data: result,
//   })
// })
// const getSingleCar = catchAsync(async (req: Request, res: Response) => {
//   const result = await CarService.getSingleCar(req.params.id)
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'A Car retrieved successfully',
//     data: result,
//   })
// })
// const updateCar = catchAsync(async (req: Request, res: Response) => {
//   const result = await CarService.updateCar(req.params.id, req.body)
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Car updated successfully',
//     data: result,
//   })
// })
// const deleteCar = catchAsync(async (req: Request, res: Response) => {
//   const result = await CarService.deleteCar(req.params.id)
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Car Deleted successfully',
//     data: result,
//   })
// })
// const returnCar = catchAsync(async (req: Request, res: Response) => {
//   const result = await CarService.returnCar(req.body)
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Car returned successfully',
//     data: result,
//   })
// })

export const ProductController = {
  createProduct,
}
