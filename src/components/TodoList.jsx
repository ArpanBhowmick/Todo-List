import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList, showCompletedTab } = useContext(TodoContext);

  const visibleTodos = todoList.filter(
    (todo) => todo.completed === showCompletedTab
  );

  if (visibleTodos.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No task to do </p>;
  }

  return (
    <>
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
