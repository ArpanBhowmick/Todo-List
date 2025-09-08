import { createContext, useReducer } from "react"



    export const TodoContext = createContext({})

    
    const todoListReducer = (currentTodoList, action) => {

        let newTodoList = currentTodoList;

        if (action.type === "ADD_TODO") {
            newTodoList = [action.payload ,...currentTodoList]
        }

        // if (action.type === "SET_TODO_TAB") {
        //     return false ;
        // } else if (action.type === "SET_COMPLETED_TAB") {
        //     return true
        // }
        // return currentTodoList



    }





    const TodoListProvider = ({children}) => {
        
        const[todoList, dispatchTodoList] = useReducer(todoListReducer, [])



        const addTodo = (todoTitle, todoDescription) => {
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



        return (
          <TodoContext.Provider value={{ todoList, addTodo }}>
            {children}
          </TodoContext.Provider>
        );

    }

export default TodoListProvider










    


    



