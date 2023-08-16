import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteFromCart, fetchCartItems, resetCart } from "./cartAPI";


const initialState = {
    status:'idle',
    cartItems:[],
    totalPrice: 0,
    totalAmount:0,
}

export const fetchCartItemsAsync = createAsyncThunk('cart/fetchCartItems',async()=>{
    const response = await fetchCartItems();
    return response.data;
});

export const addToCartAsync = createAsyncThunk('cart/addToCart',async(item)=>{
    const response = await addToCart(item);
    return response.data;
})

export const deleteFromCartAsync = createAsyncThunk('cart/delete',async(id)=>{
    const response = await deleteFromCart(id);
    return response.data;
});

export const resetCartAsync = createAsyncThunk('cart/reset',async()=>{
    const response = await resetCart();
    return response.data;
})

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setTotalAmountAndPrice:(state)=>{
            let amount = 0;
            let price = 0;
            state.cartItems.forEach((item)=>{
                amount += item.amount;
                price += item.price * item.amount;
            });
            state.totalAmount = amount;
            state.totalPrice = price;
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCartItemsAsync.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(fetchCartItemsAsync.fulfilled,(state,action)=>{
            state.cartItems = action.payload;
        })
        .addCase(addToCartAsync.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(addToCartAsync.fulfilled,(state,action)=>{
            state.status = 'idle';
            state.cartItems = action.payload;
        })
        .addCase(deleteFromCartAsync.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(deleteFromCartAsync.fulfilled,(state,action)=>{
            state.status = 'idle';
            const index = state.cartItems.findIndex((item)=>item.id === action.payload.id);
            state.cartItems.splice(index,1);
        })
        .addCase(resetCartAsync.pending,(state)=>{
            state.status = 'loading';
        })
        .addCase(resetCartAsync.fulfilled,(state,action)=>{
            state.status = 'idle';
            state.cartItems = [];
        })
    }
});
export const selectAllCartItems = (state)=>state.cart.cartItems;
export const { setTotalAmountAndPrice } = cartSlice.actions;
export const cartStatus = (state)=>state.cart.status;
export default cartSlice.reducer;