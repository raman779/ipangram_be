const express = require('express');
const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', employeeController.getAllEmployees);
router.get('/:employeeId', employeeController.getEmployeeById);
router.post('/', authMiddleware, employeeController.createEmployee);
router.put('/:employeeId', authMiddleware, employeeController.updateEmployee);
router.delete('/:employeeId', authMiddleware, employeeController.deleteEmployee);

module.exports = router;
