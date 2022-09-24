import { ChangeEvent, FormEvent, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import styles from './TodoForm.module.css';

interface TodoFormInterface {
  createTask: (taskName: string) => void;
}

export function TodoForm({ createTask }: TodoFormInterface) {
  const [task, setTask] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    createTask(task);
    setTask('');
  }

  return (
    <form onSubmit={handleCreateTask} className={styles.form} autoComplete="off">
        <input
          type="text"
          name="task"
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={handleNewTaskChange}
          required
        />
        <button type="submit"><span>Criar</span> <FiPlusCircle size={16} /></button>
    </form>
  )
}
