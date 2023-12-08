import { Product } from "../Product/Product"
export const Products = ({ items = [] }) => {
  return (
    items.map(obj => (
      <Product key={obj.id} {...obj} />
    ))
  )
}