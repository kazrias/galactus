import "./Total.css";

import { useDispatch, useSelector } from "react-redux";

import { deleteFromCart } from "../../store/slices/cartSlice";

import { database } from "../../config/firebaseConfig";

import { push, ref, remove, set } from "firebase/database";

export const Total = () => {
  const totalPrice = useSelector((state) => state.cart.cart).reduce(
    (curr, item) => curr + item.price,
    0,
  );
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.app.loggedUser);
  const cartItems = useSelector((state) => state.cart.cart);

  const onClickOrder = async () => {
    for (let { id, name, price, images, key } of cartItems) {
      const orderRef = ref(database, `orders/${data}`);
      const newOrderRef = await push(orderRef);
      const orderKey = newOrderRef.key;
      await set(newOrderRef, { id, name, price, images, orderKey });
      const cartItemRef = ref(database, `cart/${data}/${key}`);
      await remove(cartItemRef);
      dispatch(deleteFromCart({ id }));
    }
  };
  return (
    <div className='total-box'>
      <div className='total'>
        <p className='total-text'>Total</p>
        <div></div>
        <p className='total-money'>{totalPrice.toFixed(2)}$</p>
      </div>
      <button onClick={onClickOrder} className='total-btn'>
        Order
      </button>
    </div>
  );
};
