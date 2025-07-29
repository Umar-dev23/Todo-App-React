import React, { useState } from "react";
import { deleteTodo } from "../redux/todoSlice";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const todos=useSelector((State) => State.todos);
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <div className="empty-state">
          <i>📝</i>
          <p>No todos found!</p>
          <p>Add a new task to get started</p>
        </div>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
