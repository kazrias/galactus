import './Products.css'
import { Product } from "../Product/Product"
export const Products = ({ isLoading, setCartItems, cartItems, items = [] }) => {
  return (
    <section className="products">
      {
        (isLoading ? [...Array(8)] : items).map((obj, index) => (
          <Product isLoading={isLoading} setCartItems={setCartItems} cartItems={cartItems} key={isLoading ? index : obj.id} {...obj} />
        ))
      }
    </section>

  )
}