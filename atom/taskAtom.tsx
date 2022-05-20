import { atom, selector } from 'recoil';
import { TTask } from '../config/types';

export const taskListAtom = atom<Array<TTask>>({
  key: 'taskArray',
  default: [],
});

export const toDoTaskSelector = selector<TTask[]>({
  key: 'toDoTask',
  get: async () => {
    const res = await fetch('http://localhost:3000/api/task?sort=todo');
    const { tasks }: { tasks: TTask[] } = await res.json();
    return tasks;
  },
});
export const doingTaskSelector = selector<TTask[]>({
  key: 'doingTask',
  get: async () => {
    const res = await fetch('http://localhost:3000/api/task?sort=doing');
    const { tasks }: { tasks: TTask[] } = await res.json();
    return tasks;
  },
});
export const doneTaskSelector = selector<TTask[]>({
  key: 'doneTask',
  get: async () => {
    const res = await fetch('http://localhost:3000/api/task?sort=done');
    const { tasks }: { tasks: TTask[] } = await res.json();
    return tasks;
  },
});
