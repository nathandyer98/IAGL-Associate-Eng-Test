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

const addTodo = async (todo) => {
  todoList.todos.push({ task: todo });
  return todo;
}

module.exports = { getTodos};