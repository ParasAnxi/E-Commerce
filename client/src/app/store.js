import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import itemsReducer from "../features/items/itemsSlice";
import cartReducer from "../features/cart/cartSlice";

const cartPersistConfig = {
    key:'cartItems',
    storage,
};
const reducers = combineReducers({
    item: itemsReducer,
    cart: persistReducer(cartPersistConfig,cartReducer),
});

const persistedReducer = persistReducer(cartPersistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});