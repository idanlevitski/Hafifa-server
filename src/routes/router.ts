import express from "express";
import {
  getLastDigitHandler,
  saveIdNumberHandler,
} from "../controllers/controller";

const router = express.Router();

router.get("/calc/:id", getLastDigitHandler);

router.post("/save", saveIdNumberHandler);

export default router;
