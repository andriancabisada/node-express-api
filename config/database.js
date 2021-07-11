

import { Sequelize  } from 'sequelize';

const db = new Sequelize('codegig', 'postgres', 'password311', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });

  export default db;