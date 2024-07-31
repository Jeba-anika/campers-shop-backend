import httpStatus from 'http-status'
import mongoose from 'mongoose'
// import QueryBuilder from '../../builder/QueryBuilder'
import AppError from '../../errors/AppError'
// import { Car } from '../product/product.model'

import stripe from '../../utils/stripe'
import { Product } from '../product/product.model'
import { TPurchase } from './purchase.interface'
import { Purchase } from './purchase.model'

const createPurchase = async (payload: TPurchase) => {
  const session = await mongoose.startSession()
  try {
    await session.startTransaction()
    const result = await Purchase.create(payload)
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
    })

    await session.commitTransaction()
    await session.endSession()
    return result
  } catch (err: any) {
    await session.abortTransaction()
    await session.endSession()
    throw new Error(err.message)
  }
}

const createStripePaymentIntent = async (payload) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(((payload.totalPrice as number) * 100).toFixed(2)),
    currency: 'usd',
    payment_method_types: ['card'],
  })
  return {
    clientSecret: paymentIntent.client_secret,
  }
}

export const PurchaseService = { createPurchase, createStripePaymentIntent }
