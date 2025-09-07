import { useReducer, useState } from "react";
import "./App.css";

import TodoInputs from "./components/TodoInputs";
import Tabs from "./components/Tabs";
import TodoItem from "./components/TodoItem";

function App() {
  const [activeTab, setActiveTab] = useState(false);

  const[] = useReducer()

  return (
    <div>
      <h1 className="mt-10 text-center text-5xl h-20 font-bold">My Todos</h1>

      {/* wrapper */}

      <div className="bg-[#353434] p-[2%] w-fit ml-auto mr-auto mt-[] max-h-[80vh] overflow-y-auto shadow-[0px_5px_7px_black] h-100">
        <TodoInputs></TodoInputs>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <TodoItem/>
       
      </div>
    </div>
  );
}

export default App;
