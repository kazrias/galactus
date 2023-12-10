import './CtBtn.css'
export const CtBtn = ({ type, currCategory, setCurrCategory }) => {
  return (
    <button className={currCategory === type ? `category-btn active` : `category-btn`} onClick={()=>setCurrCategory(type)}>{type}</button>
  )
}