import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addTocart: (state, { payload }) => {
      const currentPlantAdded = state.cart.find(
        (plant) => plant.name === payload.name
      );
      if (currentPlantAdded) {
        const cartFilteredCurrentPlant = state.cart.filter(
          (plant) => plant.name !== payload.name
        );
        state.cart = [
          ...cartFilteredCurrentPlant,
          {
            name: payload.name,
            price: payload.price,
            amount: currentPlantAdded.amount + 1,
          },
        ];
      } else {
        state.cart.push({
          name: payload.name,
          price: payload.price,
          amount: payload.amount,
        });
      }
      window.localStorage.cart = JSON.stringify(state.cart);
    },
    setCart: (state, { payload }) => {
      state.cart = payload;
    },
    emptyCart: (state) => {
      state.cart = [];
      window.localStorage.cart = [];
    },
  },
});
export default cartSlice.reducer;
export const { addTocart, setCart, emptyCart } = cartSlice.actions;
