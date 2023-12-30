import {createSlice} from "@reduxjs/toolkit";
import {createTransaction, fetchTransaction} from "./addThunks";
import {RootState} from "../../app/store";
import {TransactionsTypes} from "../../types";

interface AddState{
  transactionLoading: boolean;
  fetchLoading: boolean;
  data: TransactionsTypes[];
}

const initialState: AddState = {
  transactionLoading: false,
  fetchLoading: false,
  data: [],
}

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTransaction.pending, (state) => {
      state.transactionLoading = true;
    });
    builder.addCase(createTransaction.fulfilled, (state) => {
      state.transactionLoading = false;
    });
    builder.addCase(createTransaction.rejected, (state) => {
      state.transactionLoading = false;
    });

    builder.addCase(fetchTransaction.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchTransaction.fulfilled, (state, {payload: items}) => {
      state.fetchLoading = false;
      state.data = items;
    });
    builder.addCase(fetchTransaction.rejected, (state) => {
      state.fetchLoading = false;
    });
  }
});
export const transactionsReducer = transactionsSlice.reducer;
export const getTransactions = (state: RootState) => state.transactions.data;

export const getLoading = (state: RootState) => state.transactions.fetchLoading;
export const createLoading = (state: RootState) => state.transactions.transactionLoading;