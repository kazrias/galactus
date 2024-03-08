import { useEffect, useState } from 'react'
import './Product.css'
import add from '../../images/add.svg'
import added from '../../images/added.svg'
import like from '../../images/liked.svg'
import unlike from '../../images/unliked.svg'
import Sceleton from '../Sceleton/Sceleton'
import { addToCart, deleteFromCart } from '../../store/slices/cartSlice'
import { addToFavorites, deleteFromFavorites } from '../../store/slices/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'
export const Product = ({ isLoading, id, name, price, images }) => {
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  const [isAdded, setIsAdded] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const cartItems = useSelector(state => state.cart.cart)
  const favoriteItems = useSelector(state => state.favorites.favorites)
  const dispatch = useDispatch()
  const onClickAddCart = () => {
    if (isAdded) {
      dispatch(deleteFromCart({ id }))
    }
    else
      dispatch(addToCart({ id, name, price, images }))
  }

  const onClickLike = () => {
    if (isLiked) {
      dispatch(deleteFromFavorites({ id }))
    }
    else
      dispatch(addToFavorites({ id, name, price, images }))
  }

  useEffect(() => {
    setIsAdded(cartItems.some(item => item.id == id))
  }, [isLoading, cartItems.length])

  useEffect(() => {
    setIsLiked(favoriteItems.some(item => item.id == id))
  }, [isLoading, favoriteItems.length])

  return (
    <>
      {
        isLoading ? <Sceleton /> : <div className="products-item">
          <div className="products-item__link">
            <img className='products-item__img products-item__img--first' src={images.first} alt="" />
            <div className='products-item__hidden products-item__hidden--secondImg'></div>
            <img className='products-item__img products-item__img--second' src={images.second} alt="" />
            <div className='products-item__hidden products-item__hidden--thirdImg'></div>
            <img className='products-item__img products-item__img--third' src={images.third} alt="" />


            <button onClick={onClickLike} onMouseEnter={() => setIsHoveredThird(true)} onMouseLeave={() => setIsHoveredThird(false)} className={`products-item__like ${isLiked ? 'active' : ''}`} > <img src={isLiked ? like : unlike} alt="like/dislike" /></button>
          </div>
          <div className="products-item__info">
            <p className='products-item__title'><span>{name}</span></p>
            <p className='products-item__price'>{price}$</p>
            <button onClick={onClickAddCart} className={`products-item__add ${isAdded ? 'active' : ''}`}><img src={isAdded ? added : add} alt="add/delete" /></button>
          </div>
        </div >
      }
    </>
  )
}