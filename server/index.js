const express = require('express');
const {getAllEmployees} =require("../database/index.js")
const db = require('../database');
const Employee = require("../database/employee.js");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

//GET ALL employees
app.get('/api/employee', (req, res) => {
  getAllEmployees((err,results)=>{
    err?res.status((500)).send(err):res.status(200).json(results)
   })
  console.log(getAllEmployees)
});
//CREATE A NEW EMPLOYEE
app.post('/api/employee', function(req, res) {
	// create mongose method to create a new record into collection
	Employee.create({
		firstName : req.body.firstName,
		lastName:req.body.lastName,
		email:req.body.email,
		position:req.body.position,
		salary : req.body.salary,
		date : req.body.date
	}, function(err, results) {
    err?res.status((500)).send(err):res.status(200).json(results)
	});

});

//DELETE ONE ELEMENT
app.delete('/api/employee/:employee_id', function(req, res) {
	console.log(req.params.employee_id);
	let id = req.params.employee_id;
	Employee.remove({
		_id : id
	}, function(err) {
		if (err)
			res.send(err);
		else
			res.send('Successfully! Employee has been Deleted.');	
	});
});

//CREATE A NEW EMPLOYEE
app.put('/api/employee/:employee_id', function(req, res) {
	// create mongose method to update a existing record into collection
	let id = req.params.employee_id;
	var data = {
		// firstName : req.body.firstName,
		// lastName:req.body.lastName,
		// email:req.body.email,
		salary : req.body.salary,
		// position:req.body.position,
		// date : req.body.date
	}
	// save the user
	Employee.findByIdAndUpdate(id, data, function(err, employee) {
	if (err) throw err;
 
	res.send('Successfully! Employee updated  ');
	});
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
