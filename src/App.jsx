import React, {useEffect, useState} from "react"
import './App.css'
import DisplayTodo from "./components/DisplayTodo";
import InputTodo from "./components/InputTodo";
import { TodoContext } from "./context/context"
function App() {
  const[todos, setTodos] = useState([]);
  
  useEffect(()=>{
   let data = JSON.parse(localStorage.getItem("todos"));
   if(data && data.length>0){
    setTodos(data);
   }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  const addTodo = (todo) =>{
    setTodos((prev)=>[...prev, {...todo, id:Date.now()}])
  }

  const updateTodo = (todo, id) =>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id===id ? {...prevTodo, todo:todo} : prevTodo))
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id));
  }

  const toggleTodo = (id) =>{
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo, completed:!prevTodo.completed} : prevTodo))
  }
  console.log(todos);
  return (
  <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
    <div className="ext">
     <div className="container">
        <div className="heading">
         <h1>TO-DO-LIST</h1>
        </div>
      <div className="todoinput">
        {/*inputTodo*/}
        <InputTodo/>
      </div>
      <div>
        {
          todos.map((todo)=>(
            <div className="displayTodo" key={todo.id}>
              <DisplayTodo todo={todo}/>
            </div>
          ))
        }
      </div>
     </div>
    </div>
  </TodoContext.Provider>
  )
}

export default App
