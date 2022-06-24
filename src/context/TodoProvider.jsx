import { useState } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {

const [todo, setTodoModify] = useState();


  return (
    <TodoContext.Provider value={ { todo, setTodoModify } }>
      { children }
    </TodoContext.Provider>
  )
}
