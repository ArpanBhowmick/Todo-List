import { useContext } from "react";
import { TodoContext } from "../store/TodoContext";

const Tabs = () => {
  const { showCompletedTab, switchTodoTab, switchCompletedTab } =
    useContext(TodoContext);

  return (
    <div className="mb-4">
      <button
        className={`secondary-btn ${
          showCompletedTab === false ? "bg-green-600" : "bg-[rgb(71,71,71)]"
        }`}
        onClick={switchTodoTab}
      >
        Todo
      </button>

      <button
        className={`secondary-btn ${
          showCompletedTab === true ? "bg-green-600" : "bg-[rgb(71,71,71)]"
        }`}
        onClick={switchCompletedTab}
      >
        completed
      </button>
    </div>
  );
};

export default Tabs;
