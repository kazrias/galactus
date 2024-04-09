import "./HeaderStyle.css";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CartBtn } from "./HeaderBtns/CartBtn/CartBtn";
import { FavBtn } from "./HeaderBtns/FavBtn/FavBtn";
import { LogoBtn } from "./HeaderBtns/LogoBtn";
import { OrdersBtn } from "./HeaderBtns/OrdersBtn";
import { UserBtn } from "./HeaderBtns/UserBtn";

import { changePath } from "../../store/slices/appSlice";

export const Header = ({ onClickOverlay, onClickAnyList, onClickCart }) => {
  const logged = useSelector((state) => state.app.loggedUser.logged);
  const dispatch = useDispatch();
  const onClickList = () => {
    onClickAnyList();
    onClickOverlay();
  };
  return (
    <header className='header'>
      <Link
        onClick={() => {
          onClickList;
          dispatch(changePath("home"));
        }}
        to='/'
        className='header-link'
      >
        <LogoBtn />
      </Link>
      <div className='header-btns'>
        {logged && (
          <>
            <Link
              onClick={() => {
                onClickList();
                dispatch(changePath({ path: "orders" }));
              }}
              to='/orders'
              className='header-orders header-btn'
            >
              <OrdersBtn />
            </Link>
            <Link to='/favorites'>
              <FavBtn
                onClick={() => {
                  onClickList();
                  dispatch(changePath({ path: "favorites" }));
                }}
              />
            </Link>
            <CartBtn onClickCart={onClickCart} />
          </>
        )}
        <div className='header-orders header-btn'>
          <UserBtn logged={logged} />
        </div>
      </div>
    </header>
  );
};
