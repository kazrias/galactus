import './Products.css'
import { Product } from "../Product/Product"
export const Products = ({ items = [] }) => {
  return (
    <section className="products">
      {
        items.map(obj => (
          <Product key={obj.id} {...obj} />
        ))
      }
    </section>

  )
}