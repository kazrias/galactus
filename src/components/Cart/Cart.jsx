import './Cart.css'
import { CartItem } from '../CartItem/CartItem';
export const Cart = ({ isCartClosing, isCartOpened, setCartItems, cartItems = [] }) => {
  console.log(cartItems);
  return (
    isCartOpened && <div className="cart-wrapper">
      < div className={`overlay ${isCartClosing ? 'closing' : ''}`} ></div >
      <div className={`cart ${isCartClosing ? 'closing' : ''}`}>
        {
          cartItems.map(obj => (
            <CartItem setCartItems={setCartItems} cartItems={cartItems} key={obj.id} {...obj} />
          ))
        }
      </div>

    </div>
  )
}