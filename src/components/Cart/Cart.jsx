import './Cart.css'
import { Ufo } from '../Ufo/Ufo';
import { CartItem } from '../CartItem/CartItem';
import { Space } from '../Space/Space';
export const Cart = ({ isCartClosing, isCartOpened, setCartItems, cartItems = [] }) => {
  return (
    isCartOpened && <div className="cart-wrapper">
      < div className={`overlay ${isCartClosing ? 'closing' : ''}`} ></div >
      <div className={`cart ${isCartClosing ? 'closing' : ''}`}>

        {
          cartItems.length ? cartItems.map(obj => (
            <CartItem setCartItems={setCartItems} cartItems={cartItems} key={obj.id} {...obj} />
          )) : <Ufo />
        }
        <Space />
      </div>

    </div>
  )
}