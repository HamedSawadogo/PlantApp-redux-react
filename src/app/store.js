import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "../features/card.sclice";
export default configureStore({
  reducer: {
    cards: CardReducer,
  },
});
