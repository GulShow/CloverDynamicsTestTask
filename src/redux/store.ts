import {configureStore} from '@reduxjs/toolkit';
import colorReducer from './slices/colourSlice';

export const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
