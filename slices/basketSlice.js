import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increment: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index].quantity = state.items[index].quantity + 1;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    decrement: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        if (state.items[index].quantity !== 1) {
          state.items[index].quantity = state.items[index].quantity - 1;
       }
      } else {
        console.log("item not found");
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        // exist item in basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove item (id:${action.payload.id} as its not in cart)`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { increment, removeFromBasket, decrement } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
