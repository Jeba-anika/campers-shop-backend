import express from 'express'
import { parser } from '../../utils/fileParser'
import { CategoryController } from './category.controller'
import { convertAddCategoryReq } from './category.utils'
const router = express.Router()

router.post(
  '/',
  parser.single('image'),
  convertAddCategoryReq,
  CategoryController.createCategory,
)

export const CategoryRoutes = router
