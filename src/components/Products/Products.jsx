import './Products.css'
import { Product } from "../Product/Product"
export const Products = ({favItems, items = [] }) => {
  
  return (
    <section className="products">
      {
        items.map(obj => (
          <Product favItems={favItems} key={obj.id} {...obj} />
        ))
      }
    </section>

  )
}