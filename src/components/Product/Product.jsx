import { useEffect, useState } from 'react'
import './Product.css'
import add from '../../images/add.svg'
import added from '../../images/added.svg'
import like from '../../images/liked.svg'
import unlike from '../../images/unliked.svg'
import Sceleton from '../Sceleton/Sceleton'
export const Product = ({ isLoading, isAdded, isLiked, id, name, price, images }) => {
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  return (<>
    {
      isLoading ? <Sceleton /> : <div className="products-item">
        <div className="products-item__link">
          <img className='products-item__img' src={isHoveredSecond ? images.second : isHoveredThird ? images.third : images.first} alt="" />
          <div onMouseEnter={() => setIsHoveredSecond(true)} onMouseLeave={() => setIsHoveredSecond(false)} className='products-item__hidden products-item__hidden--secondImg'></div>
          <div onMouseEnter={() => setIsHoveredThird(true)} onMouseLeave={() => setIsHoveredThird(false)} className='products-item__hidden products-item__hidden--thirdImg'></div>
          <button onMouseEnter={() => setIsHoveredThird(true)} onMouseLeave={() => setIsHoveredThird(false)} className={`products-item__like ${isLiked ? 'active' : ''}`} > <img src={isLiked ? like : unlike} alt="like/dislike" /></button>
        </div>
        <div className="products-item__info">
          <p className='products-item__title'><span>{name}</span></p>
          <p className='products-item__price'>{price}$</p>
          <button className={`products-item__add ${isAdded ? 'active' : ''}`}><img src={isAdded ? added : add} alt="add/delete" /></button>
        </div>
      </div >
    }
  </>
  )
}