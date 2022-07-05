import React from 'react';
import { useTodoValue } from '../hooks/usetodovalue';
import { useTodos } from '../hooks/usetodos';
import { ListTodo } from './ListTodo';

function Form() {
  const { todoValue, changeTodoValue } = useTodoValue();
  const {
    errorMessage, setErrorMessage, todos, addTodoValue,
  } = useTodos();

  return (
    <>
      { errorMessage && (
      <div className="alert alert-danger" role="alert">
        {errorMessage}
      </div>
      )}
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addTodoValue(todoValue);
          changeTodoValue('');
        }}
      >
        <input
          type="text"
          value={todoValue}
          onChange={(e) => {
            changeTodoValue(e.target.value);
            setErrorMessage('');
          }}
        />
        <input type="submit" />
      </form>
      <ul>
        {
          todos.map((todo) => <ListTodo key={todo.key} todo={todo} />)
        }
      </ul>
    </>
  );
}

export default Form;
