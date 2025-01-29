import { Token } from "../../entities/Token.entity";
import { User } from "../../entities/User.entity";

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
    return await Token.upsert(
      {
        id: "901a56b7-f463-452b-88ba-4493b55c66db",
        user: "ramesh",
        value: "lkzjxu2o3i12j;3lk",
      },

      ["id"]
    );
  }
}

export default new UserService();

// router->controller->service->entity ... (Typeorm)
