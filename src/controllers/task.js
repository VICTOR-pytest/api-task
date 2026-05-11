const mongoose = require('mongoose');
const Task = require('../models/task');

/**
 * Obter todas as tarefas
 * GET /task
 */
const AllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * Criar nova tarefa
 * POST /task
 */
const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validação
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'Title and description are required'
            });
        }

        const newTask = new Task({ title, description });
        await newTask.save();

        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: newTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * Obter tarefa por ID
 * GET /task/:id
 */
const getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;

        // Validar ID do MongoDB
        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid task ID'
            });
        }

        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * Atualizar tarefa
 * PUT /task/:id
 */
const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const updatedData = req.body;

        // Validar ID do MongoDB
        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid task ID'
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            updatedData,
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            data: updatedTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * Deletar tarefa
 * DELETE /task/:id
 */
const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;

        // Validar ID do MongoDB
        if (!mongoose.Types.ObjectId.isValid(taskId)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid task ID'
            });
        }

        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Task deleted successfully',
            data: deletedTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    AllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
};
