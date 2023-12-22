import { Info } from "../components/Info/Info"
import { Screen } from "../components/Screen/Screen"
export const Home = ({ setCartItems, cartItems }) => {
  return (<>
    <Screen />
    <Info setCartItems={setCartItems} cartItems={cartItems} />
  </>

  )
}