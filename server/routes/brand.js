import express from 'express';
import { createBrand, fetchBrands } from '../controllers/brand.js';

const router = express.Router();

router.post('/',createBrand);
router.get('/',fetchBrands);

export default router;