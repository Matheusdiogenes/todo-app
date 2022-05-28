import './button.css'

interface IButtonProps {
  name: string
  OnClick?: () => void
}

export function Button(props: IButtonProps) {
  return (
    <button type='button' onClick={props.OnClick}>{props.name}</button>
  )
}