import styled from 'styled-components';
import Day from './Day';

const MonthWrapper = styled.div`
  width: 336px;
  min-width: 336px;
  height: 383px;
  & + & {
    margin-left: 50px;
  }
`;
const Title = styled.div`
  width: 336px;
  height: 23px;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  justify-content: center;
  color: #010101;
`;
const Table = styled.table`
  width: 336px;
  margin-top: 24px;
`;

const Week = styled.thead`
  th {
    width: 48px;
    height: 24px;
    font-size: 12px;
    line-height: 17px;
    color: #828282;
  }
`;
const makeMonthArray = (year: number, month: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const sumDay = new Date(year, month + 1, 0).getDate();

  const monthArray = [];
  let weekArray = [];
  for (let count = 1 - firstDay; count <= sumDay; count++) {
    if (weekArray.length === 7) {
      monthArray.push(weekArray);
      weekArray = [];
    }
    weekArray.push(count);
  }
  if (weekArray.length > 0) monthArray.push(weekArray);

  return monthArray;
};

const getCorrectDate = (year: number, month: number): Array<number> => {
  if (month < 0) return getCorrectDate(year - 1, month + 12);
  if (month > 11) return getCorrectDate(year + 1, month - 12);

  return [year, month];
};

const Month = ({ date, modifier }: { date: Date; modifier: number }) => {
  const [year, month] = getCorrectDate(date.getFullYear(), date.getMonth() + modifier);

  const makeDay = (day: number) => <Day key={day} value={day > 0 ? day : null} date={new Date(year, month, day)} />;
  const makeWeek = (week: Array<number>, index: number) => <tr key={index}>{week.map(makeDay)}</tr>;
  return (
    <MonthWrapper>
      <Title>{`${year}년 ${month + 1}월`}</Title>
      <Table>
        <Week>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </Week>
        <tbody>{makeMonthArray(year, month).map(makeWeek)}</tbody>
      </Table>
    </MonthWrapper>
  );
};
export default Month;
