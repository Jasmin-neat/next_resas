import { configureStore } from '@reduxjs/toolkit';
import { populationReducer } from './slice';

export const store = configureStore({
  reducer: {
    population: populationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const selectPopulation = (state: RootState) => state.population;
