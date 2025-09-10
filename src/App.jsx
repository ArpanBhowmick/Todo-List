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
        <h1 className="mt-10 text-center text-5xl h-20 font-bold">My Todos</h1>

        {/* wrapper */}

        <div className="bg-[#353434] p-[2%] w-fit ml-auto mr-auto  max-h-[80vh] overflow-y-auto shadow-[0px_5px_7px_black] h-auto">
          <TodoInputs></TodoInputs>

          <Tabs />

          <TodoList></TodoList>
        </div>
      </div>
      <Toaster position="top-center" richColors />
    </TodoListProvider>
  );
}

export default App;
