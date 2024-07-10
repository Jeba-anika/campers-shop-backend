"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const product_service_1 = require("./product.service");
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.ProductService.createProduct(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: 'Product created successfully',
        data: result,
    });
}));
// const getAllCars = catchAsync(async (req: Request, res: Response) => {
//   const result = await CarService.getAllCars()
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Cars retrieved successfully',
//     data: result,
//   })
// })
// const getSingleCar = catchAsync(async (req: Request, res: Response) => {
//   const result = await CarService.getSingleCar(req.params.id)
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'A Car retrieved successfully',
//     data: result,
//   })
// })
// const updateCar = catchAsync(async (req: Request, res: Response) => {
//   const result = await CarService.updateCar(req.params.id, req.body)
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Car updated successfully',
//     data: result,
//   })
// })
// const deleteCar = catchAsync(async (req: Request, res: Response) => {
//   const result = await CarService.deleteCar(req.params.id)
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Car Deleted successfully',
//     data: result,
//   })
// })
// const returnCar = catchAsync(async (req: Request, res: Response) => {
//   const result = await CarService.returnCar(req.body)
//   sendResponse(res, {
//     success: true,
//     statusCode: httpStatus.OK,
//     message: 'Car returned successfully',
//     data: result,
//   })
// })
exports.ProductController = {
    createProduct,
};
