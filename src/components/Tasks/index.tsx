import { Checkbox } from '@mui/material'
import React from 'react'
import './tasks.css'

interface ITasksProps {
  listTasks: {
    id: number,
    name: string,
    status: boolean
  }[]
  deleteTask: (e: React.FormEvent<HTMLButtonElement>) => void
  doneTask: (e: any) => void
}

export function Tasks(props: ITasksProps) {
  return (
    <>
      {
        props.listTasks.length > 0 ?
            <div className='tasks'>
            {props.listTasks.map((task) => {
              return (
                <div className='task' key={`task-${task.id}`}>
                  <div>
                    <Checkbox sx={{
                      color: 'white',
                      '&.Mui-checked': {
                        color: 'greenyellow',
                      },                      
                    }}
                    size={'small'}                    
                    value={task.id}
                    onClick={props.doneTask}
                    />
                    {task.status ? <span className='task-done'>{task.name}</span> : <span>{task.name}</span>}                    
                  </div>
                  
                  <button 
                    className='delete-task' 
                    key={`task-${task.id}`}
                    value={task.id}
                    type='button'
                    onClick={props.deleteTask}
                    >
                      Excluir
                  </button>

                </div>
              )
            }
            )}
          </div>
          :
          <span key="none-task" className='tasks none-task'>Não há tarefas</span>
      }
    </>
  )
}