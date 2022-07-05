import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  value: string,
  key: string
}
interface UseTodos {
  todos: Todo[],
  errorMessage:string,
  addTodoValue: (todoValue: string) => void;
  setErrorMessage: (errorMessage: string) => void;
}

export function useTodos(): UseTodos {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  function addTodoValue(todoValue: string): void {
    if (todoValue) {
      setTodos((prevTodos) => [...prevTodos, {
        value: todoValue,
        key: uuidv4(),
      }]);
    } else {
      setErrorMessage('Please enter your Todo in input');
    }
  }
  return {
    todos, addTodoValue, errorMessage, setErrorMessage,
  };
}
