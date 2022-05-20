import { MouseEvent, MouseEventHandler, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { dayModalDateAtom, dayModalLocationAtom, isDayModalOnAtom } from '../../atom/modalAtom';
import DayModal from './modal/DayModal';

const DayWrapper = styled.td<{ isPassed: boolean }>`
  width: 48px;
  height: 48px;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  vertical-align: middle;
  color: ${({ isPassed }) => (isPassed ? '#bbb' : '#000')};
`;

const Day = ({ value, date }: { value: number; date: Date }) => {
  const isPassed = new Date().getTime() > date.getTime() + 60 * 60 * 24 * 1000;
  const toggleDayModal = useSetRecoilState(isDayModalOnAtom);
  const setDayModalLocation = useSetRecoilState(dayModalLocationAtom);
  const setDayModalDate = useSetRecoilState(dayModalDateAtom)

  const onClickHandler: MouseEventHandler = ({ pageX, pageY }: MouseEvent) => {
    setDayModalLocation({ x: pageX, y: pageY });
    toggleDayModal(true);
    setDayModalDate(date)
  };
  return (
    <DayWrapper isPassed={isPassed} onClick={onClickHandler}>
      {value || ''}
    </DayWrapper>
  );
};
export default Day;
