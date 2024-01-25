const express = require('express');
const departmentController = require('../controllers/departmentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', departmentController.getAllDepartments);
router.get('/:departmentId', departmentController.getDepartmentById);
router.post('/', authMiddleware, departmentController.createDepartment);
router.put('/:departmentId', authMiddleware, departmentController.updateDepartment);
router.delete('/:departmentId', authMiddleware, departmentController.deleteDepartment);

module.exports = router;
