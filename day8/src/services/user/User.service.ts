import { Not } from "typeorm";
import { Token } from "../../entities/Token.entity";
import { User } from "../../entities/User.entity";
import { AppDataSource } from "../../config/database.config";
import { UserDetails } from "../../entities/UserDetails.entity";
import { Photo } from "../../entities/Photo.entity";
import { Category } from "../../entities/Category.entity";
import { Question } from "../../entities/Question.entity";

class UserService {
  // email, password, fullname, address, salary..
  async create() {
    const userDetails = new UserDetails();
    userDetails.address = "Kathmandu";
    userDetails.fullName = "Shree Ram";
    userDetails.salary = 10000;
    await userDetails.save();

    const user = new User();
    user.email = "new@gmail.com";
    user.password = "12312312312";
    user.userDetail = userDetails; // one to one.
    await user.save();

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

    return await User.find({
      relations: {
        photos: true,
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

  async misc() {
    // const photo1 = new Photo();
    // photo1.url = "https://a.com";
    // await photo1.save();
    // const photo2 = new Photo();
    // photo2.url = "https://b.com";
    // await photo2.save();
    // const user = await User.findOne({
    //   where: {
    //     id: "dbd24ffb-6c4b-4346-9bd7-559856242ae4",
    //   },
    // });
    // if (!user) return { status: "false", message: "Error" };
    // user.photos = [photo1, photo2];
    // await user.save();
    // const user = await User.findOne({
    //   where: {
    //     id: "dbd24ffb-6c4b-4346-9bd7-559856242ae4",
    //   },
    // });
    // if (!user) return { status: "false", message: "Error" };
    // const photo1 = new Photo();
    // photo1.url = "https://aa.com";
    // photo1.user = user;
    // await photo1.save();
    // const photo2 = new Photo();
    // photo2.url = "https://bb.com";
    // photo2.user = user;
    // await photo2.save();
    // return {};
    // const category1 = new Category();
    // category1.name = "animals";
    // await category1.save();
    // const category2 = new Category();
    // category2.name = "zoo";
    // await category2.save();
    // const question = new Question();
    // question.title = "dogs";
    // question.text = "who let the dogs out?";
    // question.categories = [category1, category2];
    // await question.save();
    // return await Question.find({
    //   relations: {
    //     categories: true,
    //   },
    // });
    // return await Question.createQueryBuilder("q")
    //   .leftJoinAndSelect("q.categories", "categories")
    //   .getMany();
  }
}

export default new UserService();

// router->controller->service->entity ... (Typeorm)
