import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    statusCode: 404,
    message: 'Not Found',
  })
}
