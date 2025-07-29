import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./../redux/todoSlice";

const AddTodo = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Add
      </button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default AddTodo;
