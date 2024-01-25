const Department = require('../models/Department');

const departmentService = {
  getAllDepartments: async () => {
    try {
      const departments = await Department.find();
      return departments;
    } catch (error) {
      console.error('Error getting departments:', error);
      throw error;
    }
  },

  getDepartmentById: async (departmentId) => {
    try {
      const department = await Department.findById(departmentId);
      return department;
    } catch (error) {
      console.error('Error getting department by ID:', error);
      throw error;
    }
  },

  createDepartment: async (name, managerId) => {
    try {
      const newDepartment = new Department({ name, manager: managerId });
      await newDepartment.save();
      return newDepartment;
    } catch (error) {
      console.error('Error creating department:', error);
      throw error;
    }
  },

  updateDepartment: async (departmentId, name) => {
    try {
      const updatedDepartment = await Department.findByIdAndUpdate(
        departmentId,
        { name },
        { new: true }
      );
      return updatedDepartment;
    } catch (error) {
      console.error('Error updating department:', error);
      throw error;
    }
  },

  deleteDepartment: async (departmentId) => {
    try {
      const deletedDepartment = await Department.findByIdAndRemove(departmentId);
      return deletedDepartment;
    } catch (error) {
      console.error('Error deleting department:', error);
      throw error;
    }
  },
};

module.exports = departmentService;
