import { createElement } from "react"
import './button.css'

export const Button = ({ className, onButtonClick, children }) => {
  return createElement('button', { className, onClick: onButtonClick }, children)
}