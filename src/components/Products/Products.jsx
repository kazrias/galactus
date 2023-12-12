import './Products.css'
import { Product } from "../Product/Product"
export const Products = ({ setCartItems,cartItems, items = [] }) => {

  return (

    <section className="products">
      {
        items.map(obj => (
          <Product setCartItems={setCartItems} cartItems={cartItems} key={obj.id} {...obj} />
        ))
      }
    </section>

  )
}