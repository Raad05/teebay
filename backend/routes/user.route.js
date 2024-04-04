import { Router } from "express";
import { createUser, loginUser } from "../controller/user.controller.js";

const router = Router();

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);

export default router;
