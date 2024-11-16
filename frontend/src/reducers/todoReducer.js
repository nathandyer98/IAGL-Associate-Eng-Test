import { FETCH_TODOS } from "../actions/types/todoTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
}