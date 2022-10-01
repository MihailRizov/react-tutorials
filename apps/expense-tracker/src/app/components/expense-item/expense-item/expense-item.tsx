import ExpenseDate from '../../expense-date/expense-date/expense-date';
import styles from './expense-item.module.scss';

/* eslint-disable-next-line */
export interface ExpenseItemProps {
  title: string;
  date: Date;
  amount: number;
}

export function ExpenseItem(props: ExpenseItemProps) {
  const { title, date, amount } = props;

  return (
    <div className={styles['expense-item']}>
      <ExpenseDate date={date} />
      <div className={styles['expense-item__description']}>
        <h2> {title} </h2>
        <div className={styles['expense-item__price']}>${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
