const express = require('express');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/task', authMiddleware, createTask);
router.get('/tasks', authMiddleware, getTasks);
router.get('/task/:id', authMiddleware, getTaskById); 
router.put('/task/:id', authMiddleware, updateTask);
router.delete('/task/:id', authMiddleware, deleteTask);

module.exports = router; 