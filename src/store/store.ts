import { configureStore } from '@reduxjs/toolkit';
import areasReducer from '../features/areas/areasSlice';

export const store = configureStore({
  reducer: {
    areas: areasReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;