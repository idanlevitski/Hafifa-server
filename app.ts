import express from "express";
import cors from "cors";
import router from "./src/routes/router";
import { dataSource } from "./src/DB/data-source";
import { error } from "console";

const app = express();

app.use(cors());
app.use(express.json());
app.use("", router);

const port = 3000;

dataSource
  .initialize()
  .then(() => {
    console.log("database connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((e) => {
    console.error("database connection failed:", error);
  });
