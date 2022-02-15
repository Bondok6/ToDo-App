import React, { useState } from 'react';
import TodoInput from './TodoInput';

const TodoContainer = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoInput
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
    </>
  );
};

export default TodoContainer;
