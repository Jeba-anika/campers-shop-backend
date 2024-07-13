"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_router_1 = require("../modules/category/category.router");
const product_router_1 = require("../modules/product/product.router");
const user_router_1 = require("../modules/user/user.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: user_router_1.UserRouter,
    },
    {
        path: '/products',
        route: product_router_1.ProductRoutes,
    },
    {
        path: '/category',
        route: category_router_1.CategoryRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
