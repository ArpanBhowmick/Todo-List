
import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { TodoContext } from "../store/TodoContext";


const TodoItem = ({ todo }) => {


  const { deleteTodo, toggleTodoStatus } = useContext(TodoContext);

  return (
    <div className="flex flex-col shadow-[0px_3px_5px_rgb(0,0,0,0.5)] ">

      <div className="bg-[#414040] flex  justify-between p-6 pb-9 pt-9 items-center">
        <div className=" mb-2.5">
          <h1 className="font-bold text-green-600 text-2xl m-0 ">
            {todo.title}
          </h1>

          <p className="text-sm text-gray-400 mt-0 ">{todo.description}</p>
        </div>

        <div className="flex">
          <AiOutlineDelete
            className=" text-4xl cursor-pointer hover:text-red-700"
            onClick={() => deleteTodo(todo.id)}
          />
          <BsCheckLg
            className="text-4xl ml-2.5 cursor-pointer text-green-500 hover:text-green-700"
            onClick={() => toggleTodoStatus(todo.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
