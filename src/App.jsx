import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import './styles/styles.css';

function App() {
  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <AddTodo />
      <FilterButtons />
      <TodoList />
    </div>
  );
}

export default App;