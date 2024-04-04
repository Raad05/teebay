import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
} from "../controller/product.controller.js";

const router = Router();

router.get("/getProducts", getProducts);
router.post("/createProduct", createProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
