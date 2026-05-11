const express = require('express');
const router = express.Router();
const { AllTasks, createTask, getTaskById, updateTask, deleteTask } = require('../controllers/task');

// GET - Listar todas as tarefas
router.get('/', AllTasks);

// POST - Criar nova tarefa
router.post('/', createTask);

// GET - Obter tarefa por ID
router.get('/:id', getTaskById);

// PUT - Atualizar tarefa
router.put('/:id', updateTask);

// DELETE - Deletar tarefa
router.delete('/:id', deleteTask);

module.exports = router;
 