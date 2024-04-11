import appReducer from "./slices/appSlice";
import cartReducer from "./slices/cartSlice";
import favoritesReducer from "./slices/favoritesSlice";
import ordersReducer from "./slices/ordersSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    app: appReducer,
    favorites: favoritesReducer,
    orders: ordersReducer,
  },
});
export default store;
