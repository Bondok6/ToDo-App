import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import '../styles/TodoContainer.css';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    if (status === 'Completed') {
      setFilterTodos(todos.filter((todo) => todo.completed === true));
    } else if (status === 'Uncompleted') {
      setFilterTodos(todos.filter((todo) => todo.completed === false));
    } else {
      setFilterTodos(todos);
    }
  }, [todos, status]);

  useEffect(() => {
    if (!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  return (
    <>
      <Header />

      <main>
        <div className="todo-container">
          <TodoFilter setStatus={setStatus} />

          <TodoInput
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
          />

          <TodoList
            filterTodos={filterTodos}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </main>
    </>
  );
};

export default TodoContainer;
