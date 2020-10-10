const { Sequelize, INTEGER } = require("sequelize");
const sequelize = require("../config/dbSQL");

const Exschools = sequelize.define(
  "exschools",
  {
    exschool_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
  },
  {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Exschools;
