const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  database: "testing",
  username: "root",
  password: "admin",
});

module.exports = sequelize;
