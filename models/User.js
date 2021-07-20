class UserModel {
  constructor() {}

  find() {
    return [{ name: "user1" }, { name: "user2" }, { name: "user3" }];
  }

  findOne(name) {
    return { name };
  }

  insert(name, age) {
    return {
      data: {
        name,
        age,
      },
      status: "Created",
    };
  }

  update(name, age) {
    return {
      data: {
        name,
        age,
      },
      status: "Updated",
    };
  }

  delete(name) {
    return `Deleted ${name}`;
  }
}

module.exports = {
  UserModel,
  userModel: new UserModel(),
};
