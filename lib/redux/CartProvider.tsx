"use client";
import { Provider } from "react-redux";
import store from ".";
import { ReactNode } from "react";

function CartProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export default CartProvider;
