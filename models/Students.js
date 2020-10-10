const { Sequelize, INTEGER } = require("sequelize");
const sequelize = require("../config/dbSQL");
const Exschools = require("./Exschools");

const Students = sequelize.define(
  "students",
  {
    student_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    birth_date: Sequelize.DATE,
    exschool_id: {
      type: Sequelize.INTEGER,
      // references: { key: "exschool_id" },
    },
  },
  {
    underscored: true,
    timestamps: false,
    freezeTableName: true,
  }
);
Students.belongsTo(Exschools);

module.exports = Students;
