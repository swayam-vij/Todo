import { useRef } from "react";

  interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
  }
  
  const InputBox: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
  
    return (
      <form
        className="flex items-center justify-center gap-2 p-2"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          type="text"
          placeholder="Enter a Todo"
          value={todo}
          ref={inputRef}
          onChange={(e) => setTodo(e.target.value)}
          className="w-4/5 h-12 rounded-xl p-2"
        />
        <button type="submit" className="rounded-xl text-2xl text-white bg-rose-500 px-3 py-2 hover:outline">
          Enter
        </button>
      </form>
    );
  };

export default InputBox