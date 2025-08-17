import { configureStore } from '@reduxjs/toolkit';
import { listingsApi } from './listingsApi';

export const store = configureStore({
  reducer: {
    [listingsApi.reducerPath]: listingsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listingsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
