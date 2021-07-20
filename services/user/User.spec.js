const { describe, it, after } = require("mocha");
const { userService } = require("./User");
const { expect } = require("chai");
const sinon = require("sinon");
const { UserModel } = require("../../models/User");

describe("User service", () => {
  let stubContainer;

  before(() => {
    stubContainer = sinon.createStubInstance(UserModel);
  });

  after(() => {});

  it("Create user", () => {
    stubContainer.insert.withArgs("testName1", 44).returns({
      data: {
        name: "testName1",
        age: 44,
      },
      status: "Created",
    });

    const res = userService.createUser("testName1", 44);

    expect(res).to.deep.equal({
      data: {
        name: "testName1",
        age: 44,
      },
      status: "Created",
    });
  });

  it("Find user", () => {
    stubContainer.findOne.withArgs("testName1").returns({
      name: "testName1",
    });

    const res = userService.findUser("testName1");

    expect(res).to.deep.equal({ name: "testName1" });
  });

  // it("Find all users", () => {
  //   stubContainer.find
  //     .withArgs()
  //     .returns([{ name: "user1" }, { name: "user2" }, { name: "user3" }]);

  //   const res = userService.findAllUsers();

  //   expect(res).to.deep.equal([
  //     { name: "user1" },
  //     { name: "user2" },
  //     { name: "user3" },
  //   ]);
  // });

  it("Update user", () => {
    stubContainer.update.withArgs("testName1", 44).returns({
      data: {
        name: "testName1",
        age: 44,
      },
      status: "Updated",
    });

    const res = userService.updateUser("testName1", 44);

    expect(res).to.deep.equal({
      data: {
        name: "testName1",
        age: 44,
      },
      status: "Updated",
    });
  });

  it("Delete user", () => {
    stubContainer.delete.withArgs("testName1", 44).returns(`Deleted testName1`);

    const res = userService.deleteUser("testName1");

    expect(res).to.be.equal(`Deleted testName1`);
  });
});
