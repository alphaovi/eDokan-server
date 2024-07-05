import express from "express";
import { ProductControllers } from "./Product/product.controller";


const router = express.Router();


// will call controller function
router.post("/add-product", ProductControllers.createProduct);

router.get("/", ProductControllers.getAllProduct);

router.get("/:productId", ProductControllers.getSingleProduct);

export const ProductRoutes = router;