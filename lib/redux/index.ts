import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {cart: cartSlice.reducer}
})

export type RootStateType = ReturnType<typeof store.getState>

export default store;