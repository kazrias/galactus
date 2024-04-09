import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateCart } from "../store/slices/cartSlice";
import { updateFavorites } from "../store/slices/favoritesSlice";

import { database } from "../config/firebaseConfig";

import { onValue, ref } from "firebase/database";

export const useFetchCart = (type) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.app.loggedUser.data);

  useEffect(() => {
    const itemsRef = ref(database, `${type}/${userId}`);
    const listener = onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const items = Object.values(data);
        switch(type){
          case 'cart':
            dispatch(updateCart(items));
            break;
            case 'favorites':
              dispatch(updateFavorites(items))


        }
      }
    });
    return () => {
      listener();
    };
  }, [userId]);
};
