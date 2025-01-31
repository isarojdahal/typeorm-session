import "dotenv/config";
import { AppDataSource } from "./config/database.config";
import { User } from "./entities/User.entity";
import express from "express";
import userRouter from "./routes/user.route";

const app = express();
// process.env
AppDataSource.initialize()
  .then(async () => {
    console.log("Database Connected");

    app.use("/user", userRouter);
    app.listen(8000, () => {
      console.log("Server established");
    });
  })
  .catch((err) => {
    console.error("error", err);
  });
