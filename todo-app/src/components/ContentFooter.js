import React from "react";
import { useTodo } from "../context/TodoContext";

function ContentFooter() {
  const { todos, setTodos, filter, setFilter } = useTodo();

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const hasCompletedTodos = todos.some((todo) => todo.completed);

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <footer className="footer" style={{ display: todos.length === 0 ? 'none' : 'block' }}>
      {activeTodosCount > 0 && (
        <span className="todo-count">
          <strong>{activeTodosCount}</strong> item
          {activeTodosCount !== 1 && "s"} left
        </span>
      )}

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setFilter("all")}
            className={filter === "all" && todos.length > 0 ? "selected" : ""}
          >
            {todos.length > 0 && "All"}
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("active")}
            className={
              filter === "active" && todos.length > 0 ? "selected" : ""
            }
          >
            {todos.length > 0 && "Active"}
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("completed")}
            className={
              filter === "completed" && todos.length > 0 ? "selected" : ""
            }
          >
            {todos.length > 0 && "Completed"}
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        {hasCompletedTodos && "Clear completed"}
      </button>
    </footer>
  );
}

export default ContentFooter;
