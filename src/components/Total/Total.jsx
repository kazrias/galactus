import './Total.css'
export const Total = ({ total}) => {
  return (
    <div className='total-box'>
      <div className="total">
        <p className='total-text'>Total</p>
        <div></div>
        <p className='total-money'>{total}$</p>
      </div>
      <button className='total-btn'>Order</button>
    </div>
  )
}