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
exports.convertReq = exports.parser = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const cloudinary_1 = require("cloudinary");
const http_status_1 = __importDefault(require("http-status"));
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloudinary_cloud_name,
    api_key: config_1.default.cloudinary_api_key,
    api_secret: config_1.default.cloudinary_api_secret,
});
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: {
        // folder: 'uploads', // folder in cloudinary
        // format: async (req, file) => 'png', // supports promises as well
        public_id: (req, file) => file.originalname,
    },
});
exports.parser = (0, multer_1.default)({ storage });
exports.convertReq = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.default = cloudinary_1.v2;
