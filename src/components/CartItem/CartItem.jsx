import './CartItem.css'
import X from '../../images/x-symbol-svgrepo-com.svg'
import { deleteFromCart } from '../../store/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { database } from '../../config/firebaseConfig'
import { remove, ref } from 'firebase/database'
export const CartItem = ({ name, price, id, images }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cart)
  const { data } = useSelector(state => state.app.loggedUser)
  const onClickDelete = async () => {
    const key = cartItems.find(cart => cart.id == id).key
    const cartItemRef = ref(database, `cart/${data}/${key}`)
    await remove(cartItemRef)
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