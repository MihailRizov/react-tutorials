import ExpenseForm, {
  ExpenseData,
} from './components/expense-form/expense-form';
import styles from './new-expense.module.scss';

export interface Expense extends ExpenseData {
  id: string;
}

export interface NewExpenseProps {
  onAddExpense: (expense: Expense) => void;
}

const NewExpense = (props: NewExpenseProps) => {
  const { onAddExpense } = props;
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className={styles['new-expense']}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
