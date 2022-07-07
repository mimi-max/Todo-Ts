import React from 'react';
import { useTodoValue } from '../hooks/usetodovalue';
import { useTodos } from '../hooks/usetodos';
import { TodoItem } from './TodoItem';
import styles from './Form.module.css';

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
        className={styles.form}
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          addTodoValue(todoValue);
          changeTodoValue('');
        }}
      >
        <input
          className={styles.inputTodo}
          type="text"
          value={todoValue}
          placeholder="Type your item"
          onChange={(e) => {
            changeTodoValue(e.target.value);
            setErrorMessage('');
          }}
        />
        <input type="submit" className={styles.inputTodoSubmit} />
      </form>
      <div className={styles.Todos}>
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
