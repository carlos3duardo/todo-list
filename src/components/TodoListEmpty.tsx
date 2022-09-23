import clipboardIcon from '../assets/images/clipboard.svg';
import styles from './TodoListEmpty.module.css';

export function TodoListEmpty() {
  return (
    <div className={styles.emptyList}>
      <figure><img src={clipboardIcon} alt="Lista vazia" /></figure>
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
