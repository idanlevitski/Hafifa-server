import { Request, Response } from "express";
import { getLastDigit } from "../services/service";

export const getLastDigitHandler = (req: Request, res: Response) => {
  try {
    res.json(getLastDigit(req.params.id));
  } catch (e) {
    res.status(500).send(e);
  }
};
