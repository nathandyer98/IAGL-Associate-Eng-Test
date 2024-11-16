const express = require('express');
const repository = require('./repository/todo.repository');
const todoService = require('./service/todo.service')(repository);

server.get('/api/todo', async (req, res) => {
    res.json(await todoService.getTodos());
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