import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React-Deneme",
      completed: false,
    },
    {
        id: 2,
        text: "Learn React-Deneme2",
        completed: true,
      },
      {
        id: 3,
        text: "Learn React-Deneme3",
        completed: false,
      },
  ]);

  const values = {
    todos,
    setTodos,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call inside TodoProvider component");
  }
  return context;
};
