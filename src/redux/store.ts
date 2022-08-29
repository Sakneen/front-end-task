import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import {useDispatch } from "react-redux";
import reducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";

const persistConfig = {
  key: "root",
  storage: storage,
};

let persistedReducer = persistReducer(persistConfig, reducer);

const store = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const persistor = persistStore(store());
export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type TStore = typeof store;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(store);
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
