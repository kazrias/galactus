import { List } from "../components/List/List"
export const FavoritesPage = ({ favorites, setFavorites, cartItems=[], setCartItems, onClickClearFavorites, onClickClearOrders, path, items=[] }) => {
  return <List favorites={favorites} setFavorites={setFavorites} cartItems={cartItems} setCartItems={setCartItems} onClickClearFavorites={onClickClearFavorites} onClickClearOrders={onClickClearOrders} path={path} items={items} />
}