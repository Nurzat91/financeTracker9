import {createAsyncThunk} from "@reduxjs/toolkit";
import {GetCategories, GetList, SelectTypes} from "../../types";
import axiosApi from "../../axiosApi";
import {AppDispatch} from "../../app/store"

export const createCategory = createAsyncThunk<void, SelectTypes>(
  'categories/create',
  async (categoryData) => {
    await axiosApi.post('/categories.json',categoryData)
  }
);

export const fetchCategory = createAsyncThunk<GetCategories[], undefined, {dispatch: AppDispatch}>(
  'categories/fetch',
  async () => {
    const dataResponse = await axiosApi.get<GetList | null>('/categories.json');
    const data = dataResponse.data;

    let newData: GetCategories[] = [];
    if (data) {
      newData = Object.keys(data).map(key => {
        const dish = data[key];
        return {
          ...dish,
          id: key,
        }
      });
    }

    return newData;
  }
);