import React from 'react';
import { Todo } from '../hooks/usetodos';

interface ListTodoProps{
  todo:Todo
}
export function ListTodo({ todo }:ListTodoProps) {
  return (
    <li>{todo.value}</li>
  );
}
