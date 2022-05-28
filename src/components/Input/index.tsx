import React from 'react'
import './input.css'

interface IInputProps {  
  OnChange?: (e: React.FormEvent<HTMLInputElement>) => void
}
export function Input(props: IInputProps) {
  return (
    <input 
      type="text" 
      placeholder='Nome da tarefa' 
      onChange={props.OnChange}
    >      
    </input>
  )
}