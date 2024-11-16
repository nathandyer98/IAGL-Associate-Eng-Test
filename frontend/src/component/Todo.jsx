import React from "react";

const Todo = ({ todo }) => {
  return (
    <li className="todo-item">
      <span className="todo-item__text">{todo}</span>
    </li>
  );
};

export default Todo;
