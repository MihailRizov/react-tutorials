import ExpenseForm from './components/expense-form/expense-form';
import styles from './new-expense.module.scss';

/* eslint-disable-next-line */
export interface NewExpenseProps {}

const NewExpense = (props: NewExpenseProps) => {
  return (
    <div className={styles['new-expense']}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
