import  express, { NextFunction }  from "express";
import { getProductController } from "../controllers/products/getProducts";
import { getProductById } from "../controllers/products/getProductsById";
import { addProductsController } from "../controllers/products/addProducts";

import { deleteDataController } from "../controllers/products/deleteProduct";
import { updateDataController } from "../controllers/products/updateProduct";
const router = express.Router();

router.get('/' , getProductController)
router.get('/:id', getProductById);
router.post('/', addProductsController)
router.delete('/:id', deleteDataController)
router.patch('/:id',updateDataController )
export default router;