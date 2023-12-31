import { Products } from "../Products/Products"
import { EmptyList } from "../EmptyList/EmptyList"
import './List.css'
export const List = ({ favorites, setFavorites, cartItems, setCartItems, onClickClearFavorites, onClickClearOrders, path, items }) => {
  const onClickClear = (path) => {
    switch (path) {
      case 'orders':
        onClickClearOrders()
        break;
      case 'favorites':
        onClickClearFavorites()
        break;
    }
  }
  return (<>
    <section className="list">
      <h2 className="list-title">{path}</h2>
      <div className={`container container--info container--list ${!items.length ? 'container--list-fit' : ''}`}>
          {items.length ? <>
            <Products setFavorites={setFavorites} favorites={favorites} setCartItems={setCartItems} cartItems={cartItems} path={path} items={items} />
            <div className="button-wrapper">
              <button onClick={() => onClickClear(path)} className="list-delete">Clear list</button>
            </div>
          </> : <EmptyList type={path} />}
      </div>
    </section>
  </>
  )
}