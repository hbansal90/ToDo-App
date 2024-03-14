import { useState } from 'react'
import { ToDoProvider } from './context/ToDoContext'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
      setTodos((prevToDo)=> [{id: Date.now(), ...todo}, ...prev])
  }
  const updateTodo = (id, todo) =>{
    setTodos((prev)=> prev.map( (prevToDo) => prevToDo.id === id? todo: prevToDo) );
  }
  const deleteTodo = () =>{
    setTodos((prev)=>{
      prev.filter((todo)=> todo.id!= id)
    })
  }
  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map(
      (prevtodo)=> prevtodo.id === id? {...prevtodo, completed: !prevtodo.completed}:prevtodo
    ))
  }

  return (
    <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
