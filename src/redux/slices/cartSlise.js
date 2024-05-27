import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      let findItem = state.items.find(
        (product) => product.product.id === action.payload.product.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },

    plusItem(state, action) {
      let findItem = state.items.find(
        (product) => product.product.id === action.payload
      );
      if (findItem) {
        findItem.count++;
      } else{
        let findItem = state.items.find(
          (product) => product.product.id === action.payload.product.id
        );
      }

    },

    minusItem(state, action) {
      let findItem = state.items.find(
        (product) => product.product.id === action.payload
      );
      if (findItem) {
        findItem.count--;
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter(
        (product) => product.product.id !== action.payload
      );
    },
  },
});

export const { addItem, plusItem, minusItem, removeItem} =
  cartSlice.actions;

export default cartSlice.reducer;
