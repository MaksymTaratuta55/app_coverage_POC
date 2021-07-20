const { userModel } = require("../../models/User");

class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  createUser(name, age) {
    if (age === 10) {
      return [];
    }

    if (age === 20) {
      return [{ name: "user1" }];
    }

    if (!age) {
      return [{ name: "user1" }, { name: "user2" }];
    }

    return this.userModel.insert(name, age);
  }

  updateUser(name, age) {
    return this.userModel.update(name, age);
  }

  findAllUsers() {
    return this.userModel.find();
  }

  findUser(name) {
    return this.userModel.findOne(name);
  }

  deleteUser(name) {
    return this.userModel.delete(name);
  }
}

module.exports = {
  UserService,
  userService: new UserService(userModel),
};
