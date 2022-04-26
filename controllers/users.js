const { v4: uuidv4 } = require("uuid");
const user = require("../models/user");
let users = [];

exports.createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.first} added to the database!`);
};

exports.getUsers = async (req, res) => {
  //const user = await user.find();
  await res.send(users);
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const fourUser = await users.find((user) => user.id == id);

  res.send(fourUser);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  users = await users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database.`);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = await users.find((user) => user.id == id);
  if (firstName) user.firstname = firstName;
  if (lastName) user.lastname = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};
