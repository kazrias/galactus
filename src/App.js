import "./app.css";

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Background } from "./components/Background/Background";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";

import { FavoritesPage } from "./Pages/FavoritesPage";
import { Home } from "./Pages/Home";
import Login from "./Pages/Login/Login";
import { NotFound } from "./Pages/NotFound";
import { OrdersPage } from "./Pages/OrdersPage";

import { useAuthUser } from "./hooks/useAuthUser";
import { useCartClick } from "./hooks/useCartClick";
import { useFetchCart } from "./hooks/useFetchCart";

const App = () => {
  useAuthUser();
  useFetchCart();
  const {
    onClickOverlay,
    onClickCart,
    onClickAnyList,
    isCartClosing,
    isCartOpened,
  } = useCartClick();

  return (
    <>
      <Header
        onClickOverlay={onClickOverlay}
        onClickCart={onClickCart}
        onClickAnyList={onClickAnyList}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {isCartOpened && (
        <Cart
          onClickOverlay={onClickOverlay}
          isCartClosing={isCartClosing}
          isCartOpened={isCartOpened}
        />
      )}
      <Background />
    </>
  );
};

export default App;
