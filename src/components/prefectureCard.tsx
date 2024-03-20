import { useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import classNames from 'classnames';
import { selectPopulation } from '@/store';
import styles from './style.module.scss';

interface Props {
  prefCode: number;
  name: string;
  onChange: (prefCode: number, checked: boolean) => void;
}

const PrefItem: React.FC<Props> = ({ prefCode, name, onChange }) => {
  const { isLoading } = useSelector(selectPopulation);
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback(() => {
    if (!isLoading) {
      setChecked((prevState) => !prevState);
      onChange(prefCode, !checked);
    }
  }, [onChange, prefCode, isLoading, checked]);

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles.active]: checked,
      })}
    >
      <input
        className={classNames({
          [styles.checkBoxContainer]: true,
        })}
        type="checkbox"
        checked={checked}
        id={name}
        onChange={handleChange}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default PrefItem;
