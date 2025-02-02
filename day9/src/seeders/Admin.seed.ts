import "dotenv/config";
import { AppDataSource } from "../config/database.config";
import { Admin } from "../entities/Admin.entity";

AppDataSource.initialize().then(async () => {
  console.log("args", process.argv[2]);

  // pnpm seed:admin --add

  switch (process.argv[2]) {
    case "--add":
      const admin = new Admin();
      admin.email = "admin1@gmail.com";
      admin.password = "Nepal123";
      await admin.save();
      console.log("Admin seeded");
      break;

    case "--remove":
      console.log("Admin removed");
      await Admin.delete({});
      break;
  }

  process.exit();
});

// cli.

// Ecommerce : product category, store
// school: Old data; departments,
