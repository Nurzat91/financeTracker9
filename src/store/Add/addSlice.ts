import {createSlice} from "@reduxjs/toolkit";
import {createTransaction, deleteTransactions, fetchTransaction} from "./addThunks";
import {RootState} from "../../app/store";
import {TransactionsTypes} from "../../types";

interface AddState{
  transactionLoading: boolean;
  fetchLoading: boolean;
  data: TransactionsTypes[];
  deleteLoading: false | string;
}

const initialState: AddState = {
  transactionLoading: false,
  fetchLoading: false,
  data: [],
  deleteLoading: false,
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

    builder.addCase(deleteTransactions.pending, (state, {meta}) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteTransactions.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteTransactions.rejected, (state) => {
      state.deleteLoading = false;
      state.fetchLoading = false;
    });
  }
});
export const transactionsReducer = transactionsSlice.reducer;
export const getTransactions = (state: RootState) => state.transactions.data;

export const getLoading = (state: RootState) => state.transactions.fetchLoading;
export const createLoading = (state: RootState) => state.transactions.transactionLoading;
export const deleteLoadingTransactions = (state: RootState) => state.transactions.deleteLoading;