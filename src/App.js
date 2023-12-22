import React, { useState, useEffect } from "react";

import { Background } from "./components/Background/Background";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { Home } from "./Pages/Home";
import { OrdersPage } from "./Pages/OrdersPage";
import { FavoritesPage } from "./Pages/FavoritesPage";
import { Route, Routes } from 'react-router-dom'
import { NotFound } from "./Pages/NotFound";
import './app.css'
const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isCartClosing, setIsCartClosing] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [orders, setOrders] = useState([])
  const [favorites, setFavorites] = useState([])
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
    const localFavoritesData = localStorage.getItem('favorites');
    if (localCartData !== null) {
      setCartItems([...JSON.parse(localCartData)])
    }
    if (localOrdersData !== null) {
      setOrders([...JSON.parse(localOrdersData)])
    }
    if (localFavoritesData !== null) {
      setFavorites([...JSON.parse(localFavoritesData)])
    }
  }, [])

  useEffect(() => {
    setCartCount(cartItems.length)
    setTotal(+(cartItems.reduce((curr, { price }) => curr + price, 0)).toFixed(1))
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  const onClickOrder = () => {
    setOrders((prev) => {
      localStorage.setItem('orders', JSON.stringify([...prev, ...cartItems]));
      return [...prev, ...cartItems]
    }
    );
    setCartItems([]);
  }
  const onClickClearOrders = () => {
    setOrders(() => {
      localStorage.setItem('orders', JSON.stringify([]));
      return []
    }
    );
  }
  const onClickClearFavorites = () => {
    setFavorites(() => {
      localStorage.setItem('favorites', JSON.stringify([]));
      return []
    }
    );
  }

  return (
    <>
      <Background />
      <Header total={total} onClickCart={onClickCart} cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<Home path={'home'} setFavorites={setFavorites} favorites={favorites} setCartItems={setCartItems} cartItems={cartItems} />} />
        <Route path='/orders' element={<OrdersPage onClickClearOrders={onClickClearOrders} path={'orders'} items={orders} />} />
        <Route path='/favorites' element={<FavoritesPage favorites={favorites} setFavorites={setFavorites} cartItems={cartItems} setCartItems={setCartItems} onClickClearFavorites={onClickClearFavorites} onClickClearOrders={onClickClearOrders} path={'favorites'} items={favorites} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {isCartOpened && <Cart onClickOrder={onClickOrder} total={total} onClickOverlay={onClickOverlay} isCartClosing={isCartClosing} isCartOpened={isCartOpened} setCartItems={setCartItems} cartItems={cartItems} />}
    </>
  )
}

export default App