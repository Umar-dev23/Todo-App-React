import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, filter } = useSelector(state => state.todos);
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.length === 0 ? (
        <div className="empty-state">
          <i>📝</i>
          <p>No todos found!</p>
          <p>Add a new task to get started</p>
        </div>
      ) : (
        filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default TodoList;