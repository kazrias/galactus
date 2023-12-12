import './Cart.css'
import { Header } from '../Header/Header'
import { Product } from '../Product/Product'
export const Cart = ({ setCartItems, cartItems = [] }) => {
  console.log(cartItems);
  return (
    <>
      <Header />
      {
        cartItems.map(obj => (
          <Product setCartItems={setCartItems} cartItems={cartItems} key={obj.id} {...obj} />
        ))
      }
    </>
  )
}