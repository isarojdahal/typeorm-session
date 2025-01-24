import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  username: "root",
  password: "iamsohappy",
  port: 5432, // 3306
  database: "trydb",
  host: "localhost", // 127.0.0.1
  poolSize: 5,
});
// db.collection();
// 5 pools (threads.) 

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("error", err);
  });
