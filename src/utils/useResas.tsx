import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Slice } from '@/store/slice';
import { prefectureURL, populationURL } from '@/constant/url';

axios.defaults.headers.common['X-API-KEY'] =
  process.env.NEXT_PUBLIC_RESAS_API_KEY;

export default function useResas() {
  const dispatch = useDispatch();

  const loadPref = useCallback(() => {
    dispatch(Slice.actions.setLoading());
    axios
      .get(prefectureURL)
      .then((res) => {
        const payload = { data: res.data.result };
        dispatch(Slice.actions.loadPref(payload));
      })
      .catch((err) => {
        dispatch(Slice.actions.showError(err));
      });
  }, [dispatch]);

  const loadPopulation = useCallback(
    (prefCode: number) => {
      dispatch(Slice.actions.setLoading());
      axios
        .get(`${populationURL} ${prefCode}`)
        .then((res) => {
          const payload = { data: res.data.result.data, prefCode };
          dispatch(Slice.actions.loadPopulation(payload));
        })
        .catch((err) => {
          dispatch(Slice.actions.showError(err));
        });
    },
    [dispatch],
  );

  const deletePopulation = useCallback(
    (prefCode: number) => {
      dispatch(Slice.actions.deletePopulation(prefCode));
    },
    [dispatch],
  );

  const setAge = useCallback(
    (age: string) => {
      dispatch(Slice.actions.setAge(age));
    },
    [dispatch],
  );

  return {
    loadPref,
    loadPopulation,
    deletePopulation,
    setAge,
  };
}
