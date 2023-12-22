import './Products.css'
import { Product } from "../Product/Product"
import { OrderProduct } from '../OrderProduct/OrderProduct'
export const Products = ({ path, isLoading, setCartItems, cartItems, items }) => {
  const renderItems = (path) => {
    switch (path) {
      case 'home':
        return (isLoading ? [...Array(8)] : items).map((obj, index) => (
          <Product isLoading={isLoading} setCartItems={setCartItems} cartItems={cartItems} key={isLoading ? index : obj.id} {...obj} />
        ))
      case 'orders':
        return items.map((obj, index) => (
          <OrderProduct key={index} {...obj} />
        ))
    }

  }
  return (
    <section className="products">
      {
        renderItems(path)
      }
    </section>

  )
}