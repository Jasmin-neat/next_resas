import styles from './style.module.scss';

export default function Spinner() {
  return (
    <div className={styles.overlay}>
      <span className={styles.spinner} data-testid="idSpinner" />
    </div>
  );
}
