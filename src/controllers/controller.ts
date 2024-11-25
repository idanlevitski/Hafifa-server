import { Request, Response } from "express";
import { getLastDigit, saveIdNumber } from "../services/service";
import { customError } from "../customError";

export const getLastDigitHandler = (req: Request, res: Response) => {
  try {
    res.json(getLastDigit(req.params.id));
  } catch (e) {
    if (e instanceof customError) {
      res.status(e.code).send(e);
    } else {
      res.status(500).send(e);
    }
  }
};

export const saveIdNumberHandler = async (req: Request, res: Response) => {
  try {
    res.json(saveIdNumber(req.body.id, req.body.lastDigit));
  } catch (e) {
    if (e instanceof customError) {
      res.status(e.code).send(e);
    } else {
      res.status(500).send(e);
    }
  }
};
