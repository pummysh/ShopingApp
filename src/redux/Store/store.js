import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "../reducers/ProductReducer";


const store = configureStore({
  reducer: ProductReducer,
});

export {store};
