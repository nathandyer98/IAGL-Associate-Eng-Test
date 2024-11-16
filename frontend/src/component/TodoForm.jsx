import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, fetchTodos } from "../actions/todoActions";

const TodoForm = ({ addTodo, fetchTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo({ task: newTodo }).then(() => fetchTodos());
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Enter a new todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default connect(null, { addTodo, fetchTodos })(TodoForm);
