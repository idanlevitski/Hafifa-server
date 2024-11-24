import express, { Request, Response } from "express";
import cors from "cors";
import router from "./src/routes/router";

const app = express();

app.use(cors());
app.use(express.json());
app.use("", router);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
