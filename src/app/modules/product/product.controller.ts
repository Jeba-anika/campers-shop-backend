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
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProducts(req.query)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Products retrieved successfully',
    data: result,
  })
})
const getRandomProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getRandomProducts()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Products retrieved successfully',
    data: result,
  })
})
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getSingleProduct(req.params.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'A Product retrieved successfully',
    data: result,
  })
})
const getBestSellingProducts = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductService.getBestSellingProducts()
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Best selling products retrieved successfully',
      data: result,
    })
  },
)
const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.updateProduct(req.params.id, req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product updated successfully',
    data: result,
  })
})
const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.deleteProduct(req.params.id)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Product Deleted successfully',
    data: result,
  })
})
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
  getRandomProducts,
  getBestSellingProducts,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
}
