import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import { List } from "./List";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#333";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#f0f0f0";
    }
  };

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <div className={`app ${theme}`}>
      <nav className="navbar">
        <h1>Todo List</h1>
      </nav>

      <div className="theme-switch">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <Form onSubmit={addTodo} />
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
