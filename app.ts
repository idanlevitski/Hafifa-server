import express, { Request, Response } from "express";
import cors from "cors";

type IdInfo = {
  id: boolean;
  firstEight: string;
  lastDigit: string;
};

const app = express();

app.use(cors());

const port = 3000;

app.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(calculateLast(req.params.id));
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const calculateLast = (value: string) => {
  const digits = value.split("");
  let sum = 0;
  for (let index = 0; index < digits.length; index++) {
    const product = parseInt(digits[index]) * (index % 2 == 0 ? 1 : 2);
    sum += Math.floor(product / 10) + (product % 10);
  }

  return 10 - (sum % 10);
};
