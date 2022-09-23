import styles from './TodoStats.module.css';

export function TodoStats() {
  return (
    <ul className={styles.container}>
      <li className={styles.createdTasks}>Tarefas criadas <span className={styles.counter}>0</span></li>
      <li className={styles.finishedTasks}>Concluídas <span className={styles.counter}>0</span></li>
    </ul>
  )
}
