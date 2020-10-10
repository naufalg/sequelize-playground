const Exschools = require("../../models/Exschools");

module.exports = {
  getAllExschools: (req, res) => {
    console.log("get all exschools");
    Exschools.findAll()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log("sequelize failed: ", err);
      });
  },
};
