import { Todo } from "../model"
import SingleTodo from "./SingleTodo"


interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const List: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="">
      {todos?.map((todo) => (
        <SingleTodo
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default List