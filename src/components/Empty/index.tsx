import styles from "./styles.m.styl";

export default function Empty(): JSX.Element {
  return (
    <div className={styles.Empty}>
      <div className={styles.title}>Нет данных</div>
    </div>
  );
}
