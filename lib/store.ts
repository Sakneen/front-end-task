import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { unitsApi } from './services/unitsApi';

export const makeStore = () =>
  configureStore({
    reducer: {
      [unitsApi.reducerPath]: unitsApi.reducer,
    },
    middleware: (gDM) => gDM().concat(unitsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
