import "./Cart.css";

import { useSelector } from "react-redux";

import { CartItem } from "../CartItem/CartItem";
import { Space } from "../Space/Space";
import { Total } from "../Total/Total";
import { Ufo } from "../Ufo/Ufo";

export const Cart = ({ onClickOverlay, isCartClosing, isCartOpened }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  return (
    isCartOpened && (
      <div className='cart-wrapper'>
        <div
          onClick={onClickOverlay}
          className={`overlay ${isCartClosing ? "closing" : ""}`}
        ></div>
        <div className={`cart ${isCartClosing ? "closing" : ""}`}>
          <div className='cart-items'>
            {cartItems.length ? (
              cartItems.map((obj) => (
                <CartItem cartItems={cartItems} key={obj.id} {...obj} />
              ))
            ) : (
              <Ufo />
            )}
          </div>
          <Space />
          {cartItems.length ? <Total /> : null}
        </div>
      </div>
    )
  );
};
