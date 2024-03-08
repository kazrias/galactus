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
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isCartClosing, setIsCartClosing] = useState(false);


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


  return (
    <>
      <Header onClickOverlay={onClickOverlay} onClickCart={onClickCart} onClickAnyList={onClickAnyList} />
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/favorites' element={<FavoritesPage  />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {isCartOpened && <Cart onClickOverlay={onClickOverlay} isCartClosing={isCartClosing} isCartOpened={isCartOpened} />}
      <Background />
    </>
  )
}

export default App