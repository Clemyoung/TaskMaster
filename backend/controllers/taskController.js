const Task = require('../models/task');

/**
 * Create the task
 * R - GetAllTasks
 * U - UpdateTask
 * D - DeleteTask
 */

const createTask = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
    
        // validate priority field
        if (!["low", "medium", "high"].includes(data.priority)) {
            return res.status(400).json({
                error: "'priority' must be one of 'low', 'medium', or 'high'."
            });
        }
    
        const newTask = new Task(data);
        await newTask.save();
    
        res.status(201).json(newTask);
    } catch (error) {
        console.log(`error caught when creating a task - ${error}`);
        res.status(400).json({error: error.message});
    }
}

module.exports = {createTask};