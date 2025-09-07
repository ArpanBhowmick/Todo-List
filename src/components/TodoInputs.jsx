import { useContext, useRef } from "react"
import { TodoContext } from "../store/TodoContext";


const TodoInputs = () => {

  const { addTodo } = useContext(TodoContext);


  const todoTitleElement = useRef()
  const todoDescriptionElement = useRef();

  const handleTodoAdd = (event) => {
    event.preventDefault()

    const todoTitle = todoTitleElement.current.value;
    const todoDescription = todoDescriptionElement.current.value;

    addTodo(todoTitle, todoDescription)

  }

  

  return (
    <>
      <div className="flex items-center justify-center border-b border-gray-700 pb-6 mb-2 ">
        <div className="todo-input-item">
          <label>Title</label>
          <input
            type="text"
            ref={todoTitleElement}
            placeholder="What's the task title"
          />
        </div>

        <div className="todo-input-item">
          <label>Description</label>
          <input
            type="text"
            ref={todoDescriptionElement}
            placeholder="What's the description"
          />
        </div>

        {/* primaryBtn */}

        <div className="todo-input-item">
          <button
            type="button"
            className="bg-green-600 text-white rounded-none border-none mt-9 p-2.5 w-15 cursor-pointer hover:bg-green-700" onClick={handleTodoAdd}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoInputs