import React from 'react';
import { useTodoValue } from '../hooks/usetodovalue';

function Form() {
  const { todoValue, changeTodoValue } = useTodoValue();

  return (
    <form action="">
      <input
        type="text"
        value={todoValue}
        onChange={(e) => {
          changeTodoValue(e.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
}

export default Form;
