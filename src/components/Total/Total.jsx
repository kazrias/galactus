import './Total.css'
export const Total = ({ cartItems }) => {
  return (
    <div className='total-box'>
      <div className="total">
        <p className='total-text'>Total</p>
        <div></div>
        <p className='total-money'>{(cartItems.reduce((curr, { price }) => curr + price, 0)).toFixed(2)}$</p>
      </div>
      <button className='total-btn'>Order</button>
    </div>
  )
}