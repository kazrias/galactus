import './Total.css'
import { useSelector } from 'react-redux'
export const Total = () => {
  const totalPrice = useSelector(state => state.cart.cart).reduce((curr, item) => curr + item.price, 0)
  return (
    <div className='total-box'>
      <div className="total">
        <p className='total-text'>Total</p>
        <div></div>
        <p className='total-money'>{totalPrice}$</p>
      </div>
      <button className='total-btn'>Order</button>
    </div>
  )
}