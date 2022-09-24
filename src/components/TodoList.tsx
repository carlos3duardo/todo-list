import styles from './TodoList.module.css';
import { HiOutlineTrash } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';

interface TaskInterface {
  id: string;
  name: string;
  done: boolean;
}

interface TodoListInterface {
  tasks: TaskInterface[];
  toggleFunction: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

export function TodoList({ tasks, toggleFunction, deleteTask }: TodoListInterface) {

  const finishedTasks = tasks.filter(task => {
    return task.done;
  });

  const pendingTasks = tasks.filter(task => {
    return !task.done;
  })

  const reorderedTasks = pendingTasks.concat(finishedTasks);

  return (
    <ul className={styles.taskList}>
      {reorderedTasks.map(task => {
        return (
          <li key={task.id} className={task.done ? styles.taskDone : ''}>
            <div className={styles.checkbox} onClick={() => toggleFunction(task.id)}>{task.done ? <FaCheck size={10} /> : ''}</div>
            <div className={styles.taskName}>{task.name}</div>
            <div className={styles.trash}><a href="#" onClick={() => deleteTask(task.id)}><HiOutlineTrash size={18} /></a></div>
          </li>
        )
      })}
    </ul>
  )
}
