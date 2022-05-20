import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import styled from 'styled-components';

const MemoWrapper = styled.div``;

const Memo = ({ data }) => {
  return (
    <MemoWrapper>
      {data.name.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </MemoWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) return { redirect: { destination: '/' }, props: {} };
  const res = await fetch('http://localhost:3000/api/article');
  const data = await res.json();

  return { props: { data } };
};

export default Memo;
