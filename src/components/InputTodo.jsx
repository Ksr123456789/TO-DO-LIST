import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/context'

function InputTodo() {
  const {addTodo} = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const add = (e) =>{
    e.preventDefault();
    if(!todo) return;
    addTodo({
      completed: false,
      todo
    })
    setTodo("");
  }
  return (
    <>
    <div>
      <form onSubmit={add}>
       <div className='form'>
        <input 
        placeholder='Enter your task'
        type="text" 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
        </div>   
      </form>
    </div>
    </>
  )
}

export default InputTodo
