import './Products.css'
import { Product } from "../Product/Product"
import { OrderProduct } from '../OrderProduct/OrderProduct'
export const Products = ({ path, setFavorites,favorites, isLoading, setCartItems, cartItems = [], items = [] }) => {
  const renderItems = (path) => {
    switch (path) {
      case 'home':
        return (isLoading ? [...Array(8)] : items).map((obj, index) => (
          <Product isLoading={isLoading} setFavorites={setFavorites} favorites={favorites} setCartItems={setCartItems} cartItems={cartItems} key={isLoading ? index : obj.id} {...obj} />
        ))
      case 'orders':
        return items.map((obj, index) => (
          <OrderProduct key={index} {...obj} />
        ))
      case 'favorites':
        return items.map((obj, index) => (
          <Product setFavorites={setFavorites} favorites={favorites} setCartItems={setCartItems} cartItems={cartItems} key={obj.id} {...obj} />
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