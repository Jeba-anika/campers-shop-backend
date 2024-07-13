"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const fileParser_1 = require("../../utils/fileParser");
const category_controller_1 = require("./category.controller");
const category_utils_1 = require("./category.utils");
const router = express_1.default.Router();
router.post('/', fileParser_1.parser.single('image'), category_utils_1.convertAddCategoryReq, category_controller_1.CategoryController.createCategory);
router.get('/', category_controller_1.CategoryController.getCategories);
exports.CategoryRoutes = router;
