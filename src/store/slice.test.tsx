import { UnknownAction } from '@reduxjs/toolkit';
import { Slice, populationReducer } from './slice';
import { ageList } from '@/constant/url';

describe('populationSlice', () => {
  const initialState = {
    prefectures: [],
    infos: [],
    isLoading: false,
    age: ageList[0],
    error: '',
  };

  it('Return initial state', () => {
    expect(populationReducer(undefined, {} as UnknownAction)).toEqual(
      initialState,
    );
  });

  it('setLoading actions update correctly.', () => {
    const expectedState = {
      ...initialState,
      isLoading: true,
      error: '',
    };
    expect(populationReducer(initialState, Slice.actions.setLoading())).toEqual(
      expectedState,
    );
  });

  it('loadPref actions update correctly.', () => {
    const payload = ['dummy prefecture'];
    const expectedState = {
      ...initialState,
      prefectures: payload,
      isLoading: false,
    };
    expect(
      populationReducer(
        initialState,
        Slice.actions.loadPref({ data: payload }),
      ),
    ).toEqual(expectedState);
  });

  it('loadPopulation actions update correctly.', () => {
    const payload = { data: 'dummy data', prefCode: 1 };
    const expectedState = {
      ...initialState,
      infos: [payload],
      isLoading: false,
    };
    expect(
      populationReducer(initialState, Slice.actions.loadPopulation(payload)),
    ).toEqual(expectedState);
  });

  it('deletePopulation actions update correctly.', () => {
    const initialStatePop = {
      ...initialState,
      infos: [{ data: [], prefCode: 1 }],
    };
    const expectedState = {
      ...initialState,
      infos: [],
    };
    expect(
      populationReducer(initialStatePop, Slice.actions.deletePopulation(1)),
    ).toEqual(expectedState);
  });

  it('setAge actions update correctly.', () => {
    const payload = 'dummy age';
    const expectedState = {
      ...initialState,
      age: payload,
      isLoading: false,
    };
    expect(
      populationReducer(initialState, Slice.actions.setAge(payload)),
    ).toEqual(expectedState);
  });

  it('showError actions update correctly.', () => {
    const error = new Error('An error occurred!');
    const expectedState = {
      ...initialState,
      isLoading: false,
      error: error.message,
    };
    expect(
      populationReducer(initialState, Slice.actions.showError(error)),
    ).toEqual(expectedState);
  });
});
