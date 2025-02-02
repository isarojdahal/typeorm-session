import { Not } from "typeorm";
import { Token } from "../../entities/Token.entity";
import { User } from "../../entities/User.entity";
import { AppDataSource } from "../../config/database.config";
import { UserDetails } from "../../entities/UserDetails.entity";
import { Photo } from "../../entities/Photo.entity";
import { Category } from "../../entities/Category.entity";
import { Question } from "../../entities/Question.entity";
import { Media } from "../../entities/Media.entity";

class UserService {
  // email, password, fullname, address, salary..
  async create() {
    // const user = new User();
    // user.email = "abc@gmail.com";
    // user.password = "1234";

    // await user.save();

    const user = await User.insert({
      email: "new@gmail.com",
      password: "123",
    });

    return { status: "success", message: "User created", data: user };
  }

  async getAll() {
    // return await User.find({ withDeleted: true });
    // return await User.find({
    //   relations: ["userDetail"],
    // });
    // return await User.createQueryBuilder("user")
    //   .leftJoinAndSelect("user.userDetail", "ud")
    //   .getMany();

    // User -> cache (...) 1,2
    //  User->  1,2,3
    // insert, update, delete.
    // AppDataSource.queryResultCache?.remove(["userfind"])
    return await User.find({
      cache: {
        id: "userfind",
        milliseconds: 10000, // 1000 ms = 1s.
      },
    });
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

  // user/route/misc
  async misc() {
    // const m = new Media();
    // m.name = "photo.jpeg";
    // m.save();

    // return m;

    return await Media.find();
  }
}

export default new UserService();

// router->controller->service->entity ... (Typeorm)
