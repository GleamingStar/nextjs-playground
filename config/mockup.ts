import { TTask } from './types';

export let taskId = 2;

export const mockTask: TTask[] = [
  {
    id: 0,
    start: new Date(1994, 5, 30),
    title: '대제목',
    body: [
      { id: 0, title: '소제목', body: [], complete: false },
      { id: 1, title: '소제목', body: [], complete: false },
      { id: 2, title: '소제목', body: [], complete: false },
    ],
    priority: 3,
    complete: false,
  },
  {
    id: 1,
    start: new Date(2021, 4, 30),
    end: new Date(2021, 5, 30),
    title: '대제목2',
    body: [
      { id: 0, title: '소제목2', body: [], complete: false },
      { id: 1, title: '소제목', body: [], complete: true },
    ],
    priority: 3,
    complete: false,
  },
];
