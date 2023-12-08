export const CtBtn = ({ type, currCategory, setCurrCategory }) => {
  console.log(type,"and",currCategory);
  return (
    <button className={currCategory === type ? `category-btn active` : `category-btn`} onClick={()=>setCurrCategory(type)}>{type}</button>
  )
}