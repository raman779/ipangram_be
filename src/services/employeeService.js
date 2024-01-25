// /backend/src/services/employeeService.js
const Employee = require('../models/Employee');

const employeeService = {
  getAllEmployees: async () => {
    try {
      const employees = await Employee.find();
      return employees;
    } catch (error) {
      console.error('Error getting employees:', error);
      throw error;
    }
  },

  getEmployeeById: async (employeeId) => {
    try {
      const employee = await Employee.findById(employeeId);
      return employee;
    } catch (error) {
      console.error('Error getting employee by ID:', error);
      throw error;
    }
  },

  createEmployee: async (name, location, departmentId) => {
    try {
      const newEmployee = new Employee({ name, location, department: departmentId });
      await newEmployee.save();
      return newEmployee;
    } catch (error) {
      console.error('Error creating employee:', error);
      throw error;
    }
  },

  updateEmployee: async (employeeId, name, location) => {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        employeeId,
        { name, location },
        { new: true }
      );
      return updatedEmployee;
    } catch (error) {
      console.error('Error updating employee:', error);
      throw error;
    }
  },

  deleteEmployee: async (employeeId) => {
    try {
      const deletedEmployee = await Employee.findByIdAndRemove(employeeId);
      return deletedEmployee;
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  },
};

module.exports = employeeService;
