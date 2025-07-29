import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState();
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useDispatch();
  function handleEdit(id) {
    dispatch(updateTodo({ id: todo.id, text: editText }));
    setIsEditing(false);
  }
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button
            onClick={() => {
              handleEdit(todo.id);
            }}
            className="save-button"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.text}
          </span>
          <div className="todo-actions">
            <button
              onClick={() => setIsEditing(true)}
              className="action-button edit-button"
            >
              ✎
            </button>
            <button
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this todo?")
                ) {
                  dispatch(deleteTodo(todo.id));
                }
              }}
              className="action-button delete-button"
            >
              ×
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
