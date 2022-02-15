import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = ({ inputText, setInputText, todos, setTodos }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        completed: false,
        text: inputText,
      },
    ]);
    // Clear input
    setInputText('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add Task"
        value={inputText}
        onChange={inputHandler}
      />
    </form>
  );
};

export default TodoInput;
