import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItems, fetchItems, updateItem } from "./itemsAPI";

const initialState = {
  status:'idle',
  items:[],
  page: 1,
};

const fetchItemsAsync = createAsyncThunk("items/fetchItems", async () => {
  const response = await fetchItems();
  return response.data;
});

const addItemsAsync = createAsyncThunk("items/addItems",async(item)=>{
  const response = await addItems(item);
  return response.data;
});

const updateItemAsync = createAsyncThunk('items/updateItem',async(item)=>{
  const response = await updateItem(item);
  return response.data;
});

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchItemsAsync.pending,(state)=>{
      state.status = 'loading';
    })
    .addCase(fetchItemsAsync.fulfilled,(state,action)=>{
      state.status = 'idle';
      state.items = action.payload;
    })
    .addCase(addItemsAsync.pending,(state)=>{
      state.status = 'loading';
    })
    .addCase(addItemsAsync.fulfilled,(state,action)=>{
      state.status = 'idle';
      state.items.push(action.payload);
    })
    .addCase(updateItemAsync.pending,(state)=>{
      state.status = 'loading';
    })
    .addCase(updateItemAsync.fulfilled,(state,action)=>{
      state.status = 'idle';
      const index = state.items.findIndex((item)=>item.id === action.payload.id);
      state.items[index] = action.payload;
    });
  },
});

export const selectAllItems = (state)=>state.items.items;

export default itemsSlice.reducer;
