import { Router } from 'express'
import { CategoryRoutes } from '../modules/category/category.router'
import { ProductRoutes } from '../modules/product/product.router'
import { UserRouter } from '../modules/user/user.router'

const router = Router()
const moduleRoutes = [
  {
    path: '/auth',
    route: UserRouter,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router
