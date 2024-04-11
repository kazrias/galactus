import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateCart } from "../store/slices/cartSlice";
import {
  changeFavsLoading,
  updateFavorites,
} from "../store/slices/favoritesSlice";
import { changeOrdersLoading, updateOrders } from "../store/slices/ordersSlice";

import { database } from "../config/firebaseConfig";

import { onValue, ref } from "firebase/database";

export const useFetchItems = (type) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.app.loggedUser.data);

  useEffect(() => {
    dispatch(changeFavsLoading({ loading: true }));
    dispatch(changeOrdersLoading({ loading: true }));
    const itemsRef = ref(database, `${type}/${userId}`);
    const listener = onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const items = Object.values(data);
        switch (type) {
          case "cart":
            dispatch(updateCart(items));
            break;
          case "favorites":
            dispatch(updateFavorites(items));
            dispatch(changeFavsLoading({ loading: false }));
            break;
          case "orders":
            dispatch(updateOrders(items));
            dispatch(changeOrdersLoading({ loading: false }));
            break;
        }
      } else {
        dispatch(changeFavsLoading({ loading: false }));
        dispatch(changeOrdersLoading({ loading: false }));
      }
    });
    return () => {
      listener();
    };
  }, [userId]);
};
