import './App.css'
import { useState } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

function App() {
  const [nameTask, setNameTask] = useState('')
  const [id, setID] = useState(0)

  const [tasks, setTasks] = useState<{
    id: number,
    name: string,
    status: boolean
  }[]>([])

  function insertTask() {    
    const newTask = { id: id, name: nameTask, status: false }
    setTasks((arr) => [...arr, newTask])
    setID(id => id+=1)    
    document.querySelector('input')!.value = ''
  }

  function deleteTask(e: React.FormEvent<HTMLButtonElement>){
    const newArray  = tasks.filter( task => task.id !== parseInt(e.currentTarget.value))
    setTasks(() => newArray)    
  }

  function doneTask(e: any){
    const newArray = tasks.map( task => task.id == e.target.value ? { id: task.id, name: task.name, status: !task.status } : task)
    setTasks(() => newArray)    
  }

  return (
    <>
      <div id='insert-tasks'>
        <Input OnChange={(e) => setNameTask(e.currentTarget.value)} />
        <Button name='Inserir' OnClick={() => insertTask()} />
        
      </div>
        <Tasks 
          doneTask={(e) => doneTask(e)}
          deleteTask={(e) => deleteTask(e)} 
          listTasks={tasks} 
        />
    </>
  )
}

export default App
