import React, {useState} from "react"
import DisplayTodo from "./components/DisplayTodo";
import InputTodo from "./components/InputTodo";
import { TodoContext } from "./context/context"
function App() {
  const[todos, setTodos] = useState([]);
  
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
    <div>
      <div>
        {/*inputTodo*/}
        <InputTodo/>
      </div>
      <div>
        {
          todos.map((todo)=>(
            <div key={todo.id}>
              <DisplayTodo todo={todo}/>
            </div>
          ))
        }
      </div>
    </div>
  </TodoContext.Provider>
  )
}

export default App
