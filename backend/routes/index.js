import { Router } from "express";
import UserRoutes from "./user.route.js";

const router = Router();

router.use("/api/v1/user", UserRoutes);

export default router;
