import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

function App() {

  const [selectedId,setSelectedId] = useState(1);
  return (
    <div>
      <button onClick={function(){
        setSelectedId(1);
      }}>1</button>

      <button onClick={function(){
        setSelectedId(1);
      }}>2</button>

      <button onClick={function(){
        setSelectedId(1);
      }}>3</button>

      <Todo id={selectedId}/>
       
    </div>
  )
}
function Todo({id}){
  const [todos,setTodos] = useState({})

  // useEffect

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos" + id)
    .then(function(response){
      setTodos(response.data.json);
    })
  },[id])
  return <div>
    Id:{id}
    <h1>
      {todos.title}
    </h1>
    <h5>
      {todos.description}
    </h5>
  </div>
}


export default App
