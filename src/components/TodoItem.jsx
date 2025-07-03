import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, editTodo, deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() !== '') {
      dispatch(editTodo({ id: todo.id, newText: editText }));
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button 
            onClick={handleEdit}
            className="save-button"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
            {todo.text}
          </span>
          <div className="todo-actions">
            <button 
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="action-button complete-button"
            >
              {todo.completed ? '✓' : '○'}
            </button>
            <button 
              onClick={() => setIsEditing(true)}
              className="action-button edit-button"
            >
              ✎
            </button>
            <button 
              onClick={() => {
                if (window.confirm('Are you sure you want to delete this todo?')) {
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