import { createSlice } from '@reduxjs/toolkit';

import { PopulationState } from '@/constant/types';
import { ageList } from '@/constant/url';

const initialState: PopulationState = {
  prefectures: [],
  isLoading: false,
  error: '',
  age: ageList[0],
  infos: [],
};

export const Slice = createSlice({
  name: 'populationReducer',
  initialState,
  reducers: {
    setLoading(state) {
      state.isLoading = true;
      state.error = '';
    },

    loadPref(state, action) {
      state.prefectures = action.payload.data;
      state.isLoading = false;
    },

    loadPopulation(state, action) {
      state.infos.push(action.payload);
      state.isLoading = false;
    },

    deletePopulation(state, action) {
      state.infos = state.infos.filter(
        (item) => item.prefCode !== action.payload,
      );
    },

    setAge(state, action) {
      state.age = action.payload;
      state.isLoading = false;
    },

    showError(state, action) {
      state.error = action.payload.message;
      state.isLoading = false;
    },
  },
});

export const populationReducer = Slice.reducer;
