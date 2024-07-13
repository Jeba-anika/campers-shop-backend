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
exports.convertUpdateProductReq = exports.convertAddProductReq = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const cloudinary_1 = require("cloudinary");
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
// cloudinary.config({
//   cloud_name: config.cloudinary_cloud_name,
//   api_key: config.cloudinary_api_key,
//   api_secret: config.cloudinary_api_secret,
// })
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     // folder: 'uploads', // folder in cloudinary
//     // format: async (req, file) => 'png', // supports promises as well
//     public_id: (req, file) => file.originalname,
//   },
// })
// export const parser = multer({ storage })
exports.convertAddProductReq = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.files) {
        const data = JSON.parse(req.body.data);
        const newData = Object.assign(Object.assign({}, data), { productImagesLink: req.files.map((file) => ({
                altText: file === null || file === void 0 ? void 0 : file.filename,
                url: file === null || file === void 0 ? void 0 : file.path,
            })) });
        req.body = newData;
        next();
    }
    else {
        throw new AppError_1.default(http_status_1.default.NOT_ACCEPTABLE, 'Please upload at least one image');
    }
}));
exports.convertUpdateProductReq = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.files) {
        const data = JSON.parse(req.body.data);
        const newData = Object.assign(Object.assign({}, data), { productImagesLink: req.files.map((file) => ({
                altText: file === null || file === void 0 ? void 0 : file.filename,
                url: file === null || file === void 0 ? void 0 : file.path,
            })) });
        req.body = newData;
        next();
    }
    else {
        req.body = JSON.parse(req.body.data);
        next();
    }
}));
exports.default = cloudinary_1.v2;
