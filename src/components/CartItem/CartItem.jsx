import './CartItem.css'
import X from '../../images/x-symbol-svgrepo-com.svg'
export const CartItem = ({ setCartItems, cartItems, name, price, id, images }) => {
  return (
    <div className='cart-item'>
      <div className='cart-item__img'>
        <img src={images.first} alt="" />
      </div>
      <div className='cart-item__info'>
        <p className='cart-item__name'>{name}</p>
        <p className='cart-item__price'>{price}$</p>

      </div>
      <button className='cart-item__btn'><img className='cart-item__btn-img' src={X} alt="" /></button>
    </div>
  )
}