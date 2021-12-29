import { configureStore } from '@reduxjs/toolkit';
import annotationsReducer from '../features/annotations/annotationsSlice';

export const store = configureStore({
  reducer: {
    annotations: annotationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;