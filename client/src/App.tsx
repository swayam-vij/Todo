import React, { useState } from "react";
import InputBox from "./Components/InputBox";
import List from "./Components/List";
import { Todo } from "./model";

const bg = "https://images.unsplash.com/photo-1685926942337-aff9f087a8b8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="min-h-screen w-full"
      style={{
        backgroundImage : `url(${bg})`,
          fontFamily: "'Edu AU VIC WA NT Hand', cursive",
          fontOpticalSizing: "auto",
          fontWeight: 700, // Set your desired weight here
          fontStyle: "normal",
      }}>
      <span className="flex items-center justify-center text-white text-6xl font-EAVWNH py-10">TODO's</span>
      <InputBox todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};




export default App