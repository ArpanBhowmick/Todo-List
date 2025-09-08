import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";


const Tabs = () => {


  const { todoList, dispatchTodoList } = useContext(TodoContext);

  return (
    <div className="mb-4">
      <button
        className={`secondary-btn ${
          todoList === false ? "bg-green-600" : "bg-[rgb(71,71,71)]"
        }`}
        onClick={() => dispatchTodoList({ type: "SET_TODO_TAB" })}
      >
        Todo
      </button>
      
      <button
        className={`secondary-btn ${
          todoList === true ? "bg-green-600" : "bg-[rgb(71,71,71)]"
        }`}
        onClick={() => dispatchTodoList({ type: "SET_COMPLETED_TAB" })}
      >
        completed
      </button>
    </div>
  );
};

export default Tabs;
