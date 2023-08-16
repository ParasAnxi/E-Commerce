import express from 'express';
import { addToCart, deleteFromCart, fetchCartByUser } from '../controllers/cart.js';

const router = express.Router();

router.get("/",fetchCartByUser);
router.post("/:userId/:itemId",addToCart);
router.delete("/:_id",deleteFromCart);

export default router;