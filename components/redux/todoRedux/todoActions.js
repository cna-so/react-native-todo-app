import todoTyps from "./todoTyps";

const { ADD_TODO, DELETE_TODO } = todoTyps;

export const AddTask = (value) => ({
  type: 'ADD_TODO',
  value,
});

export const DeleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
