const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  position: String,
  salary:Number ,
  date:String
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
