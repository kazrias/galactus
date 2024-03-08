import './Products.css'
import { Product } from "../Product/Product"
import { OrderProduct } from '../OrderProduct/OrderProduct'
import { useSelector } from 'react-redux'
export const Products = ({ }) => {
  const path = useSelector(state => state.app.path)
  console.log(path);
  const renderItems = () => {
    switch (path) {
      case 'home':
        return (isLoading ? [...Array(8)] : items).map((obj, index) => (
          <Product />
        ))
      case 'orders':
        return items.map((obj, index) => (
          <OrderProduct key={index} />
        ))
      case 'favorites':
        return items.map((obj, index) => (
          <Product />
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