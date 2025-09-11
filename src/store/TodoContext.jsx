import { useEffect } from "react";
import { createContext, useReducer } from "react";

export const TodoContext = createContext({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  toggleTodoStatus: () => {},
});

// --------------- Initial State ---------------

const initialState = {
  todoList: [],
  showCompletedTab: false,
};

// -------------------- Reducer -------------------

const todoListReducer = (currentTodoList, action) => {
  let newTodoList = currentTodoList;

  if (action.type === "ADD_TODO") {
    newTodoList = {
      ...currentTodoList,
      todoList: [action.payload, ...currentTodoList.todoList],
    };
  } else if (action.type === "DELETE_TODO") {
    newTodoList = {
      ...currentTodoList,
      todoList: currentTodoList.todoList.filter(
        (todo) => todo.id !== action.payload
      ),
    };
  } else if (action.type === "EDIT_TODO") {
    newTodoList = {
      ...currentTodoList,
      todoList: currentTodoList.todoList.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              description: action.payload.description,
            }
          : todo
      ),
    };
  } else if (action.type === "TOGGLE_TODO_STATUS") {
    newTodoList = {
      ...currentTodoList,
      todoList: currentTodoList.todoList.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? new Date().toISOString() : null,
            }
          : todo
      ),
    };
  } else if (action.type === "SWITCH_TODO_TAB") {
    return { ...currentTodoList, showCompletedTab: false };
  } else if (action.type === "SWITCH_COMPLETED_TAB") {
    return { ...currentTodoList, showCompletedTab: true };
  }

  return newTodoList;
};

// ---------------- Init Function (loads from localStorage) -----------

const init = () => {
  const localData = localStorage.getItem("todos");

  return localData
    ? { ...initialState, todoList: JSON.parse(localData) }
    : initialState;
};

// -------------------- Provider --------------------

const TodoListProvider = ({ children }) => {
  const [todoState, dispatchTodoState] = useReducer(
    todoListReducer,
    initialState,
    init
  );

  //----- save todos to localStorage whenever they change-----

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoState.todoList));
  }, [todoState.todoList]);

  // --- Actions ---

  const addTodo = (todoTitle, todoDescription) => {
    console.log("clicked");
    dispatchTodoState({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        title: todoTitle,
        description: todoDescription,
        completed: false,
      },
    });
  };

  const deleteTodo = (todoId) => {
    dispatchTodoState({
      type: "DELETE_TODO",
      payload: todoId,
    });
  };

  const editTodo = (id, newTitle, newDescription) => {
    dispatchTodoState({
      type: "EDIT_TODO",
      payload: {
        id,
        title: newTitle,
        description: newDescription,
      }
    });
  };

  const toggleTodoStatus = (todoId) => {
    dispatchTodoState({
      type: "TOGGLE_TODO_STATUS",
      payload: todoId,
    });
  };

  const switchTodoTab = () => {
    dispatchTodoState({
      type: "SWITCH_TODO_TAB",
    });
  };

  const switchCompletedTab = () => {
    dispatchTodoState({
      type: "SWITCH_COMPLETED_TAB",
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todoList: todoState.todoList,
        showCompletedTab: todoState.showCompletedTab,
        addTodo,
        deleteTodo,
        editTodo,
        toggleTodoStatus,
        switchTodoTab,
        switchCompletedTab,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoListProvider;
