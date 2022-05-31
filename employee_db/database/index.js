const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/employee";
const Employee = require("./employee.js");

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

//GET ALL ELEMENT FROM THE DATABASE
const getAllEmployees = function (cb) {
  Employee.find({},(err,res)=>{
   err?cb(err,null):cb(null,res)
  })
  }
  
//The rest of functions will be created in the server to try with multiple ways of coding

module.exports = {
  db,
  getAllEmployees
};
