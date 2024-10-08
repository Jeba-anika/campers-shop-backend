import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { parser } from '../../utils/fileParser'
import { ProductController } from './product.controller'
import { convertAddProductReq, convertUpdateProductReq } from './product.utils'
import { ProductValidations } from './product.validation'
const router = express.Router()

router.post(
  '/',
  parser.array('images', 10),
  convertAddProductReq,
  validateRequest(ProductValidations.createProductValidation),
  ProductController.createProduct,
)
router.get('/featured', ProductController.getRandomProducts)
router.get('/best-selling', ProductController.getBestSellingProducts)
router.get('/:id', ProductController.getSingleProduct)
// router.put(
//   '/return',
//   validateRequest(CarValidations.returnCarValidation),
//   CarController.returnCar,
// )

router.put(
  '/:id',
  parser.array('images', 10),
  convertUpdateProductReq,
  validateRequest(ProductValidations.updateProductValidation),
  ProductController.updateProduct,
)
router.delete('/:id', ProductController.deleteProduct)
router.get('/best-selling', ProductController.getBestSellingProducts)

router.get('/', ProductController.getAllProducts)

export const ProductRoutes = router
