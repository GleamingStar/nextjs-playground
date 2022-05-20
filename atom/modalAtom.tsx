import { atom, selector, selectorFamily } from 'recoil';
import { TTask } from '../config/types';
import { makeDate } from '../config/util';

export const isDayModalOnAtom = atom({
  key: 'isDayModalOn',
  default: false,
});

export const dayModalLocationAtom = atom({
  key: 'dayModalLocation',
  default: { x: 0, y: 0 },
});

export const dayModalDateAtom = atom<Date>({
  key:'dayModalDate',
})

export const dayModalTaskSelector = selector<TTask[]>({
  key:'dayModalTask',
  get: async({get}) => {
    const date = makeDate(get(dayModalDateAtom))
    const res = await fetch(`/api/task/date?date=${date}`)
    const {tasks} = await res.json();

    return tasks
  }
})