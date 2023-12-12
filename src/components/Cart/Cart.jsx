import './Cart.css'
import { Header } from '../Header/Header'
import { Product } from '../Product/Product'
export const Cart = ({ isCartClosing, isCartOpened, setCartItems, cartItems = [] }) => {
  console.log(cartItems);
  return (
    isCartOpened && <div className="cart-wrapper">
      < div className={`overlay ${isCartClosing ? 'closing' : ''}`} ></div >
      <div className={`cart ${isCartClosing ? 'closing' : ''}`}>
        {
          cartItems.map(obj => (
            <Product setCartItems={setCartItems} cartItems={cartItems} key={obj.id} {...obj} />
          ))
        }
      </div>

    </div>
  )
}