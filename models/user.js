const Sequelize = require("sequelize");

module.exports = (Sequelize) => {
  const user = Sequelize.define("user", {
    id: {
      type: Sequelize.STRING,
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
