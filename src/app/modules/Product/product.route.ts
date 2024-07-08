import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

// will call controller function
router.post('/', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProduct);

router.get('/:productId', ProductControllers.getSingleProduct);

router.delete('/:productId', ProductControllers.deleteSingleProduct);

router.put('/:productId', ProductControllers.updateSingleProduct);

router.get('/search', ProductControllers.searchProduct);

export const ProductRoutes = router;
