const Sequelize = require('sequelize');

const db = new Sequelize('testdb', 'sa', 'password311', {
    host: 'localhost',
    dialect: 'mssql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });

  module.exports = db;