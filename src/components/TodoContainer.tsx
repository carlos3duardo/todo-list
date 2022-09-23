import { useState } from 'react';
import styles from './TodoContainer.module.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoListEmpty } from './TodoListEmpty';
import { TodoStats } from './TodoStats';

export function TodoContainer() {
  const [taskList, setTaskList] = useState([]);

  return (
    <main className={styles.container}>
        <TodoForm />
        <TodoStats />
        {taskList.length ? <TodoList /> : <TodoListEmpty />}
    </main>
  )
}
