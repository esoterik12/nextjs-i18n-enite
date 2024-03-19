import { createSlice } from "@reduxjs/toolkit";
import { ISliceState, ICartItem } from "../types";

const initialState: ISliceState = {
  items: [],
  packItems: [],
  totalQuantity: 0,
  changed: false,
  cartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    openCart(state) {
      state.cartOpen = true
    },
    closeCart(state) {
      state.cartOpen = false
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    clearCart(state) {
      state.totalQuantity = 0;
      state.items = [];
      state.packItems = [];
      state.changed = false;
      state.cartOpen = false;
    },
    addItemToCart(state, action) {
      const newItem: ICartItem = action.payload;
      const existingItem: ICartItem | undefined = state.items.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.image
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    addPackToCart(state, action) {
      const newPack: ICartItem = action.payload
      const existingItem: ICartItem | undefined = state.items.find(
        (item) => item.id === newPack.id
      )
      state.totalQuantity++;
      state.changed = true
      if (!existingItem) {
        state.items.push({
          id: newPack.id,
          price: newPack.price,
          quantity: 1,
          totalPrice: newPack.price,
          title: newPack.title,
          image: newPack.image
        })
        if (newPack.equipmentList) {
          state.packItems.push(...newPack.equipmentList)
        }
      }
    },
    // Does not work for packs with packItems
    removeItemFromCart(state, action) {
      state.totalQuantity--;
      const id = action.payload;
      const existingItem: ICartItem | undefined = state.items.find(
        (item) => item.id === id
      );
      state.changed = true;
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
