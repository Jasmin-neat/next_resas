import { ageList } from '@/constant/url';
import useResas from '@/utils/useResas';
import { useSelector } from 'react-redux';
import { selectPopulation } from '@/store';
import styles from './style.module.scss';

const Select: React.FC = () => {
  const { setAge } = useResas();
  const { age } = useSelector(selectPopulation);

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setAge(e.currentTarget.value);
  };

  return (
    <select className={styles.select} value={age} onChange={handleChange}>
      {ageList.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
