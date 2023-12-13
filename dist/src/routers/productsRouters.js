"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getProducts_1 = require("../controllers/products/getProducts");
const getProductsById_1 = require("../controllers/products/getProductsById");
const addProducts_1 = require("../controllers/products/addProducts");
const deleteProduct_1 = require("../controllers/products/deleteProduct");
const updateProduct_1 = require("../controllers/products/updateProduct");
const router = express_1.default.Router();
router.get('/', getProducts_1.getProductController);
router.get('/:id', getProductsById_1.getProductById);
router.post('/', addProducts_1.addProductsController);
router.delete('/:id', deleteProduct_1.deleteDataController);
router.patch('/:id', updateProduct_1.updateDataController);
exports.default = router;
