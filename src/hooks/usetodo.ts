// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';


// interface Todo {
//   value:string,
//   key:string
// }
// interface UseTodos {
//   todos:Todo,
//   handleTodo:(inputValue: string) => void;
// }

// export function useTodos():UseTodos {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   function handleTodo() {
//     setTodos((prevTodos) => [...prevTodos, {
//       value: inputValue,
//       key: uuidv4(),
//     }]);
//   }
//   return { todos, handleTodo()};
// }
