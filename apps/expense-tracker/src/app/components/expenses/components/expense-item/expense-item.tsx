import Card from '../../../UI/card/card';
import ExpenseDate from '../expense-date/expense-date';
import styles from './expense-item.module.scss';

/* eslint-disable-next-line */
export interface ExpenseItemProps {
  title: string;
  date: Date;
  amount: number;
}

export const ExpenseItem = (props: ExpenseItemProps) => {
  const { title, date, amount } = props;

  return (
    <Card className={styles['expense-item']}>
      <ExpenseDate date={date} />
      <div className={styles['expense-item__description']}>
        <h2> {title} </h2>
        <div className={styles['expense-item__price']}>${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
