import { useState } from 'react'
import './Product.css'
export const Product = ({ name, price, images }) => {
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  return (
    <div className="products-item">
      <a className="products-item__link" href="#">
        <img className='products-item__img' src={isHoveredSecond ? images.second : isHoveredThird ? images.third : images.first} alt="" />
        <div onMouseEnter={() => setIsHoveredSecond(true)} onMouseLeave={() => setIsHoveredSecond(false)} className='products-item__hidden products-item__hidden--secondImg'></div>
        <div onMouseEnter={() => setIsHoveredThird(true)} onMouseLeave={() => setIsHoveredThird(false)} className='products-item__hidden products-item__hidden--thirdImg'></div>
      </a>
      <a href="#" className='products-item__title'><h4>{name}</h4></a>
      <p className='products-item__price'>{price}$</p>

    </div>
  )
}