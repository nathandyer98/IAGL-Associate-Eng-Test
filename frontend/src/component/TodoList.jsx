import React, { useEffect } from "react";
import Todo from "./Todo";
import { fetchTodos } from "../actions/todoActions";
import { connect } from "react-redux";

const TodoList = ({ todos, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => (
            <Todo key={`todo-${index}`} todo={todo.task} />
          ))
        : "No todos, yay!"}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { fetchTodos })(TodoList);
