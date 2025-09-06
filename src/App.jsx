
import { useState } from 'react'
import './App.css'

function App() {

  const[activeTab, setActiveTab] = useState(false)


  return (
  <div className="min-h-screen bg-[#1f1e1e] text-white overflow-hidden">
      
      <h1 className='mt-10 text-center text-5xl h-20 font-bold'>My Todos</h1>

      <div className='bg-[#353434] p-[2%] w-fit ml-auto mr-auto mt-[3%] max-h-[80vh] overflow-y-auto shadow-[0px_5px_7px_black] h-100'>


            {/* todo-input */}

           <div className='flex text-center justify-center border-b border-gray-700 pb-6 mb-6 mt-5'> 
          
         <div className='todo-input-item'>
            <label>Title</label>
            <input type="text" placeholder="What's the task title" />
          </div>

          <div className='todo-input-item'>
            <label>Description</label>
            <input type="text" placeholder="What's the description" />
          </div>


            {/* primaryBtn */}   

           <div className='todo-input-item'>
           <button type='button' className='bg-green-600 text-white rounded-none border-none mt-9 p-2.5 w-16 cursor-pointer hover:bg-green-700'>Add</button>
          </div>

        </div>

          <div className='btn-area'>
        <button className={`secondary-btn ${activeTab === false ?'bg-green-600' : 'bg-gray-500'}`} onClick={() => setActiveTab(false)}>Todo</button>
        <button className={`secondary-btn ${activeTab === true ?'bg-green-600' : 'bg-gray-500'}`} onClick={() => setActiveTab(true)}>completed</button>
      </div>

      <div className='todo=list'>
        <div className='todo-list-item'>
          <h1 className='font-bold text-[17px] mt-3'>Task 1</h1>
          <p>discription</p>
        </div>
      </div>

      </div>
      
    

    </div>
  )
}

export default App
