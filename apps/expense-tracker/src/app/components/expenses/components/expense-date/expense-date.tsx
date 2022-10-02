import styles from './expense-date.module.scss';

/* eslint-disable-next-line */
export interface ExpenseDateProps {
  date: Date;
}

export const ExpenseDate = (props: ExpenseDateProps) => {
  const { date } = props;
  const dateLocaleOption = 'en-us';
  const getMonth = (date: Date): string => {
    return date.toLocaleString(dateLocaleOption, { month: 'long' });
  };

  const getYear = (date: Date): number => {
    return date.getFullYear();
  };

  const getDay = (date: Date): string => {
    return date.toLocaleString(dateLocaleOption, { day: '2-digit' });
  };

  return (
    <div className={styles['expense-date']}>
      <div className={styles['expense-date__month']}>{getMonth(date)}</div>
      <div className={styles['expense-date__year']}>{getYear(date)}</div>
      <div className={styles['expense-date__day']}>{getDay(date)}</div>
    </div>
  );
};

export default ExpenseDate;
