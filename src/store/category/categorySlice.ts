import {createSlice} from "@reduxjs/toolkit";
import {GetCategories, SelectTypes} from "../../types";
import {createCategory, deleteCategory, fetchCategory} from "./categoryThunks";
import {RootState} from "../../app/store";


interface AddState{
  modalLoading: boolean;
  modalValue: SelectTypes | null;
  getCategoriesLoading: boolean;
  categories: GetCategories[];
  deleteLoading: false | string;
}

const initialState: AddState = {
  modalLoading: false,
  modalValue: null,
  getCategoriesLoading: false,
  categories: [],
  deleteLoading: false,
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCategory.pending, (state) => {
      state.modalLoading = true;
    });
    builder.addCase(createCategory.fulfilled, (state) => {
      state.modalLoading = false;
    });
    builder.addCase(createCategory.rejected, (state) => {
      state.modalLoading = false;
    });

    builder.addCase(fetchCategory.pending, (state) => {
      state.getCategoriesLoading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, {payload: data}) => {
      state.getCategoriesLoading = false;
      state.categories = data;
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      state.getCategoriesLoading = false;
    });

    builder.addCase(deleteCategory.pending, (state, {meta}) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteCategory.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteCategory.rejected, (state) => {
      state.deleteLoading = false;
      state.getCategoriesLoading = false;
    });
  }
});

export const categoriesReducer = categoriesSlice.reducer;
export const getCategories = (state: RootState) => state.categories.categories;
export const modalPostLoading = (state: RootState) => state.categories.modalLoading;
export const getCategoriesLoading = (state: RootState) => state.categories.getCategoriesLoading;
export const deleteCategoriesLoading = (state: RootState) => state.categories.deleteLoading;