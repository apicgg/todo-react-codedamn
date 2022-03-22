import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(['learn react', 'earn more']);
  const [task, setTask] = useState('');

  function createTodo(event) {
    event.preventDefault();
    setTodos((oldTodos) => {
      setTask('');
      return [...oldTodos, task];
    });
  }

  // With JS for Enter key functionality
  // function checkForEnterKey(e) {
  //   if (e.keyCode === 13) {
  //     createTodo();
  //   }
  // }

  return (
    <div>
      <h1>Best Todo App Ever</h1>

      <form onSubmit={createTodo}>
        <input
          type='text'
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
          // onKeyDown={checkForEnterKey}
        />
        <button type='submit'>Create Todo</button>
      </form>

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
export default App;
