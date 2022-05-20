export const makeDate = (date: Date): string =>
  `${date.getFullYear()}${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}${date.getDate()}`;
