import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter(({ id }) => id !== action.payload.id)
    },
    updateCart: (state, action) => {

      state.cart = action.payload;
    }
  }

})
export const { addToCart, deleteFromCart,updateCart } = cartSlice.actions;
export default cartSlice.reducer