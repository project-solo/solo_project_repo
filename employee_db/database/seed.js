const { db } = require("./index.js");
const Employee = require("./employee.js");
const sampleData = require("../data.json");



const insertSampleEmployee = function () {
  Employee.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};


insertSampleEmployee();
