const express = require("express");

const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/users.js");

const router = express.Router();

let users = [];

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
