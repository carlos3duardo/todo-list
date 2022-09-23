import { FiPlusCircle } from "react-icons/fi";
import styles from './TodoForm.module.css';

export function TodoForm() {
  return (
    <form className={styles.form} autoComplete="off">
        <input type="text" name="task" placeholder="Adicione uma nova tarefa" value="" />
        <button type="submit"><span>Criar</span> <FiPlusCircle size={16} /></button>
    </form>
  )
}
