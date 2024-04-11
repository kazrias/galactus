import "./List.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateFavorites } from "../../store/slices/favoritesSlice";
import { updateOrders } from "../../store/slices/ordersSlice";

import { database } from "../../config/firebaseConfig";

import { ref, remove } from "firebase/database";

import { EmptyList } from "../EmptyList/EmptyList";
import { Products } from "../Products/Products";

export const List = () => {
  const path = useSelector((state) => state.app.path);
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    switch (path) {
      case "favorites":
        return state.favorites.favorites;
      case "orders":
        return state.orders.orders;
      default:
        return [];
    }
  });
  const { data } = useSelector((state) => state.app.loggedUser);
  const onClickClear = async (path) => {
    switch (path) {
      case "orders":
        const orderRef = ref(database, `orders/${data}`);
        await remove(orderRef);
        dispatch(updateOrders([]));
        break;
      case "favorites":
        const favsRef = ref(database, `favorites/${data}`);
        await remove(favsRef);
        dispatch(updateFavorites([]));
        break;
    }
  };
  return (
    <>
      <section className='list'>
        <h2 className='list-title'>{path}</h2>
        <div
          className={`container container--info container--list ${!items.length ? "container--list-fit" : ""}`}
        >
          {items.length ? (
            <>
              <Products items={items} />
              <div className='button-wrapper'>
                <button
                  onClick={() => onClickClear(path)}
                  className='list-delete'
                >
                  Clear list
                </button>
              </div>
            </>
          ) : (
            <EmptyList type={path} />
          )}
        </div>
      </section>
    </>
  );
};
