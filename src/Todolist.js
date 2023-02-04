import React from 'react'
import { useState } from 'react'

function Todolist() {
    const [todo, settodo] = useState("")
    const [addTodo, setaddTodo] = useState([])
    const handleChange = (e) =>{
        settodo({...todo, [e.target.name]:e.target.value});
      }
  return (
    < div className="p-5 px-80">
      <h1 className="text-2xl font-bold mb-3">To-Do List</h1>
    <form>
      <input type="text" className="border p-2 w-1/3 mb-3" placeholder="Add a new task"/>
      <br />
      <button className="bg-blue-500 text-white p-2 px-10 mx-10 rounded-full" name='todo' value={addTodo.todo} onChange={handleChange} >Add Todo</button>

    
    </form>
    </div>
  )
}

export default Todolist