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
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([])
  const onClickOverlay = () => {
    setIsCartClosing(true);
    setTimeout(() => {
      setIsCartOpened(false);
    }, 500)
  }
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
    const localCartData = localStorage.getItem('cartItems');
    const localOrdersData = localStorage.getItem('orders');
    if (localCartData !== null) {
      setCartItems([...JSON.parse(localCartData)])
    }
    if (localOrdersData !== null) {
      setOrders([...JSON.parse(localOrdersData)])
    }
  }, [])
  
  useEffect(() => {
    setCartCount(cartItems.length)
    setTotal(+(cartItems.reduce((curr, { price }) => curr + price, 0)).toFixed(1))
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  const onClickOrder = () => {
    setOrders((prev) => {
      localStorage.setItem('orders', JSON.stringify([...prev, ...cartItems]));
      return [...prev, ...cartItems]
    }
    );
    setCartItems([]);
  }

  return (
    <>
      <Background />
      <Header total={total} onClickCart={onClickCart} cartCount={cartCount} />
      <Screen />
      <Info setCartItems={setCartItems} cartItems={cartItems} />
      {isCartOpened && <Cart onClickOrder={onClickOrder} total={total} onClickOverlay={onClickOverlay} isCartClosing={isCartClosing} isCartOpened={isCartOpened} setCartItems={setCartItems} cartItems={cartItems} />}
    </>
  )
}

export default App