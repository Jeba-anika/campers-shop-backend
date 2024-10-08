/* eslint-disable @typescript-eslint/no-explicit-any */
import { v2 as cloudinary } from 'cloudinary'
import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import catchAsync from '../../utils/catchAsync'
// cloudinary.config({
//   cloud_name: config.cloudinary_cloud_name,
//   api_key: config.cloudinary_api_key,
//   api_secret: config.cloudinary_api_secret,
// })

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     // folder: 'uploads', // folder in cloudinary
//     // format: async (req, file) => 'png', // supports promises as well
//     public_id: (req, file) => file.originalname,
//   },
// })

// export const parser = multer({ storage })

export const convertAddProductReq = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.files) {
      const data = JSON.parse(req.body.data)
      const newData = {
        ...data,
        productImagesLink: (req.files as object[]).map((file: any) => ({
          altText: file?.filename,
          url: file?.path,
        })),
      }
      req.body = newData
      next()
    } else {
      throw new AppError(
        httpStatus.NOT_ACCEPTABLE,
        'Please upload at least one image',
      )
    }
  },
)
export const convertUpdateProductReq = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.files) {
      const data = JSON.parse(req.body.data)
      const newData = {
        ...data,
        productImagesLink: (req.files as object[]).map((file: any) => ({
          altText: file?.filename,
          url: file?.path,
        })),
      }
      req.body = newData
      next()
    } else {
      req.body = JSON.parse(req.body.data)
      next()
    }
  },
)
export default cloudinary
