import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "../controller/product.controller.js";

const router = Router();

router.post("/createProduct", createProduct);
router.post("/getProducts", getProducts);

export default router;
