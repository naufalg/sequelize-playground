const Exschools = require("../../models/Exschools");
const Students = require("../../models/Students");

module.exports = {
  getAllStudents: (req, res) => {
    console.log("get all students");
    Students.findAll({
      include: [Exschools],
      attributes: { exclude: ["exschool_id", "exschoolId"] },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log("sequelize failed: ", err);
      });
  },
};
