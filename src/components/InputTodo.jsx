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
        <input 
        type="text" 
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        />
        <button type='submit'>add Todo</button> 
      </form>
    </div>
    </>
  )
}

export default InputTodo
