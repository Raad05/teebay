import { Router } from "express";
import { createUser, loginUser } from "../controller/user.controller.js";

const router = Router();

router.post("/signup", createUser);
router.post("/login", loginUser);

export default router;
