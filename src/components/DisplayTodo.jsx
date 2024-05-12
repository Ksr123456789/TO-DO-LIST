import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/context';

function DisplayTodo({todo}) {
  const [task, setTask] = useState(todo.todo);
  const [isEditable, setIsEditable] = useState(false);
  const {deleteTodo, updateTodo, toggleTodo} = useContext(TodoContext)
  
  const toggle = () =>{
    toggleTodo(todo.id)
  }
  return (
    <>
    <div>
      <input
       type="checkbox" 
       checked={todo.completed}
       onChange={toggle}
       />
      <input 
      type='text'
      value={task}
      readOnly={!isEditable}

      onChange={(e)=>setTask(e.target.value)}
      />
      <button
        disabled={todo.completed}
        onClick={()=>{
          if(isEditable){
            setIsEditable(false)
          }
          else{
            setIsEditable(prev => !prev)
          }
        }} 
      >{isEditable ? "📁": "✏️"}</button>
      <button onClick={()=>deleteTodo(todo.id)}>❌</button>
    </div>
      
    </>
  )
}

export default DisplayTodo
