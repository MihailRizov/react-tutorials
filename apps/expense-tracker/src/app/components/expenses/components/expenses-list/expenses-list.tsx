import Expenses from '../../expenses';
import ExpenseItem from '../expense-item/expense-item';
import styles from './expenses-list.module.scss';

export interface ExpensesListProps {
  items: Expenses[];
}

const ExpensesList = (props: ExpensesListProps) => {
  const { items } = props;

  if (!items.length) {
    return (
      <h2 className={styles['expenses-list__fallback']}>Found no expenses.</h2>
    );
  }

  return (
    <ul className={styles['expenses-list']}>
      {items.map((item: Expenses) => (
        <li key={item.id}>
          <ExpenseItem
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
