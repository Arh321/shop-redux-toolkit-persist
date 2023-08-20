import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import logger from "redux-logger";

import cart from "./features/cart";
import products from "./features/products";
import modal from "./features/modal/modal";

const rootReducer = combineReducers({
  products,
  cart,
  modal,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger];
const totalStore = () => {
  let store = configureStore({
    middleware: middlewares,
    reducer: persistedReducer,
  });
  let persistor = persistStore(store);
  return { store, persistor };
};

export default totalStore;
