import React, { useState } from "react";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <form>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
