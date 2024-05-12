import { createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      /*
      id:1,
      todo: abcd
      completed: false 

  */
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleTodo: () => {},
});
