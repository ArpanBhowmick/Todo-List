import { useEffect } from "react";
import { createContext, useReducer } from "react"



    export const TodoContext = createContext({
        todoList: [],
        addTodo: () => {},
        deleteTodo: () => {},
        toggleComplete: () => {}
    })


    // --------------- Initial State ---------------
    
    const initialState = {
         todoList: [],
         showCompletedTab: false,
    }



// -------------------- Reducer -------------------

    
    const todoListReducer = (currentTodoList, action) => {

        let newTodoList = currentTodoList;

        if (action.type === "ADD_TODO") {
            newTodoList = {...currentTodoList, todoList: [ ...currentTodoList.todoList, action.payload]}
        } else if (action.type === "DELETE_TODO") {
            newTodoList = {...currentTodoList, todoList: currentTodoList.todoList.filter((todo) => todo.id !== action.payload )} 
        }
        // } else if (action.type === "LOAD_TODOS") {
            // newTodoList = action.payload;
       
        //  else if (action.type === "TOGGLE_TODO") {
        //     newTodoList = 
        // }

        // if (action.type === "SET_TODO_TAB") {
        //     return false ;
        // } else if (action.type === "SET_COMPLETED_TAB") {
        //     return true
        // }
        return newTodoList



    }


// ---------------- Init Function (loads from localStorage) -----------

      const init = () => {
         const localData = localStorage.getItem("todos")

         return localData ? { ...initialState, todoList: JSON.parse(localData)} : initialState  

    }


    // -------------------- Provider --------------------

    const TodoListProvider = ({children}) => {
        
        const[todoState, dispatchTodoState] = useReducer(todoListReducer, initialState, init)


          //----- save todos to localStorage whenever they change-----

        useEffect(() => {
            localStorage.setItem("todos" , JSON.stringify(todoState.todoList))
        }, [todoState.todoList])
        

  // --- Actions ---

        const addTodo = (todoTitle, todoDescription) => {
            console.log("clicked")
            dispatchTodoState({
                type: "ADD_TODO",
                payload: {
                    id: Date.now(),
                    title: todoTitle,
                    description: todoDescription,
                    completed: false,
                }
            })
        }

        const deleteTodo = (todoId) => {
            dispatchTodoState({
                type: "DELETE_TODO",
                payload: todoId
            })
        }

        const toggleComplete = (todoId) => {
            dispatchTodoState({
                type: "TOGGLE_TODO",
                payload: todoId
            })
        }

        const setTab = () => {
            dispatchTodoState({

            })
        }



        return (
          <TodoContext.Provider value={{ todoList: todoState.todoList, addTodo, deleteTodo, toggleComplete, setTab  }}>
            {children}
          </TodoContext.Provider>
        );

    }

export default TodoListProvider










    





