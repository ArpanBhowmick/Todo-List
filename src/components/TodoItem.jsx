import { useContext, useState } from "react";
import { AiOutlineDelete, AiTwotoneEdit } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { TodoContext } from "../store/TodoContext";
import { IoArrowUndoOutline, IoSaveOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";




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
      <div className="bg-[#414040] flex p-6 pb-3.5 pt-2 justify-between items-center ">
        <div className=" mb-0 flex-1">
          {/*           
          <h1 className="font-bold text-green-500 text-2xl m-0 ">
            {todo.title}
          </h1>

          <p className="text-sm text-gray-400 mt-0 pt-2">{todo.description}</p> */}

          {editState.isEditing ? (
            <div className="flex flex-col">
              <input
                type="text"
                value={editState.title}
                onChange={(e) =>
                  setEditState({ ...editState, title: e.target.value })
                }
                className="mt-2.5 h-10 "
              />
              <textarea
                value={editState.description}
                onChange={(e) =>
                  setEditState({ ...editState, description: e.target.value })
                }
                className=" mt-2 bg-white text-black p-2.5 "
              />

              <div className="flex mt-3 justify-center gap-20 ">
                <IoSaveOutline
                  className="text-4xl ml-2.5 cursor-pointer hover:text-green-700"
                  onClick={() => {
                    editTodo(todo.id, editState.title, editState.description);
                    setEditState({ ...editState, isEditing: false });
                  }}
                />

                <MdCancel
                  className=" text-4xl cursor-pointer hover:text-red-700"
                  onClick={() =>
                    setEditState({
                      isEditing: false,
                      title: todo.title,
                      description: todo.description,
                    })
                  }
                />
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

              {showCompletedTab ? (
                <p className="text-sm text-gray-400 mt-0 pt-1">
                  completed on : {new Date(todo.completedAt).toLocaleString()}
                </p>
              ) : (
                <p className="text-sm text-gray-400 mt-0 pt-1">
                  Added on : {new Date(todo.id).toLocaleString()}
                </p>
              )}
            </>
          )}
        </div>

        {!editState.isEditing && (
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
        )}
      </div>
    </div>
  );
};

export default TodoItem;
