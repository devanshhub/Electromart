import express from 'express';
// --- UPDATE your import ---
import { getAllProducts, searchProducts } from '../controllers/product.controller.js';

const router = express.Router();

// --- NEW: Add the search route ---
router.route('/search').get(searchProducts);

// This route gets all products
router.route('/').get(getAllProducts);

// This route would get a single product by ID (you'll build this later)
// router.route('/:id').get(getProductById);

export default router;