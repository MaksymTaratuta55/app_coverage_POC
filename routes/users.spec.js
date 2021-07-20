const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
const { describe, it } = require("mocha");
const app = require("../app");

chai.use(chaiHttp);

describe("/user", () => {
  const prefix = "/users";

  it("Create user", (done) => {
    chai
      .request(app)
      .post(prefix)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({ name: "testName1", age: 44 })
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal({
          data: {
            name: "testName1",
            age: 44,
          },
          status: "Created",
        });

        done();
      });
  });

  it("Find user", (done) => {
    const name = "testName1";

    chai
      .request(app)
      .get(`${prefix}/${name}`)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal({ name: "testName1" });

        done();
      });
  });

  it("Find all users", (done) => {
    chai
      .request(app)
      .get(prefix)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.deep.equal([
          { name: "user1" },
          { name: "user2" },
          { name: "user3" },
        ]);

        done();
      });
  });

  // it("Update user", (done) => {
  //   const name = "testName1";

  //   chai
  //     .request(app)
  //     .put(`${prefix}/${name}`)
  //     .send({ age: 44 })
  //     .end((err, res) => {
  //       expect(res.statusCode).to.equal(200);
  //       expect(res.body).to.deep.equal({
  //         data: {
  //           name: "testName1",
  //           age: 44,
  //         },
  //         status: "Updated",
  //       });

  //       done();
  //     });
  // });

  it("Delete user", (done) => {
    const name = "testName1";
    chai
      .request(app)
      .delete(`${prefix}/${name}`)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.be.equal(`Deleted testName1`);

        done();
      });
  });
});
