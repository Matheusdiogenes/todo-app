import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

function App() {
  const [nameTask, setNameTask] = useState('')

  const [tasks, setTasks] = useState<{
    id: number,
    name: string,
    status: boolean
  }[]>([])

  function insertTask() {    
    const newTask = { id: 2, name: nameTask, status: false }
    setTasks((arr) => [newTask, ...arr])
  }

  return (
    <>
      <div id='insert-tasks'>
        <Input OnChange={(e) => setNameTask(e.currentTarget.value)} />
        <Button name='Inserir' OnClick={() => insertTask()} />
      </div>
      <Tasks listTasks={tasks} />

    </>
  )
}

export default App
