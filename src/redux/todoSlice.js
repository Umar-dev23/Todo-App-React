import { createSlice } from '@reduxjs/toolkit';

// Load initial todos from localStorage
const loadTodos = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const initialState = {
  todos: loadTodos(),
  filter: 'all', // 'all', 'completed', 'pending'
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.text.trim() !== '') {
        state.todos.push({
          id: Date.now(),
          text: action.payload.text,
          completed: false,
        });
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo && newText.trim() !== '') {
        todo.text = newText;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;