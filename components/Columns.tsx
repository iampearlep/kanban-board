import React from 'react'
import Column from './Column'
import { Status } from '@/lib/store'

type ColumnDataType = {
  id: string,
  title: string,
  status: Status
}
const columnData :ColumnDataType[]  = [

  {
    id: '0',
    title: 'To do',
    status: 'TODO'
  },
  {
    id: '1',
    title: 'In progress',
    status: 'IN_PROGRESS'
  },
  {
    id: '2',
    title: 'Completed',
    status: 'DONE'
  },
]
const Columns = () => {
  return (
    <div className='flex flex-col md:grid md:grid-cols-3 py-8 gap-6 lg:gap-8'>
    {columnData.map((column) => (
      <Column key={column.id} {...column} />
    ))}
    </div>
  )
}

export default Columns
