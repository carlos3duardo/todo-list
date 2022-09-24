import { useState } from 'react';
import styles from './TodoContainer.module.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoListEmpty } from './TodoListEmpty';
import { TodoStats } from './TodoStats';

export function TodoContainer() {
  const [taskList, setTaskList] = useState([
    {
      id: 'x',
      name: 'Trocar a bateria do iPhone de Rafael.',
      done: false
    },
    {
      id: 'y',
      name: 'Aprender ReactJS com Typescript no Ignite.',
      done: true
    },
    {
      id: 'z',
      name: 'Comprar ração para o doguinho.',
      done: true
    }
  ]);

  const tasksDone = taskList.reduce((acc: number, current: any) => {
    return acc += current.done ? 1 : 0;
  }, 0);

  return (
    <main className={styles.container}>
        <TodoForm />
        <TodoStats all={taskList.length} done={tasksDone} />
        {taskList.length ? <TodoList tasks={taskList} /> : <TodoListEmpty />}
    </main>
  )
}
