const express = require('express');
const repository = require('../repository/todo.repository');
const todoService = require('../service/todo.service')(repository);

const router = express.Router();

router.get('/todo', async (req, res) => {
    try {
        const todos = await todoService.getTodos();
        res.status(200).json(todos);
    } catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
  });

router.post('/todo', async (req, res) => {
    try {
        const { task } = req.body;
        if(!task) {
            return res.status(400).json({ error: "Task is required" });
        }
        const newTodo = await todoService.addTodo(task);
        res.status(201).json(newTodo);
    } catch (error) {
        console.error("Error adding todo", error);
        res.status(500).json({ error: "Failed adding todo" });
    }
  });

module.exports = router;