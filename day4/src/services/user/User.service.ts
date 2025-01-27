import { User } from "../../entities/User.entity";

class UserService {
  async getAll() {
    return await User.find();
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
    // const user = await User.findOne({
    //   where: {
    //     id: userId,
    //   },
    // });
    // if (!user) return { status: "error", message: "User doesnot exist" };
    // //
    // user.email = "updateemail@gmail.com";
    // const updatedUser = await user.save();
    // console.log("updatedUser", updatedUser);
    // return updatedUser;
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

    await User.remove(user);
    return {
      status: "success",
      message: "User deleted",
    };
  }
}

export default new UserService();

// router->controller->service->entity ... (Typeorm)
