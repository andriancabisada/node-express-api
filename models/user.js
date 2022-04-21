const Sequelize = require("sequelize");
const db = require("../config/database");

module.exports = (Sequelize) => {
  const user = Sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      field: "id",
    },
    firstname: {
      type: Sequelize.STRING,
      field: "firstname",
    },
    lastname: {
      type: Sequelize.STRING,
      field: "lastname",
    },
    age: {
      type: Sequelize.INTEGER,
      field: "age",
    },
  });
  return user;
};
