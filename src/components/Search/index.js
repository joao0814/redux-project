import styles from './Search.module.scss';

export default function Search() {
  return (
    <div className={styles.busca}>
      <input type="text" placeholder="Search..."  className={styles.input}/>
    </div>
  );
}
