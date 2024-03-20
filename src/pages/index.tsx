import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useResas from '@/utils/useResas';
import { selectPopulation } from '@/store';
import PrefItem from '@/components/prefectureCard';
import Chart from '@/components/chart';
import Spinner from '@/components/spinner';
import Select from '@/components/ageSelect';
import styles from './style.module.scss';

export default function Home() {
  const { loadPref, loadPopulation, deletePopulation } = useResas();
  const { error, prefectures, isLoading } = useSelector(selectPopulation);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  useEffect(() => {
    loadPref();
  }, [loadPref]);

  const handleCheck = (prefCode: number, checked: boolean) => {
    if (checked) loadPopulation(prefCode);
    else deletePopulation(prefCode);
  };

  return (
    <main className={styles.main}>
      <title>Resas</title>
      <div className={styles.titleConatiner}>
        <h1>人口統計資料</h1>
      </div>

      <div>
        <h2 className={styles.titleSection}>都道府県</h2>
        <div className={styles.container}>
          {prefectures.map((pref) => (
            <PrefItem
              prefCode={pref.prefCode}
              name={pref.prefName}
              onChange={handleCheck}
              key={pref.prefName}
            />
          ))}
        </div>
      </div>
      <div className={styles.ageContainer}>
        年齢: <Select />
      </div>

      <div>
        <Chart />
      </div>

      {isLoading && <Spinner />}
    </main>
  );
}
