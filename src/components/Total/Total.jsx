import './Total.css'
export const Total = ({ onClickOrder, total }) => {
  return (
    <div className='total-box'>
      <div className="total">
        <p className='total-text'>Total</p>
        <div></div>
        <p className='total-money'>{total}$</p>
      </div>
      <button onClick={onClickOrder} className='total-btn'>Order</button>
    </div>
  )
}