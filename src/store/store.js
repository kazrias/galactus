import { configureStore } from "@reduxjs/toolkit";

import appReducer from './slices/appSlice'
import cartReducer from './slices/cartSlice'
import favoritesReducer from './slices/favoritesSlice'
const store = configureStore({
  reducer: {
    cart: cartReducer,
    app: appReducer,
    favorites: favoritesReducer
  }
});
export default store;