import React from 'react';
import { useTodoValue } from '../hooks/usetodovalue';
import { useTodos } from '../hooks/usetodos';

function Form() {
  const { todoValue, changeTodoValue } = useTodoValue();
  const { todos, addTodoValue } = useTodos();

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addTodoValue(todoValue);
        }}
      >
        <input
          type="text"
          value={todoValue}
          onChange={(e) => {
            changeTodoValue(e.target.value);
          }}
        />
        <input type="submit" />
      </form>

      <ul>
        {
          todos.map((todo) => <li key={todo.key}>{todo.value}</li>)
        }
      </ul>
    </>
  );
}

export default Form;
