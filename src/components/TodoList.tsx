import styles from './TodoList.module.css';
import { BsCheckCircleFill, BsCircle, BsTrash } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';

interface TaskInterface {
  id: string;
  name: string;
  done: boolean;
}

interface TodoListInterface {
  tasks: TaskInterface[];
}

export function TodoList({ tasks }: TodoListInterface) {
  return (
    <ul className={styles.taskList}>
      {tasks.map(task => {
        return (
          <li key={task.id} className={task.done ? styles.taskDone : ''}>
            <div className={styles.checkbox}>{task.done ? <FaCheck size={10} /> : ''}</div>
            <div className={styles.taskName}>{task.name}</div>
            <div className={styles.trash}><a href="javascript:;"><HiOutlineTrash size={18} /></a></div>
          </li>
        )
      })}
    </ul>
  )
}
