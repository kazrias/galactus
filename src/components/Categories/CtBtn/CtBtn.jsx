import './CtBtn.css'
import { useSelector } from 'react-redux'
export const CtBtn = ({ type, onClick }) => {
  const currCategory = useSelector(state => state.app.category)
  return (
    <button className={currCategory === type ? `category-btn active` : `category-btn`} onClick={onClick}>{type}</button>
  )
}