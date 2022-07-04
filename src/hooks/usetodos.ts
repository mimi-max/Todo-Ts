import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  value: string,
  key: string
}
interface UseTodos {
  todos: Todo[],
  addTodoValue: (todoValue: string) => void;
}

export function useTodos(): UseTodos {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodoValue(todoValue: string): void {
    setTodos((prevTodos) => [...prevTodos, {
      value: todoValue,
      key: uuidv4(),
    }]);
  }
  return { todos, addTodoValue };
}
