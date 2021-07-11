const Sequelize = require('sequelize');
const db = require('../config/database');

const user = db.define('gig', {
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
})

module.exports = user;