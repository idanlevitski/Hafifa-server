import express from "express";
import { getLastDigitHandler } from "../controllers/controller";

const router = express.Router();

router.get("/calc/:id", getLastDigitHandler);

export default router;
