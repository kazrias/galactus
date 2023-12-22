import { Products } from "../Products/Products"
import { EmptyList } from "../EmptyList/EmptyList"
import './Orders.css'
export const Orders = ({ path, items }) => {
  return (<>
    <section className="orders">
      <h2 className="orders-title">Orders</h2>
      <div className="container container--info">
        {items.length ? <Products path={path} items={items} /> : <EmptyList type={'order'}/>}

      </div>
    </section>
  </>
  )
}