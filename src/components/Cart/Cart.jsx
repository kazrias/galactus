import './Cart.css'
import { Ufo } from '../Ufo/Ufo';
import { CartItem } from '../CartItem/CartItem';
import { Space } from '../Space/Space';
import { Total } from '../Total/Total';
export const Cart = ({ total,onClickOverlay, isCartClosing, isCartOpened, setCartItems, cartItems = [] ,onClickOrder }) => {
  return (
    isCartOpened && <div className="cart-wrapper">
      <div onClick={onClickOverlay} className={`overlay ${isCartClosing ? 'closing' : ''}`} ></div >
      <div className={`cart ${isCartClosing ? 'closing' : ''}`}>

        <div className="cart-items">
          {
            cartItems.length ? cartItems.map(obj => (
              <CartItem setCartItems={setCartItems} cartItems={cartItems} key={obj.id} {...obj} />
            )) : <Ufo />
          }
        </div>
        <Space />
        {
          cartItems.length ? <Total onClickOrder={onClickOrder} total={total} /> : null
        }

      </div>
    </div>
  )
}