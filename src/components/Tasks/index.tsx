import { useState } from 'react'
import './tasks.css'

interface ITasksProps {
  listTasks: {
    id: number,
    name: string,
    status: boolean
  }[]
}

export function Tasks(props: ITasksProps) {
  return (
    <>
    {
      props.listTasks.length > 0 ? 
      <div className='tasks'>
        {props.listTasks.map(task => <span>{task.name}</span>) }
      </div>
      : 
      <span className='tasks'>Não há tarefas</span>
    }
    </>
  )
}