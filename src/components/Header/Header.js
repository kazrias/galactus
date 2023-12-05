import { createElement, useState } from "react"
import './header.css'
import { Button } from "../Button/Button"
const btns = [{ id: 1, title: 'Clothes', active: true }, { id: 2, title: 'Electronics', active: false }, { id: 3, title: 'Furniture', active: false }, { id: 4, title: 'Shoes', active: false }, { id: 5, title: 'Miscellaneous', active: false }]
export const Header = () => {
  const [activeBtn, setActiveBtn] = useState(1)
  return createElement('header', { className: 'header' }, btns.map(({ id, title }) => createElement(Button, { key: id, className: activeBtn === id ? 'header-btn active' : 'header-btn', onButtonClick:()=>setActiveBtn(id)}, [title])))
}