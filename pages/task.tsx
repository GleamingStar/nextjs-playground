import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';
const ToDo = lazy(() => import('../components/task/ToDo'));
const Doing = lazy(() => import('../components/task/Doing'));

const TaskWrapper = styled.div``;

const Task = () => {
  return (
    <TaskWrapper>
      <Suspense fallback={<div>loading...</div>}>
        <ToDo />
      </Suspense>
      <Suspense fallback={<div>loading...</div>}>
        <Doing />
      </Suspense>
      <div>something ssr but suspense</div>
    </TaskWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return session ? { props: {} } : { redirect: { destination: '/' }, props: {} };
};
// static page generating error

export default Task;
