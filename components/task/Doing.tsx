import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { doingTaskSelector } from '../../atom/taskAtom';
import { TTask } from '../../config/types';
import Task from './Task';

const DoingWrapper = styled.div``;

const Doing = () => {
  const tasks = useRecoilValue(doingTaskSelector);
  return (
    <DoingWrapper>
      <input type={'checkbox'} />
      {tasks?.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </DoingWrapper>
  );
};

export default Doing;
