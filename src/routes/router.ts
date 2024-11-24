import express from "express";
import {
  getLastDigitHandler,
  saveUserHandler,
} from "../controllers/controller";

const router = express.Router();

router.get("/calc/:id", getLastDigitHandler);

router.post("/save", saveUserHandler);

export default router;
