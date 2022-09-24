import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './TodoContainer.module.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoListEmpty } from './TodoListEmpty';
import { TodoStats } from './TodoStats';

interface TaskInterface {
  id: string;
  name: string;
  done: boolean;
}

export function TodoContainer() {
  const [taskList, setTaskList] = useState<TaskInterface[]>([]);

  const tasksDone = taskList.reduce((acc: number, current: any) => {
    return acc += current.done ? 1 : 0;
  }, 0);

  function toggleTaskStatus(taskId: string) {
    const newTaskList = taskList.map(task => {
      return {
        id: task.id,
        name: task.name,
        done: (task.id === taskId) ? !task.done : task.done
      }
    });

    setTaskList(newTaskList);
  }

  function deleteTask(taskId: string) {
    const newTaskList = taskList.filter(task => {
      return task.id !== taskId
    });

    setTaskList(newTaskList);
  }

  function addNewTask(taskName: string) {
    setTaskList([...taskList, {
      id: uuidv4(),
      name: taskName,
      done: false
    }]);
  }

  return (
    <main className={styles.container}>
        <TodoForm createTask={addNewTask} />

        <TodoStats all={taskList.length} done={tasksDone} />

        {taskList.length ? <TodoList tasks={taskList} toggleFunction={toggleTaskStatus} deleteTask={deleteTask} /> : <TodoListEmpty />}
    </main>
  )
}
