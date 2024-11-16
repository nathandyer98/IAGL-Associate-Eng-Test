const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todo.route');

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.use('/api', todoRoutes);

  return server;
};
module.exports = server;