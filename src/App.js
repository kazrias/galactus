import "./app.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Background } from "./components/Background/Background";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";

import { FavoritesPage } from "./Pages/FavoritesPage";
import { Home } from "./Pages/Home";
import Login from "./Pages/Login/Login";
import { NotFound } from "./Pages/NotFound";
import { OrdersPage } from "./Pages/OrdersPage";

import { loginUser } from "./store/slices/appSlice";
import { updateCart } from "./store/slices/cartSlice";

import { auth } from "./config/firebaseConfig";
import { database } from "./config/firebaseConfig";

import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";

const App = () => {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isCartClosing, setIsCartClosing] = useState(false);
  const userId = useSelector((state) => state.app.loggedUser.data);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(loginUser({ logged: true, data: uid }));
      } else {
        dispatch(loginUser({ logged: false, data: "" }));
      }
    });
  }, []);
  useEffect(() => {
    const cartItems = ref(database, `cart/${userId}`);
    const listener = onValue(cartItems, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const cartItems = Object.values(data);
        dispatch(updateCart(cartItems));
      }
    });
    return () => {
      listener();
    };
  }, [userId]);
  const onClickOverlay = () => {
    setIsCartClosing(true);
    setTimeout(() => {
      setIsCartOpened(false);
    }, 500);
  };

  const onClickCart = () => {
    if (isCartOpened) {
      setIsCartClosing(true);
      setTimeout(() => {
        setIsCartOpened(false);
      }, 500);
      document.body.style.overflow = "";
    } else {
      setIsCartClosing(false);
      setIsCartOpened(true);
      if (window.innerWidth <= 530) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const onClickAnyList = () => {
    onClickOverlay();
    document.body.style.overflow = "";
  };

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
