import { Not } from "typeorm";
import { Token } from "../../entities/Token.entity";
import { User } from "../../entities/User.entity";
import { AppDataSource } from "../../config/database.config";

class UserService {
  async create() {
    const user = new User();
    user.email = "new@gmail.com";
    return await user.save();
  }

  async getAll() {
    return await User.find({ withDeleted: true });
  }

  async getOne(userId: string) {
    return await User.findOne({
      where: {
        id: userId,
      },
    });
  }

  async update(userId: string) {
    // Way 1
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) return { status: "error", message: "User doesnot exist" };
    //
    user.email = "newemailupdated@gmail.com";
    const updatedUser = await user.save();
    console.log("updatedUser", updatedUser);
    return updatedUser;

    // Way 2
    // return await User.update(
    //   {
    //     id: userId,
    //   },
    //   {
    //     email: "newupdatedemail@gmail.com",
    //   }
    // );
  }

  async delete(userId: string) {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (!user) return { status: "error", message: "User doesnot exist" };

    return await User.softRemove(user);
  }

  async misc() {
    // return await Token.upsert(
    //   {
    //     id: "901a56b7-f463-452b-88ba-4493b55c66db",
    //     user: "ramesh",
    //     value: "lkzjxu2o3i12j;3lk",
    //   },

    //   ["id"]
    // );

    // const user = await User.find({
    //   where: {
    //     id: Not("16727c4e-e6fd-43f1-b436-f82b77aff8e0"),
    //   },
    // });

    // Query Builder
    // WHERE, SELECT,

    // User.find();
    // User.findOne();
    // const user = await User.createQueryBuilder("user")
    //   .select(["user.email", "user.id"])
    //   .orderBy("user.email", "ASC")
    //   .getMany();

    // const user = await User.find({
    //   select: {
    //     email: true,
    //     id: true,
    //   },
    //   order: {
    //     email: "ASC",
    //   },
    // });

    // const user = await User.createQueryBuilder("user")
    //   .select("AVG(user.salary)", "average_salary")
    //   .addSelect("MAX(user.salary)", "maximum_salary")
    //   .addSelect("MIN(user.salary)")
    //   .getRawOne();

    // const user = await User.createQueryBuilder("user")
    //   .select(["user.email", "user.id"])
    //   .where("user.id = :id", {
    //     id: "16727c4e-e6fd-43f1-b436-f82b77aff8e9",
    //   })

    //   .orderBy("user.email", "ASC")
    //   .getParameters();

    // const user = await User.query(`SELECT * FROM "user"`);

    const user = await AppDataSource.getRepository(User).query(
      `SELECT * FROM "user"`
    );
    return user;
  }
}

export default new UserService();

// router->controller->service->entity ... (Typeorm)
