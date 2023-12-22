import { Info } from "../components/Info/Info"
import { Screen } from "../components/Screen/Screen"
export const Home = ({ path, setFavorites,favorites, setCartItems, cartItems }) => {
  return (<>
    <Screen />
    <Info path={path} setFavorites={setFavorites} favorites={favorites} setCartItems={setCartItems} cartItems={cartItems} />
  </>
  )
}