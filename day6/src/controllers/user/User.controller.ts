import UserService from "../../services/user/User.service";

class UserController {

  async createUser() {
    return await UserService.create();
  }
  async getUsers() {
    return await UserService.getAll();
  }
  async getOneUser(userId: string) {
    return await UserService.getOne(userId);
  }

  async updateUser(userId: string) {
    return await UserService.update(userId);
  }

  async deleteUser(userId: string) {
    await UserService.delete(userId);
    return {
      status: "success",
      message: "User deleted",
    };
  }

  async misc() {
    return await UserService.misc();
  }
}

export default new UserController();

// express -> http -> net
// auth-> cookie, jwt (token), session, oAuth..
