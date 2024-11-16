const express = require('express');
const repository = require('./repository/todo.repository');
const todoService = require('./service/todo.service')(repository);

const router = express.Router();

router.get('/api/todo', async (req, res) => {
    try {
        const todos = await todoService.getTodos();
        res.status(200).json(todos);
    } catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
  });

  /**
  POST /api/todo
  {
   "task": "Some API"
  }

   {
    "todos": [
      {
        "task": "Some API"
      }
    ]
   }
  **/

module.exports = router;