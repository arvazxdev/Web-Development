const mg = require("mongoose");

const employeeSchema = new mg.Schema({
    name: String,
    salary: Number,
    city: String,
    isManager: Boolean
})

const Employee = mg.model("Employee", employeeSchema)
module.exports = Employee;