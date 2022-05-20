import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { modifierAtom } from '../atom/calendarAtom';
import { isDayModalOnAtom } from '../atom/modalAtom';
import DayModal from '../components/calendar/modal/DayModal';
import Month from '../components/calendar/Month';

const TRANSITION_DELAY = 500;

const CalendarWrapper = styled.div`
  width: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Up = styled.button`
  position: absolute;
  top: 40%;
  right: 10px;
`;
const Down = styled.button`
  position: absolute;
  top: 40%;
  left: 110px;
`;
const OverflowWrapper = styled.div`
  overflow-x: hidden;
  width: 336px;
  @media screen and (min-width: 850px) {
    width: 722px;
  }
  transition: width 1s;
`;
const CarouselWrapper = styled.div<{ location: number; isActivated: boolean }>`
  display: flex;
  transform: ${({ location }) => `translateX(${location}px);`};
  transition: ${({ isActivated }) => (isActivated ? `transform ${TRANSITION_DELAY / 1000}s ease-in-out;` : 'none')};
`;

const delay = (timer: number) => new Promise((res, _) => setTimeout(res, timer));

const LOCATION = {
  DOWN: 0,
  NONE: -386,
  UP: -772,
};

const Calendar = () => {
  const [modifier, setModifier] = useRecoilState(modifierAtom);
  const [Transition, setTransition] = useState(LOCATION.NONE);
  const [isActivated, setActivated] = useState(false);

  const date = new Date();
  const [isDayModalOn, toggleDayModal] = useRecoilState(isDayModalOnAtom);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const months = Array.from({ length: 4 }).map((_, i) => (
    <Month key={modifier + i - 1} date={date} modifier={modifier + i - 1} />
  ));

  const clickHandler = async (type: 'UP' | 'DOWN') => {
    if (isActivated) return;
    setActivated(true);
    setTransition(LOCATION[type]);
    await delay(TRANSITION_DELAY);
    setActivated(false);
    setTransition(LOCATION.NONE);
    setModifier((cnt) => (type === 'UP' ? ++cnt : --cnt));
  };

  const off = ({ target }: MouseEvent) =>
    !wrapperRef.current?.contains(target as HTMLDivElement) && toggleDayModal(false);

  useEffect(() => {
    window.addEventListener('click', off);

    return () => {
      window.removeEventListener('click', off);
    };
  });

  return (
    <CalendarWrapper>
      <OverflowWrapper ref={wrapperRef}>
        <CarouselWrapper location={Transition} isActivated={isActivated}>
          {months}
        </CarouselWrapper>
        {isDayModalOn && <DayModal />}
      </OverflowWrapper>
      <Up onClick={() => clickHandler('UP')}>{'>'}</Up>
      <Down onClick={() => clickHandler('DOWN')}>{'<'}</Down>
    </CalendarWrapper>
  );
};

export default Calendar;
