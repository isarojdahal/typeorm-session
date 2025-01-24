import { Column, DataSource, Entity, PrimaryColumn } from "typeorm";

@Entity()
class User {
  @PrimaryColumn()
  id: number;

  @Column()
  username: boolean;
}

const AppDataSource = new DataSource({
  type: "postgres",
  username: "root",
  password: "iamsohappy",
  port: 5432, // 3306
  database: "trydb",
  host: "localhost", // 127.0.0.1
  entities: [User],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("error", err);
  });
