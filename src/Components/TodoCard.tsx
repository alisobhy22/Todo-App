import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { Todo } from './TodoContainer'


interface Props {
    task: Todo,
    deleteTodo: (id: string) => void
    toggleEdit: (id: string) => void
}

export const TodoCard = (props : Props) => {

    const handleDelete = () => {
        props.deleteTodo (props.task.id)
    }

    const handleEdit = () => {
        props.toggleEdit (props.task.id)
    }
  return (
    <div className='w-2/3 mt-5 bg-blue-800 p-4 rounded-2xl text-white flex justify-between items-center'>
        <h1 className='text-lg ml-5'>{props.task.task}</h1>
        <div className='mr-5 space-x-4'>
            <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit}/>
            <FontAwesomeIcon icon={faCheck} onClick={handleDelete} />
        </div>
    </div>
  )
}
