import httpStatus from 'http-status'
import mongoose from 'mongoose'
// import QueryBuilder from '../../builder/QueryBuilder'
import AppError from '../../errors/AppError'
// import { Car } from '../product/product.model'

import { Product } from '../product/product.model'
import { TPurchase } from './purchase.interface'

const createPurchase = async (payload: TPurchase) => {
  const session = await mongoose.startSession()
  try {
    await session.startTransaction()
    payload.productList.forEach(async (product) => {
      const isProductExists = await Product.findById(product.product)
      if (!isProductExists) {
        throw new AppError(httpStatus.NOT_FOUND, 'The Product does not exist!')
      }

      if (!isProductExists.isAvailable) {
        throw new AppError(
          httpStatus.SERVICE_UNAVAILABLE,
          'The Product stock is empty!',
        )
      }
      const currentStock = isProductExists.stockQuantity
      if (currentStock < product.quantity) {
        throw new AppError(
          httpStatus.SERVICE_UNAVAILABLE,
          'The Product stock is limited!',
        )
      }
      if (payload.paymentType === 'COD') {
        await Product.findByIdAndUpdate(
          product.product,
          {
            stockQuantity: currentStock - product.quantity,
            isAvailable: !(currentStock === product.quantity),
          },
          {
            new: true,
          },
        )
      }
    })

    if (payload.paymentType === 'Stripe') {
      console.log('stripe')
    }
    await session.commitTransaction()
    await session.endSession()
    // return result
  } catch (err: any) {
    await session.abortTransaction()
    await session.endSession()
    throw new Error(err.message)
  }
}

export const PurchaseService = { createPurchase }
