import { useEffect, useState } from 'react'
import './Product.css'
import add from '../../images/add.svg'
import added from '../../images/added.svg'
import like from '../../images/liked.svg'
import unlike from '../../images/unliked.svg'
import Sceleton from '../Sceleton/Sceleton'
export const Product = ({ isLoading, setCartItems, cartItems, id, name, price, images }) => {
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsAdded(cartItems.some(item => {
      console.log(`item.id=${item.id}, id=${id}`);
      return Number(item.id) === Number(id)
    }));
  }, [isLoading,cartItems])

  const onClickLike = () => {
    setIsLiked((prev) => !prev)
  }

  const onClickAdd = (product) => {
    if (isAdded) {
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(product.id)));
    }
    else {
      setCartItems((prev) => [...prev, product])
    }
    setIsAdded((prev) => !prev)
  }

  return (<>
    {
      isLoading ? <Sceleton /> : <div className="products-item">
        <div className="products-item__link" href="#">
          <img className='products-item__img' src={isHoveredSecond ? images.second : isHoveredThird ? images.third : images.first} alt="" />
          <div onMouseEnter={() => setIsHoveredSecond(true)} onMouseLeave={() => setIsHoveredSecond(false)} className='products-item__hidden products-item__hidden--secondImg'></div>
          <div onMouseEnter={() => setIsHoveredThird(true)} onMouseLeave={() => setIsHoveredThird(false)} className='products-item__hidden products-item__hidden--thirdImg'></div>
        </div>
        <div className="products-item__info">
          <p className='products-item__title'><span>{name}</span></p>
          <p className='products-item__price'>{price}$</p>
          <button onClick={() => onClickAdd({ id, name, price, images })} className={`products-item__add ${isAdded ? 'active' : ''}`}><img src={isAdded ? added : add} alt="add/delete" /></button>
        </div>
        <button onMouseEnter={() => setIsHoveredThird(true)} onMouseLeave={() => setIsHoveredThird(false)} onClick={onClickLike} className={`products-item__like ${isLiked ? 'active' : ''}`} > <img src={isLiked ? like : unlike} alt="add/delete" /></button>
      </div >
    }

  </>
  )
}