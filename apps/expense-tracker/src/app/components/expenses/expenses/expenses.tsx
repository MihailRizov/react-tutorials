import ExpenseItem, {
  ExpenseItemProps,
} from '../../expense-item/expense-item/expense-item';
import styles from './expenses.module.scss';

/* eslint-disable-next-line */
export interface ExpensesProps {
  expenses: Expenses[];
}

interface Expenses extends ExpenseItemProps {
  id: string;
}

export function Expenses(props: ExpensesProps) {
  const { expenses } = props;
  return (
    <section className='expenses'>
      {expenses.map((expense: Expenses) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
        />
      ))}
    </section>
  );
}

export default Expenses;
