import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useContext(TodoContext);
//   console.log("TodoList:", todoList)

  return (
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
