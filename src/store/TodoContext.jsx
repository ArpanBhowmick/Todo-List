import { createContext, useReducer } from "react"



    export const TodoContext = createContext({
        todoList: [],
        addTodo: () => {},
        deleteTodo: () => {},
        toggleComplete: () => {}
    })

    // const initialState = {
    //      todoList: [],
    //      showCompletedTab: false,
    // }





    
    const todoListReducer = (currentTodoList, action) => {

        let newTodoList = currentTodoList;

        if (action.type === "ADD_TODO") {
            newTodoList = [ ...currentTodoList, action.payload]
        } else if (action.type === "DELETE_TODO") {
            newTodoList = currentTodoList.filter((todo) => todo.id !== action.payload )
        } else if (action.type === "TOGGLE_TODO") {
            newTodoList = 
        }

        // if (action.type === "SET_TODO_TAB") {
        //     return false ;
        // } else if (action.type === "SET_COMPLETED_TAB") {
        //     return true
        // }
        return newTodoList



    }



    const TodoListProvider = ({children}) => {
        
        const[todoList, dispatchTodoList] = useReducer(todoListReducer, [])



        const addTodo = (todoTitle, todoDescription) => {
            console.log("clicked")
            dispatchTodoList({
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
            dispatchTodoList({
                type: "DELETE_TODO",
                payload: todoId
            })
        }

        const toggleComplete = (todoId) => {
            dispatchTodoList({
                type: "TOGGLE_TODO",
                payload: todoId
            })
        }



        return (
          <TodoContext.Provider value={{ todoList, dispatchTodoList, addTodo, deleteTodo, toggleComplete  }}>
            {children}
          </TodoContext.Provider>
        );

    }

export default TodoListProvider










    





