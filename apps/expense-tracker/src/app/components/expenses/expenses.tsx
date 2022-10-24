import Card from '../UI/card/card';
import ExpenseItem, {
  ExpenseItemProps,
} from '../expenses/components/expense-item/expense-item';
import styles from './expenses.module.scss';
import ExpensesFilter from './components/expenses-filter/expenses-filter';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface ExpensesProps {
  items: Expenses[];
}

interface Expenses extends ExpenseItemProps {
  id: string;
}

export const Expenses = (props: ExpensesProps) => {
  const { items } = props;
  const [filteredYear, setFilteredYear] = useState('2022');
  const changeFilterHandler = (date: string) => setFilteredYear(date);
  return (
    <Card className={styles['expenses']}>
      <ExpensesFilter
        onChangeFilter={changeFilterHandler}
        selected={filteredYear}
      />
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
