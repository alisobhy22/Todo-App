import React from 'react'
import {AddTask}  from './AddTask'
import {TodoCard}  from './TodoCard'
import {EditCard}  from './EditCard'
import {useState} from 'react'
import { v4 as uuid } from 'uuid';

export interface Todo {
  id: string,
  task: string,
  Editing: boolean
}

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([])


  const addTodo = (task: string) => {
    const newTodo = {
      id: uuid(),
      task,
      Editing: false
    }
    setTodos([...todos, newTodo])
    console.log(newTodo)
  }


  const deleteTodo = (id:string) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const toggleEdit = (id:string) => {
    console.log(id)
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          Editing: !todo.Editing
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  const editTodo = (id:string, task:string) => {
    console.log(task)
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          task
        }
      }
      return todo
    })
    setTodos(newTodos)
    toggleEdit(id)
  }

  const clearAll = () => {
    setTodos([])
  }

  return (
    <div className='bg-gray-900 w-1/4 h-2/4 rounded-3xl flex flex-col items-center'>
        <AddTask addTodo={addTodo}/>
        <div className='w-full h-screen flex flex-col items-center overflow-y-auto ml-5 mr-5 mb-5'>
          {todos.map(todo => (
            todo.Editing ? <EditCard task={todo} key={todo.id} editTodo={editTodo}/> 
            : <TodoCard task={todo} key={todo.id} deleteTodo={deleteTodo} toggleEdit={toggleEdit}/>
          ))}
        </div>
        <button className='bg-blue-800 w-1/2 h-1/8 mb-10 rounded-2xl p-2 text-white text-2xl font-bold' onClick={clearAll}>Clear All</button>
    </div>
  )
}

export default TodoContainer