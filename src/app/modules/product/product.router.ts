import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { ProductController } from './product.controller'
import { convertReq, parser } from './product.utils'
import { ProductValidations } from './product.validation'
const router = express.Router()

router.post(
  '/',
  parser.array('images', 10),
  convertReq,
  validateRequest(ProductValidations.createProductValidation),
  ProductController.createProduct,
)

// router.get('/:id', CarController.getSingleCar)
// router.put(
//   '/return',
//   validateRequest(CarValidations.returnCarValidation),
//   CarController.returnCar,
// )
// router.put(
//   '/:id',
//   validateRequest(CarValidations.updateCarValidation),
//   CarController.updateCar,
// )
// router.delete('/:id', CarController.deleteCar)

// router.get('/', CarController.getAllCars)

export const ProductRoutes = router
