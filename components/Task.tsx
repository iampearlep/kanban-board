import React from 'react'
import { TrashIcon } from 'lucide-react'
import { useTaskStore, Status } from '@/lib/store'

const Task = ({
    id,
  title,
  description,
  status
}: {
    id: string
  title: string
  description?: string
  status: Status
}) => {

  const removeTask = useTaskStore(state => state.removeTask)
  const dragTask = useTaskStore(state => state.dragTask)
  return (
    <div className={`flex flex-row items-start justify-between bg-white px-3 py-2 rounded-lg ${
      status === "TODO"
        ? "border border-blue-600"
        : status === "IN_PROGRESS"
        ? " border border-yellow-500"
        : status === "DONE"
        ? "border border-green-600 "
        : "bg-gray-300"
    }`} draggable onDrag={() => dragTask(id)}>
      <div className='w-11/12 flex flex-col gap-y-2'>
        <h3 className='text-base'>{title}</h3>
        <p className='text-sm'>{description}</p>
      </div>
      <button className='w-1/12 flex justify-center items-center' onClick={() =>removeTask(id)}><TrashIcon className='w-4 h-4 text-gray-400 hover:text-red-500' /> </button>
    </div>
  )
}

export default Task
