import { configureStore } from '@reduxjs/toolkit';
import { weatherApi } from './weatherApi';

const middlewares = [weatherApi.middleware];

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
