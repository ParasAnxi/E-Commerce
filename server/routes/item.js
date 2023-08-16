import express from "express";
import { createItem, fetchAllItems, fetchItemById } from "../controllers/item.js";

const router = express.Router();

router.post('/',createItem);
router.get('/',fetchAllItems);
router.get('/:id',fetchItemById);

export default router;