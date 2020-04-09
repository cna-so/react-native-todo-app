import todoTyps from "./todoTyps";
const {
ADD_TODO,
DELETE_TODO
} = todoTyps;
const initialTodoState = {
  todos: [],
};
const TodoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case 'ADD_TODO':{
      const id = Math.random();
      const informationTask = {
          value: action.value,
          id,
      };
      return {
        ...state,
        todos: [...state.todos, informationTask],
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    }
    default :
    return state
  }
};
export default TodoReducer;