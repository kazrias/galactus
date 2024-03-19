import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateCart } from "../store/slices/cartSlice";

import { database } from "../config/firebaseConfig";

import { onValue, ref } from "firebase/database";

export const useFetchCart = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.app.loggedUser.data);
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
};
