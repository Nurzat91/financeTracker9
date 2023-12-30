import {configureStore} from "@reduxjs/toolkit";
import {categoriesReducer} from "../store/category/categorySlice";
import {transactionsReducer} from "../store/Add/addSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    transactions: transactionsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;