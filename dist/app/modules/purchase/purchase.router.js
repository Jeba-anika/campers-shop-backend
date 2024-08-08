"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const purchase_controller_1 = require("./purchase.controller");
const purchase_validation_1 = require("./purchase.validation");
const router = express_1.default.Router();
router.post('/create-stripe-payment-intent', purchase_controller_1.PurchaseController.createStripePaymentIntent);
router.post('/', (0, validateRequest_1.default)(purchase_validation_1.PurchaseValidation.createPurchaseValidation), purchase_controller_1.PurchaseController.createPurchase);
exports.PurchaseRoutes = router;
