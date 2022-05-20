import { GetServerSideProps } from 'next';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { toDoTaskSelector } from '../../atom/taskAtom';
import { TTask } from '../../config/types';
import Task from './Task';

const ToDoWrapper = styled.div``;

const ToDo = () => {
  const tasks = useRecoilValue(toDoTaskSelector);
  return (
    <ToDoWrapper>
      <input type={'checkbox'} />
      {tasks?.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ToDoWrapper>
  );
};

export default ToDo;
