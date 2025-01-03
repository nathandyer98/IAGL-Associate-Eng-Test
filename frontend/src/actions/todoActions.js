import axios from "axios";
import { FETCH_TODOS, ADD_TODO } from "./types/todoTypes";

export function fetchTodos() {
  return function(dispatch) {
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data.todos));
    })
    .catch((error) => {
      console.error("Error fetching todo:", error);
    })
  };
};


export function addTodo(todo) {
  return function(dispatch) {
    return axios.post("http://localhost:9091/api/todo", todo).then(({ data }) => {
        dispatch(appendTodo(data));
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      }) 
  };  
};

function setTodos(data) {
  return {
    type: FETCH_TODOS,
    payload: data
  };
};

function appendTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
};