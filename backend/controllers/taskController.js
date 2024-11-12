const Task = require('../models/task'); // Adjust path as needed

// CREATE Task
/**
 * POST: http://localhost:4003/api/task
 * @desc    Create a new task
 * @param   {
*            "title": "Task Title",
*            "description": "Task Description",
*            "dueDate": "2024-12-31",
*            "priority": "high",
*            "user": "64d123e45f0c123456789abc"
*          }
*/
const createTask = async (req, res) => { 
    try {
        const data = req.body;
        
        // Validate priority field
        if (!["low", "medium", "high"].includes(data.priority)) {
            return res.status(400).json({ error: "'priority' must be one of 'low', 'medium', or 'high'." });
        }

        const newTask = new Task(data);
        await newTask.save();

        const populatedTask = await Task.findById(newTask._id)
            .populate({
                path: 'user',
                select: '-password -__v'
            });
        res.status(201).json(populatedTask);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

// READ All Tasks
/**
 * GET: http://localhost:4003/api/tasks
 * @desc    Retrieve all tasks
 */
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
            .populate({
                path: 'user',
                select: '-password -__v'
            })
            .select('-__v');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// READ Task by ID
/**
 * GET: http://localhost:4003/api/task/:id
 * @desc    Retrieve a specific task by ID
 * @param   :id (Task ID)
 */
const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id)
            .populate('user');
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE Task
/**
 * PUT: http://localhost:4003/api/task/:id
 * @desc    Update a specific task by ID
 * @param   :id (Task ID)
 * @body    {
 *            "title": "Updated Title",
 *            "description": "Updated Description",
 *            "dueDate": "2025-01-15",
 *            "priority": "medium"
 *          }
 */
const updateTask = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, updateData, { new: true })
            .populate({
                path: 'user',
                select: '_id' // Only select the _id field
            })
            .select('-__v');

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE Task
/**
 * DELETE: http://localhost:4003/api/task/:id
 * @desc    Delete a specific task by ID
 * @param   :id (Task ID)
 */
const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
