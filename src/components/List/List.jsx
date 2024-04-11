import "./List.css";



import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



import { EmptyList } from "../EmptyList/EmptyList";
import { Products } from "../Products/Products";


export const List = () => {
  const path = useSelector((state) => state.app.path);
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
  const onClickClear = (path) => {
    switch (path) {
      case "orders":
        break;
      case "favorites":
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