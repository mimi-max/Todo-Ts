import React, { useState } from 'react';
import { Todo } from '../hooks/usetodos';

interface TodoItemProps{
  todo:Todo;
  updateTodoValue: (value:string, id: string) => void;
  deleteTodoItem: (id: string) => void
}
export function TodoItem({ todo, updateTodoValue, deleteTodoItem }:TodoItemProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState<string>(todo.value);
  function toggleEditMode() {
    setIsEdit(!isEdit);
  }
  return (
    <div>
      {!isEdit && todo.value}
      {isEdit && (
        <form
          onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            updateTodoValue(updateValue, todo.key);
            toggleEditMode();
          }}
        >
          <input
            value={updateValue}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUpdateValue(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>

      )}
      {!isEdit && (
      <button
        type="button"
        onClick={() => {
          toggleEditMode();
        }}
      >
        Update
      </button>
      )}
      <button
        type="button"
        onClick={() => {
          deleteTodoItem(todo.key);
        }}
      >
        delete
      </button>
    </div>
  );
}
