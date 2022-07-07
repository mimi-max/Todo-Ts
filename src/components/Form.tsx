import React from 'react';
import { useTodoValue } from '../hooks/usetodovalue';
import { useTodos } from '../hooks/usetodos';
import { TodoItem } from './TodoItem';

function Form() {
  const { todoValue, changeTodoValue } = useTodoValue();
  const {
    errorMessage, setErrorMessage, todos, addTodoValue, updateTodoValue, deleteTodoItem,
  } = useTodos();

  return (
    <>
      {errorMessage && (
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
      <div>
        {
          todos.map((todo) => (
            <TodoItem
              key={todo.key}
              todo={todo}
              updateTodoValue={updateTodoValue}
              deleteTodoItem={deleteTodoItem}
            />
          ))
        }
      </div>
    </>
  );
}

export default Form;
