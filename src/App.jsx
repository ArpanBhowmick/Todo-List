import "./App.css";

import TodoInputs from "./components/TodoInputs";
import Tabs from "./components/Tabs";

import TodoListProvider from "./store/TodoContext";
import TodoList from "./components/TodoList";
import { Toaster } from "sonner";

function App() {
  return (
    <TodoListProvider>
      <div>
        <h1 className="mt-6 text-center text-4xl h-20 font-bold">My Todos</h1>

        <div className="todo-wrapper p-4 w-[90%] max-w-2xl sm:w-[80%] md:w-[70%] lg:w-[60%] ml-auto mr-auto">
          <TodoInputs />
          <Tabs />
          <TodoList />
        </div>
      </div>

      <Toaster position="top-center" richColors />
    </TodoListProvider>
  );
}

export default App;
