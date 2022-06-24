import { createSlice } from '@reduxjs/toolkit';

const getInitTodos = () => {
  return JSON.parse(localStorage.getItem('todos'));
}

export const todosSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: (getInitTodos()) ? getInitTodos() : [],
    isLoading: false
  },
  reducers: {
    startLoadingTodo: (state) => state.isLoading = true,
    setTodo: (state, action) => {
      state.isLoading = false;
      state.todos = [action.payload, ...state.todos]
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
});
export const { startLoadingTodo, setTodo, deleteTodo } = todosSlice.actions;