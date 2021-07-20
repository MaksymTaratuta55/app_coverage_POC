var express = require("express");
var router = express.Router();
const { userService } = require("../services/user/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
  const result = userService.findAllUsers();
  res.send(result).status(200);
});

/* GET user */
router.get("/:name", function (req, res, next) {
  const result = userService.findUser(req.params.name);
  res.send(result).status(200);
});

/* POST new user. */
router.post("/", function (req, res, next) {
  const result = userService.createUser(req.body.name, req.body.age);
  res.send(result).status(200);
});

/* Update users listing. */
router.put("/:name", function (req, res, next) {
  const result = userService.updateUser(req.params.name, req.body.age);
  res.send(result).status(200);
});

/* DELETE user */
router.delete("/:name", function (req, res, next) {
  const result = userService.deleteUser(req.params.name);
  res.send(result).status(200);
});
module.exports = router;
