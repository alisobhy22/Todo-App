import React from 'react'
import {useState} from 'react'
interface Props {
    addTodo: (task: string) => void
}

export const AddTask = (props:Props) => {
  const [value, setValue] = useState('')

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e : { preventDefault: () => void }) => {
    e.preventDefault()
    if(!value) return
    props.addTodo (value)
    setValue('')
  }

    
  return (
    <div className='m-10 w-full'>
      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        <label className='text-white text-2xl'>To Do List</label>
        <div className='p-5 pr-10 pl-10 w-full flex justify-around'>
            <input className='bg-gray-700 rounded-lg p-2 mt-2 w-80 focus:text-white' type='text' placeholder='Enter Task' value={value} onChange={handleChange} />
            <button className='bg-green-500 rounded-lg p-2 pr-5 pl-5 mt-2 '>Add</button>   
        </div>
        </form>
    </div>
  )
}
