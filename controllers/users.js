// import req from 'express/lib/request';
// import { v4 as uuidv4 } from 'uuid';
const v4 = require('uuid');
const uuidv4 = v4;
let users = [];


exports.createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstname} added to the database!`);
}


exports.getUsers = (req, res) => {
  
  res.send(users);
}

exports.getUser  = (req, res) => {
  const { id } = req.params;
  const fourUser =  users.find((user) => user.id == id);

  res.send(fourUser);
}

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database.`);

}

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age} = req.body;

  const user = users.find((user) => user.id == id);
  if(firstName)  user.firstname = firstName;
  if(lastName) user.lastname = lastName;
  if(age) user.age = age;
  
  res.send(`User with the id ${id} has been updated`);
}