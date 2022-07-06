import React, { useState } from 'react';
import { Todo } from '../hooks/usetodos';

interface ListTodoProps{
  todo:Todo;
  editValue: (value:string, id: string) => void
}
export function ListTodo({ todo, editValue }:ListTodoProps) {
  const [edit, setEditTodo] = useState<boolean>(false);

  function editTodo() {
    setEditTodo(!edit);
  }
  return (
    <li>
      {todo.value}
      {edit && (
      <input
        type="text"
        value={todo.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          editValue(e.target.value, todo.key);
        }}
      />
      )}

      <button
        type="button"
        onClick={() => {
          editTodo();
        }}
      >
        Update
      </button>

    </li>
  );
}
