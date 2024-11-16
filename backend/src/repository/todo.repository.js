let todoList = {
  todos: [
    {
      task: "This is a todo example"
    }
  ]
};

const getTodos = async () => {
  return todoList
}

module.exports = { getTodos};