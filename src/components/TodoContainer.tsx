import styles from './TodoContainer.module.css';
import { TodoForm } from './TodoForm';

export function TodoContainer() {
  return (
    <main className={styles.container}>
        <TodoForm />
    </main>
  )
}
