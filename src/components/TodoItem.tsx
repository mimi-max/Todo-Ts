import React, { useState } from 'react';
import { MdEdit, MdDelete, MdCheck } from 'react-icons/md';
import { Todo } from '../hooks/usetodos';
import styles from './TodoItem.module.css';

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
    <div className={styles.todoItemContainer}>
      {!isEdit && <div className={styles.todoItem}>{todo.value}</div>}
      {isEdit && (
        <form
          className={styles.newFormTodoItem}
          onSubmit={(e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            updateTodoValue(updateValue, todo.key);
            toggleEditMode();
          }}
        >
          <input
            className={styles.newTodoItem}
            value={updateValue}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUpdateValue(e.target.value);
            }}
          />
          <button type="submit" aria-label="Save" className={styles.buttonSubmitUpdate}><MdCheck /></button>
        </form>

      )}
      {!isEdit && (
      <button
        className={styles.updateItemButton}
        type="button"
        onClick={() => {
          toggleEditMode();
        }}
      >
        <MdEdit />
      </button>
      )}
      {
        !isEdit
        && (
        <button
          className={styles.deleteItemButton}
          type="button"
          onClick={() => {
            deleteTodoItem(todo.key);
          }}
        >
          <MdDelete />
        </button>
        )
      }

    </div>
  );
}
