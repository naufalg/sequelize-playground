const express = require("express");
const app = express();
const PORT = 5000;

const sequelize = require("./config/dbSQL");

// models
const Students = require("./models/Students");
const Exschools = require("./models/Exschools");

// routes
const studentsRouter = require("./routes/Students");
const exschoolsRouter = require("./routes/Exschools");

sequelize
  .authenticate()
  .then(() => {
    console.log("sequelize connected");
    console.log("table created");
    Students.sync();
    Exschools.sync();
  })
  .catch((err) => {
    console.log("sequelize failed: ", err);
  });

app.get("/", (req, res) => {
  res.send("get route - sequelize");
});

app.use("/students", studentsRouter);
app.use("/exschools", exschoolsRouter);

app.listen(PORT, () => {
  console.log(`server running in port: ${PORT}`);
});
