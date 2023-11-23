import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorite";

const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

export default store;
