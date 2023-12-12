import { useState } from 'react'
import './Product.css'
import add from '../../images/add.svg'
import added from '../../images/added.svg'
import like from '../../images/liked.svg'
import unlike from '../../images/unliked.svg'
export const Product = ({ id, name, price, images }) => {
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(localStorage.getItem(id));

  const onClickLike = (id) => {
    if (isLiked) {
      localStorage.removeItem(id)
    }
    else {
      localStorage.setItem(id, true)
    }
    setIsLiked((prev) => !prev)
  }

  return (
    <div className="products-item">

      <a className="products-item__link" href="#">
        <img className='products-item__img' src={isHoveredSecond ? images.second : isHoveredThird ? images.third : images.first} alt="" />
        <div onMouseEnter={() => setIsHoveredSecond(true)} onMouseLeave={() => setIsHoveredSecond(false)} className='products-item__hidden products-item__hidden--secondImg'></div>
        <div onMouseEnter={() => setIsHoveredThird(true)} onMouseLeave={() => setIsHoveredThird(false)} className='products-item__hidden products-item__hidden--thirdImg'></div>
      </a>

      <div className="products-item__info">
        <a href="#" className='products-item__title'><h4>{name}</h4></a>
        <p className='products-item__price'>{price}$</p>
        <button onClick={() => setIsAdded((prev) => !prev)} className={`products-item__add ${isAdded ? 'active' : ''}`}><img src={isAdded ? added : add} alt="add/delete" /></button>
      </div>
      <button onMouseEnter={() => setIsHoveredThird(true)} onMouseLeave={() => setIsHoveredThird(false)} onClick={() => onClickLike(id)} className={`products-item__like ${isLiked ? 'active' : ''}`} > <img src={isLiked ? like : unlike} alt="add/delete" /></button>
    </div >
  )
}