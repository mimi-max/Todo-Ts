import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function Form() {
  const [todo, setTodo] = useState('');

  return (
    <form action="" >
      <input type="text" name="" id="" />
      <input type="submit" />
    </form>
  );
}

export default Form;
