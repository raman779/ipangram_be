// /backend/src/controllers/employeeController.js
const employeeService = require('../services/employeeService');

const employeeController = {
  getAllEmployees: async (req, res) => {
    try {
      const employees = await employeeService.getAllEmployees();
      res.status(200).json(employees);
    } catch (error) {
      console.error('Error getting employees:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getEmployeeById: async (req, res) => {
    const { employeeId } = req.params;
    try {
      const employee = await employeeService.getEmployeeById(employeeId);
      res.status(200).json(employee);
    } catch (error) {
      console.error('Error getting employee by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createEmployee: async (req, res) => {
    const { name, location, departmentId } = req.body;
    try {
      const newEmployee = await employeeService.createEmployee(name, location, departmentId);
      res.status(201).json(newEmployee);
    } catch (error) {
      console.error('Error creating employee:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateEmployee: async (req, res) => {
    const { employeeId } = req.params;
    const { name, location } = req.body;
    try {
      const updatedEmployee = await employeeService.updateEmployee(employeeId, name, location);
      res.status(200).json(updatedEmployee);
    } catch (error) {
      console.error('Error updating employee:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteEmployee: async (req, res) => {
    const { employeeId } = req.params;
    try {
      const deletedEmployee = await employeeService.deleteEmployee(employeeId);
      res.status(200).json(deletedEmployee);
    } catch (error) {
      console.error('Error deleting employee:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = employeeController;
