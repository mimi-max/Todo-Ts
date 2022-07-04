import { useState } from 'react';

interface UseAddTodo {
  todoValue: string,
  changeTodoValue: (value:string) => void
}

export function useTodoValue(): UseAddTodo {
  const [todoValue, setTodoValue] = useState<string>('');

  function changeTodoValue(value:string): void {
    setTodoValue(value);
  }
  return { todoValue, changeTodoValue };
}
