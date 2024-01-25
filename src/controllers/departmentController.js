const departmentService = require('../services/departmentService');

const departmentController = {
  getAllDepartments: async (req, res) => {
    try {
      const departments = await departmentService.getAllDepartments();
      res.status(200).json(departments);
    } catch (error) {
      console.error('Error getting departments:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getDepartmentById: async (req, res) => {
    const { departmentId } = req.params;
    try {
      const department = await departmentService.getDepartmentById(departmentId);
      res.status(200).json(department);
    } catch (error) {
      console.error('Error getting department by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createDepartment: async (req, res) => {
    const { name, managerId } = req.body;
    try {
      const newDepartment = await departmentService.createDepartment(name, managerId);
      res.status(201).json(newDepartment);
    } catch (error) {
      console.error('Error creating department:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateDepartment: async (req, res) => {
    const { departmentId } = req.params;
    const { name } = req.body;
    try {
      const updatedDepartment = await departmentService.updateDepartment(departmentId, name);
      res.status(200).json(updatedDepartment);
    } catch (error) {
      console.error('Error updating department:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteDepartment: async (req, res) => {
    const { departmentId } = req.params;
    try {
      const deletedDepartment = await departmentService.deleteDepartment(departmentId);
      res.status(200).json(deletedDepartment);
    } catch (error) {
      console.error('Error deleting department:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = departmentController;
