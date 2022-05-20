import { Suspense, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { dayModalLocationAtom, dayModalTaskSelector } from '../../../atom/modalAtom';

const DayModalWrapper = styled.div<{ x: number; y: number }>`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  border: 1px solid;

  transform: ${({ x, y }) => `translate(${x + 10}px, ${y + 10}px)`};

  transition: transform 0.2s ease-out;
  /* transition: width 1s height 1s; */

  background-color: #fff8;
  backdrop-filter: blur(1px);
  box-shadow: 2px 2px 2px;
`;

const DayModal = () => {
  // const [isActivated, setActivated] = useState(false);
  const { x, y } = useRecoilValue(dayModalLocationAtom);

  // 모달은 overflow바깥에서 하나만
  // day click시 해당 포인터 위치로 좌표 이동, 내용은 해당 day의 일정, recoilstate로 관리하면될듯
  // closest나 에어비엔비, issuetracker가서 off로직 찾기

  return (
    <DayModalWrapper x={x} y={y}>

      <Suspense>
        <Task />
      </Suspense>
      <input placeholder="대충 새일정 추가" />
    </DayModalWrapper>
  );
};

const Task = () => {
  const tasks = useRecoilValue(dayModalTaskSelector);

  const foo = tasks?.map(task=><div key={task.id}>{task.title}</div>)
  return <div>{foo}</div>;
};

export default DayModal;
