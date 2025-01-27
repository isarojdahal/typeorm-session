import UserService from "../../services/user/User.service";

class UserController {
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
    return await UserService.delete(userId);
  }
}

export default new UserController();
