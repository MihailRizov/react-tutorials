import Card from '../UI/card/card';
import ExpenseItem, {
  ExpenseItemProps,
} from '../expenses/components/expense-item/expense-item';
import styles from './expenses.module.scss';

/* eslint-disable-next-line */
export interface ExpensesProps {
  items: Expenses[];
}

interface Expenses extends ExpenseItemProps {
  id: string;
}

export const Expenses = (props: ExpensesProps) => {
  const { items } = props;
  return (
    <Card className={styles['expenses']}>
      {items.map((item: Expenses) => (
        <ExpenseItem
          title={item.title}
          date={item.date}
          amount={item.amount}
          key={item.id}
        />
      ))}
    </Card>
  );
};

export default Expenses;
