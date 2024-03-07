import React, { useState } from "react";

import { Background } from "./components/Background/Background";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { Home } from "./Pages/Home";
import { OrdersPage } from "./Pages/OrdersPage";
import { FavoritesPage } from "./Pages/FavoritesPage";
import { NotFound } from "./Pages/NotFound";
import { useLocalStorageData } from "./hooks/useLocalStorageData";

import { Route, Routes } from 'react-router-dom'

import { useFavorites } from "./hooks/useFavorites";
import { useCartItems } from "./hooks/useCartItems";
import { useOrders } from "./hooks/useOrders";

import './app.css'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [orders, setOrders] = useState([])
  const [favorites, setFavorites] = useState([])
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isCartClosing, setIsCartClosing] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useLocalStorageData(['cartItems', 'orders', 'favorites'], { 'cartItems': setCartItems, 'orders': setOrders, 'favorites': setFavorites })
  useCartItems(cartItems, setCartCount, setTotal)
  useFavorites(favorites);
  useOrders(orders);

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
        setIsCartOpened(false);
      }, 500)
      document.body.style.overflow = '';
    }
    else {
      setIsCartClosing(false);
      setIsCartOpened(true);
      if (window.innerWidth <= 530) {
        document.body.style.overflow = 'hidden';
      }
    }
  }

  const onClickAnyList = () => {
    onClickOverlay()
    document.body.style.overflow = '';

  }
  
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
      <Header onClickOverlay={onClickOverlay} onClickCart={onClickCart} total={total} onClickAnyList={onClickAnyList} cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<Home path={'home'} setFavorites={setFavorites} favorites={favorites} setCartItems={setCartItems} cartItems={cartItems} />} />
        <Route path='/orders' element={<OrdersPage onClickClearOrders={onClickClearOrders} path={'orders'} items={orders} />} />
        <Route path='/favorites' element={<FavoritesPage favorites={favorites} setFavorites={setFavorites} cartItems={cartItems} setCartItems={setCartItems} onClickClearFavorites={onClickClearFavorites} onClickClearOrders={onClickClearOrders} path={'favorites'} items={favorites} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {isCartOpened && <Cart onClickOrder={onClickOrder} total={total} onClickOverlay={onClickOverlay} isCartClosing={isCartClosing} isCartOpened={isCartOpened} setCartItems={setCartItems} cartItems={cartItems} />}
      <Background />
    </>
  )
}

export default App