import {createAsyncThunk} from "@reduxjs/toolkit";
import {AddSelect, ApiTransactions, TransactionsTypes} from "../../types";
import axiosApi from "../../axiosApi";
import {AppDispatch} from "../../app/store";

export const createTransaction = createAsyncThunk<void, AddSelect>(
  'transactions/create',
  async (transactionData) => {
    await axiosApi.post('/transactions.json', transactionData)
  }
);

export const fetchTransaction = createAsyncThunk<TransactionsTypes[], undefined, {dispatch: AppDispatch}>(
  'transactions/fetch',
  async () => {
    const transactionResponse = await axiosApi.get<ApiTransactions | null>('/transactions.json');
    const data = transactionResponse.data;

    let newData: TransactionsTypes[] = [];

    if (data) {
      newData = Object.keys(data).map(key => {
        const dishKey = data[key];
        return {
          ...dishKey,
          id: key,
        }
      });
    }

    return newData;
  }
);