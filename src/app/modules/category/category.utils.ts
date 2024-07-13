import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import catchAsync from '../../utils/catchAsync'

export const convertAddCategoryReq = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.file) {
      const data = JSON.parse(req.body.data)
      const newData = {
        ...data,
        image: req.file.path,
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
