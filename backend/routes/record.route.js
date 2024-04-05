import { Router } from "express";
import { createRecord, getRecords } from "../controller/record.controller.js";

const router = Router();

router.post("/createRecord", createRecord);
router.get("/records", getRecords);

export default router;
