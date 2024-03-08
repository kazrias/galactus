import './Products.css'
import { Product } from "../Product/Product"
import { OrderProduct } from '../OrderProduct/OrderProduct'
import { useSelector } from 'react-redux'
export const Products = ({ isLoading }) => {
  const path = useSelector(state => state.app.path)
  const products = useSelector(state => state.app.products)
  const renderItems = () => {
    switch (path) {
      case 'home':
        return (isLoading ? [...Array(8)] : products).map((obj, index) => (
          <Product isLoading={isLoading} {...obj} />
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