import { useState } from 'react';
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
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => setIsEditing(true);
  const cancelEditingHandler = () => setIsEditing(false);

  return (
    <div className={styles['new-expense']}>
      {!isEditing && (
        <button type='button' onClick={addNewExpenseHandler}>
          Add new Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEditing={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
