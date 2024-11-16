const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    addToDo: async (todo) => {
      return await repository.addToDo(todo)
    }
  };
};

module.exports = todoService;