import { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { TodoContext } from "../store/TodoContext";
import { IoArrowUndoOutline } from "react-icons/io5";
import { AiTwotoneEdit } from "react-icons/ai";

const TodoItem = ({ todo }) => {
  const { deleteTodo, editTodo, toggleTodoStatus, showCompletedTab } =
    useContext(TodoContext);

  const [editState, setEditState] = useState({
    isEditing: false,
    title: todo.title,
    description: todo.description,
  });

  return (
    <div className="flex flex-col shadow-[0px_3px_5px_rgb(0,0,0,0.5)] mb-2.5">
      <div className="bg-[#414040] flex  justify-between p-6 pb-3.5 pt-2 items-center">
        <div className=" mb-2.5">
          {/* <h1 className="font-bold text-green-500 text-2xl m-0 ">
            {todo.title}
          </h1>

          <p className="text-sm text-gray-400 mt-0 pt-2">{todo.description}</p> */}

          

          {showCompletedTab ? (
            <p className="text-sm text-gray-400 mt-0 pt-1">
              completed on : {new Date(todo.completedAt).toLocaleString()}
            </p>
          ) : (
            <p className="text-sm text-gray-400 mt-0 pt-1">
              Added on : {new Date(todo.id).toLocaleString()}
            </p>
          )}
        </div>

        <div className="flex">
          <AiOutlineDelete
            className=" text-4xl cursor-pointer hover:text-red-700"
            onClick={() => deleteTodo(todo.id)}
          />
          {!todo.completed ? (
            <BsCheckLg
              className="text-4xl ml-2.5 cursor-pointer text-green-500 hover:text-green-700"
              onClick={() => toggleTodoStatus(todo.id)}
            />
          ) : (
            <IoArrowUndoOutline
              className="text-4xl ml-2.5 cursor-pointer text-gray-400 hover:hover:text-gray-200"
              onClick={() => toggleTodoStatus(todo.id)}
            />
          )}

          {editState.isEditing ? (
            <div>
              <input
                type="text"
                value={editState.title}
                onChange={(e) =>
                  setEditState({ ...editState, title: e.target.value })
                }
              />
              <textarea
                value={editState.description}
                onChange={(e) =>
                  setEditState({ ...editState, description: e.target.value })
                }
              />

              <div className="flex">
                <button
                  className="bg-green-600 p-1 mr-5"
                  onClick={() => {
                    editTodo(todo.id, editState.title, editState.description);
                    setEditState({ ...editState, isEditing: false });
                  }}
                >
                  save
                </button>
                <button
                  className="bg-red-600 p-1 ml-5"
                  onClick={() =>
                    setEditState({
                      isEditing: false,
                      title: todo.title,
                      description: todo.description,
                    })
                  }
                >
                  cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h1 className="font-bold text-green-500 text-2xl m-0 ">
                {todo.title}
              </h1>

              <p className="text-sm text-gray-400 mt-0 pt-2">
                {todo.description}
              </p>
            </>
          )}

          <AiTwotoneEdit
            className="text-4xl ml-2.5 cursor-pointer "
            onClick={() =>
              setEditState({
                isEditing: true,
                title: todo.title,
                description: todo.description,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
