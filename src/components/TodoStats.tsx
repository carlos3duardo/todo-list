import styles from './TodoStats.module.css';

interface TodoStatsInterface {
  all: number;
  done: number;
}

export function TodoStats({all = 0, done = 0}: TodoStatsInterface) {
  return (
    <ul className={styles.container}>
      <li className={styles.createdTasks}>Tarefas criadas <span className={styles.counter}>{all}</span></li>
      <li className={styles.finishedTasks}>Concluídas <span className={styles.counter}>{all ? `${done} de ${all}` : done}</span></li>
    </ul>
  )
}
