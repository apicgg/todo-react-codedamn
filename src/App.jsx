import React, { useState } from 'react';

let globalId = 0;

function App() {
  const [todos, setTodos] = useState([{ todo: 'hello', id: 1 }]);
  const [task, setTask] = useState('');

  function createTodo(event) {
    event.preventDefault();
    setTodos((oldTodos) => {
      setTask('');
      return [...oldTodos, { todo: task, id: globalId++ }];
    });
  }

  // With JS for Enter key functionality
  // function checkForEnterKey(e) {
  //   if (e.keyCode === 13) {
  //     createTodo();
  //   }
  // }

  function deleteTodo(itemId) {
    setTodos((oldTodos) => {oldTodos.filter((item) => item.id !== itemId)};
  }

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
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <li>
                {item.todo} {item.id}
              </li>
              <button
                onClick={() => {
                  deleteTodo(item.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
