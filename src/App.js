import React, { useState, useEffect } from "react";

import { Background } from "./components/Background/Background";
import { Header } from "./components/Header/Header";
import { Screen } from "./components/Screen/Screen";
import { Info } from "./components/Info/Info";
import { Cart } from "./components/Cart/Cart";

import './app.css'
const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isCartClosing, setIsCartClosing] = useState(false);
  const onClickCart = () => {
    if (isCartOpened) {
      setIsCartClosing(true);
      setTimeout(() => {
        setIsCartOpened((prev) => !prev);
      }, 500)
    }
    else {
      setIsCartClosing(false);
      setIsCartOpened((prev) => !prev);
    }
  }
  useEffect(() => {
    const localData = localStorage.getItem('cartItems');
    if (localData !== null) {
      console.log('localData', localData)
      setCartItems([...JSON.parse(localData)])
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <>
      <Background />
      <Header onClickCart={onClickCart} />
      <Screen />
      <Info setCartItems={setCartItems} cartItems={cartItems} />
      <Cart isCartClosing={isCartClosing} isCartOpened={isCartOpened} setCartItems={setCartItems} cartItems={cartItems} />
    </>
  )
}

export default App