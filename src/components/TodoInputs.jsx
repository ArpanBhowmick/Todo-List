import { useContext, useRef } from "react"
import { TodoContext } from "../store/TodoContext";
import { toast } from "sonner";


const TodoInputs = () => {

  const { addTodo } = useContext(TodoContext);


  const todoTitleElement = useRef()
  const todoDescriptionElement = useRef();

  const handleTodoAdd = (event) => {
    event.preventDefault()

    const todoTitle = todoTitleElement.current.value;
    const todoDescription = todoDescriptionElement.current.value;


    if (!todoTitle.trim() || !todoDescription.trim()) {
      toast.error("Please write your TODOS in the columns");
      return;
    }

    addTodo(todoTitle, todoDescription)

    todoTitleElement.current.value = "";
     todoDescriptionElement.current.value = "";

  }

  

  return (
    <>
    <form onSubmit={ handleTodoAdd}>
      <div className="flex items-center justify-center border-b border-gray-700 pb-6 mb-2 ">
        <div className="todo-input-item">
          <label>Title</label>
          <input
            type="text"
            ref={todoTitleElement}
            placeholder="What's the task title"
            className="h-10"
          />
        </div>

        <div className="todo-input-item">
          <label>Description</label>
          <input
            type="text"
            ref={todoDescriptionElement}
            placeholder="What's the description"
            className="h-10"
          />
        </div>

        {/* primaryBtn */}

        <div className="todo-input-item">
          <button
            type="submit"
            className="bg-green-600 text-white rounded-none border-none mt-9 p-2.5 w-15 cursor-pointer hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </div>
      </form>
    </>
  );
}

export default TodoInputs