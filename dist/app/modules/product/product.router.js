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
router.post('/', product_utils_1.parser.array('images', 10), product_utils_1.convertReq, (0, validateRequest_1.default)(product_validation_1.ProductValidations.createProductValidation), product_controller_1.ProductController.createProduct);
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
exports.ProductRoutes = router;
