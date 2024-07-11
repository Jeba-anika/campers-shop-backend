"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_controller_1 = require("./product.controller");
const product_utils_1 = require("./product.utils");
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
router.post('/', product_utils_1.parser.array('images', 10), product_utils_1.convertAddProductReq, (0, validateRequest_1.default)(product_validation_1.ProductValidations.createProductValidation), product_controller_1.ProductController.createProduct);
router.get('/best-selling', product_controller_1.ProductController.getBestSellingProducts);
router.get('/:id', product_controller_1.ProductController.getSingleProduct);
// router.put(
//   '/return',
//   validateRequest(CarValidations.returnCarValidation),
//   CarController.returnCar,
// )
router.put('/:id', product_utils_1.parser.array('images', 10), product_utils_1.convertUpdateProductReq, (0, validateRequest_1.default)(product_validation_1.ProductValidations.updateProductValidation), product_controller_1.ProductController.updateProduct);
router.delete('/:id', product_controller_1.ProductController.deleteProduct);
router.get('/best-selling', product_controller_1.ProductController.getBestSellingProducts);
router.get('/', product_controller_1.ProductController.getAllProducts);
exports.ProductRoutes = router;
