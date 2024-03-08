import { configureStore } from "@reduxjs/toolkit";

import appReducer from './slices/appSlice'
import cartReducer from './slices/cartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    app: appReducer,
  }
});
export default store;