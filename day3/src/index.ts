import "dotenv/config";
import { AppDataSource } from "./config/database.config";
import { User } from "./entities/User.entity";

// process.env
AppDataSource.initialize()
  .then(async () => {
    console.log("Database Connected");

    const user = await User.insert({
      username: "abc",
    });

    console.log("user", user);
  })
  .catch((err) => {
    console.error("error", err);
  });
