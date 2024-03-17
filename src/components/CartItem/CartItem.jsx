import './CartItem.css'
import X from '../../images/x-symbol-svgrepo-com.svg'
import { deleteFromCart } from '../../store/slices/cartSlice'
import { useDispatch } from 'react-redux'
export const CartItem = ({ name, price, id, images }) => {
  const dispatch = useDispatch()
  const onClickDelete = () => {
    dispatch(deleteFromCart({ id }))
  }
  return (
    <div className='cart-item'>
      <div className='cart-item__img'>
        <img src={images.first} alt="" />
      </div>
      <div className='cart-item__info'>
        <p className='cart-item__name'>{name}</p>
        <p className='cart-item__price'>{price}$</p>

      </div>
      <button onClick={onClickDelete} className='cart-item__btn'><img className='cart-item__btn-img' src={X} alt="" /></button>
    </div >
  )
}