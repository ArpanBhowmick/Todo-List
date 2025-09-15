import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList, showCompletedTab } = useContext(TodoContext);

  const visibleTodos = todoList.filter(
    (todo) => todo.completed === showCompletedTab
  );

  if (visibleTodos.length === 0) {
    return <p>No task here to do</p>;
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
