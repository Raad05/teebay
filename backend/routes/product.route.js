import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controller/product.controller.js";

const router = Router();

router.post("/createProduct", createProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getProductById/:id", getProductById);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
