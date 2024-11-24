import { Request, Response } from "express";
import { getLastDigit, saveUser } from "../services/service";

export const getLastDigitHandler = (req: Request, res: Response) => {
  try {
    res.json(getLastDigit(req.params.id));
  } catch (e) {
    res.status(500).send(e);
  }
};

export const saveUserHandler = async (req: Request, res: Response) => {
  try {
    res.json(saveUser(req.body.id, req.body.lastDigit));
  } catch (e) {
    res.status(500).send(e);
  }
};
