import { useEffect } from "react";

export const useCartItems = (cartItems, setCartCount, setTotal) => {
  useEffect(() => {
    setCartCount(cartItems.length)
    setTotal(+(cartItems.reduce((curr, { price }) => curr + price, 0)).toFixed(1))
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])
}