import { Router } from "express";
import UserRoutes from "./user.route.js";
import ProductRoutes from "./product.route.js";

const router = Router();

router.use("/api/v1/user", UserRoutes);
router.use("/api/v1/product", ProductRoutes);

export default router;
