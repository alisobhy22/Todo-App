import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Todo } from './TodoContainer'
import {useState,useRef, useEffect} from 'react'

interface Props{
    task: Todo,
    editTodo: (id: string, task: string) => void
}

export const EditCard = (props:Props) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState(props.task.task)

    const handleChange = (e: { target: { value: React.SetStateAction<string> } }) =>{
        setValue(e.target.value)
    }

    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);

    const handleEdit = () => {
        props.editTodo(props.task.id, value)
    }

  return (
    <div className='w-2/3 mt-5 bg-blue-800 p-4 rounded-2xl text-white flex justify-between items-center'>
        <input className='w-full ml-5 bg-transparent outline-none text-lg' type="text" defaultValue={props.task.task} ref={inputRef} value={value} onChange={handleChange}/>
        <div className='mr-5 space-x-4'>
            <FontAwesomeIcon icon={faCheck}  onClick={handleEdit}/>
        </div>
    </div>
  )
}
