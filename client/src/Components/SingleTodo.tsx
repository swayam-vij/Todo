import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";

const SingleTodo: React.FC<{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form
      className="flex flex-col items-center justify-center min-w-full bg-gray-800 mb-2 p-4 rounded-lg shadow-md"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="text-center text-gray-400">{todo.todo}</s>
      ) : (
        <span className="text-center text-white">{todo.todo}</span>
      )}
      <div className="flex space-x-3">
        <span
          className="cursor-pointer text-blue-500 hover:text-blue-400"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit size={24} />
        </span>
        <span
          className="cursor-pointer text-red-500 hover:text-red-400"
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete size={24} />
        </span>
        <span
          className="cursor-pointer text-green-500 hover:text-green-400"
          onClick={() => handleDone(todo.id)}
        >
          <MdDone size={24} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
