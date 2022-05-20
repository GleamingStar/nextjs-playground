import styled from 'styled-components';
import Link from 'next/link';

const NavigationBarWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100%;
  padding: 20px;
  background-color: #f6ffa4;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const List = styled.li`
  & + & {
    margin-top: 20px;
  }
`;

const NavigationBar = () => (
  <NavigationBarWrapper>
    <List>
      <Link href="/">메인</Link>
    </List>
    <List>
      <Link href="/calendar">달력</Link>
    </List>
    <List>
      <Link href="/task">일정</Link>
    </List>
    <List>
      <Link href="/memo">메모</Link>
    </List>
  </NavigationBarWrapper>
);

export default NavigationBar;
