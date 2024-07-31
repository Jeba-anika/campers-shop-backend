import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { PurchaseController } from './purchase.controller'
import { PurchaseValidation } from './purchase.validation'
const router = express.Router()

router.post(
  '/create-stripe-payment-intent',
  PurchaseController.createStripePaymentIntent,
)
router.post(
  '/',
  validateRequest(PurchaseValidation.createPurchaseValidation),
  PurchaseController.createPurchase,
)

export const PurchaseRoutes = router
