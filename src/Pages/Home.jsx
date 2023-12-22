import { Info } from "../components/Info/Info"
import { Screen } from "../components/Screen/Screen"
export const Home = ({ path,setCartItems, cartItems }) => {
  return (<>
    <Screen />
    <Info path={path} setCartItems={setCartItems} cartItems={cartItems} />
  </>
  )
}